# Paystack Integration Guide - Eleven Fifteen Fitness Gym

## Overview
Membership checkout lets users:
- Select membership tiers online
- Fill out enrollment forms
- Pay securely with cards, bank transfers, or USSD
- Receive instant payment confirmation

## Setup Instructions

### 1. Get Your Paystack Keys

1. Sign up at [Paystack](https://paystack.com) if you haven't already
2. Complete your business verification
3. Go to Settings → API Keys & Webhooks
4. Copy your **Public Key**

**Important:** 
- Test mode key starts with `pk_test_`
- Live mode key starts with `pk_live_`

### 2. Update the Public Key

Add your Paystack **public key** to `1115-frontend/.env.local`:
```bash
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_key_here
```

For production, use your live public key (`pk_live_...`). Restart the Next.js server after changing environment variables. Never put your secret key in a `NEXT_PUBLIC_` variable or client code.

## How It Works

### User Flow:

1. **Select Membership Tier**
   - Standard (₦28,000)
   - Couples (₦54,000)
   - Family (₦125,000)

2. **Fill Enrollment Form**
   - Personal details
   - Partner info (for couples/family)
   - Emergency contact
   - Fitness goals

3. **Pay with Paystack**
   - The secure Paystack checkout opens for card, bank transfer, or USSD payment.
   - The payment reference is displayed after Paystack returns a successful response.

### Payment Methods via Paystack:
- Debit/Credit Cards (Mastercard, Visa, Verve)
- Bank Transfer
- USSD
- Mobile Money
- QR Code

## Backend Integration (Next Steps)

### Create API Endpoint to Verify Payments

Create `src/app/api/verify-payment/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export async function POST(request: NextRequest) {
  const { reference, formData } = await request.json();

  // Verify payment with Paystack
  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  const data = await response.json();

  if (data.data.status === 'success') {
    // Payment verified! Save enrollment to database
    // Send confirmation email to user
    // Send notification to gym admin
    
    return NextResponse.json({ 
      success: true, 
      message: 'Payment verified successfully' 
    });
  }

  return NextResponse.json({ 
    success: false, 
    message: 'Payment verification failed' 
  });
}
```

### Add Secret Key to Environment

In `.env.local`:
```bash
PAYSTACK_SECRET_KEY=sk_test_your_secret_key_here
```

**Never expose your secret key in client-side code!**

## Database Schema (Recommended)

```sql
CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  reference VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  plan_type VARCHAR(50) NOT NULL,
  amount INTEGER NOT NULL,
  payment_status VARCHAR(50) DEFAULT 'pending',
  payment_method VARCHAR(50),
  form_data JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Webhook Setup (Important for Production)

### 1. Create Webhook Endpoint

Create `src/app/api/webhooks/paystack/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('x-paystack-signature');

  // Verify webhook signature
  const hash = crypto
    .createHmac('sha512', PAYSTACK_SECRET_KEY)
    .update(body)
    .digest('hex');

  if (hash !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const event = JSON.parse(body);

  // Handle different webhook events
  switch (event.event) {
    case 'charge.success':
      // Payment successful - update database
      console.log('Payment successful:', event.data);
      break;
    
    case 'transfer.failed':
      // Handle failed transfers
      break;
    
    default:
      console.log('Unhandled event:', event.event);
  }

  return NextResponse.json({ received: true });
}
```

### 2. Register Webhook URL in Paystack Dashboard

Go to: Settings → API Keys & Webhooks → Add Webhook

Webhook URL:
```
https://yourdomain.com/api/webhooks/paystack
```

## Testing

### Test Cards (Paystack Test Mode)

**Success:**
- Card: 4084 0840 8408 4081
- CVV: 408
- Expiry: Any future date
- PIN: 0000
- OTP: 123456

**Decline:**
- Card: 5060 6666 6666 6666 6666
- CVV: 123
- Expiry: Any future date

### Test the Flow:

1. Go to `/membership-application`
2. Select a tier
3. Fill the form with test data
4. Email: test@example.com
5. Click "Pay now with Paystack"
6. Use test card details above
7. Complete payment
8. Check browser console for payment response

## Bank Transfer Instructions

Update the bank details in `MembershipEnrollment.tsx` line ~82:

```typescript
const handleBankTransfer = () => {
  setNotice(`Bank Transfer Instructions:

Account Name: Eleven Fifteen Fitness Gym
Bank: Your Bank Name
Account Number: 0123456789
Amount: ${n(total)}

Please use your name as the payment reference and send proof of payment to 0708 705 1788 via WhatsApp.`);
};
```

## Email Notifications

Install email service (e.g., Resend, SendGrid):

```bash
npm install resend
```

Send confirmation emails after successful payment:

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'gym@yourdomain.com',
  to: formData.email,
  subject: 'Membership Payment Confirmed - Eleven Fifteen Fitness',
  html: `
    <h1>Payment Confirmed!</h1>
    <p>Dear ${formData.fullName},</p>
    <p>Your payment of ${n(total)} has been confirmed.</p>
    <p>Reference: ${reference}</p>
    <p>Plan: ${plan.title}</p>
    <p>Visit us at Tosin Complex, Ijoko Road to complete your enrollment.</p>
  `
});
```

## Security Best Practices

1. ✅ **Never expose secret keys** - Only use public key in frontend
2. ✅ **Always verify payments** on the backend before granting access
3. ✅ **Use webhooks** for reliable payment confirmation
4. ✅ **Validate webhook signatures** to prevent fake webhooks
5. ✅ **Use HTTPS** in production
6. ✅ **Store sensitive data** in environment variables
7. ✅ **Log all transactions** for auditing

## Support & Documentation

- **Paystack Docs**: https://paystack.com/docs
- **Paystack Support**: support@paystack.com
- **Integration Status**: Check Paystack Dashboard → Transactions

## Troubleshooting

### Payment Modal Not Opening
- Check if Paystack script loaded: Open browser console
- Verify public key is correct
- Check for JavaScript errors

### Payment Succeeds But No Confirmation
- Implement webhook handler
- Add backend verification endpoint
- Check Paystack dashboard for transaction status

### User Can't Complete Payment
- Ensure email and amount are valid
- Check if test/live mode matches your key
- Verify card details for test mode

## Production Checklist

- [ ] Replace test key with live public key
- [ ] Add secret key to environment variables (server only)
- [ ] Set up webhook endpoint
- [ ] Register webhook URL in Paystack dashboard
- [ ] Test with live card (small amount)
- [ ] Set up payment verification
- [ ] Configure email notifications
- [ ] Set up database to store enrollments
- [ ] Add admin dashboard to view payments
- [ ] Enable proper error logging
- [ ] Test refund process
- [ ] Update bank transfer details

## Current Features Implemented

✅ Tier selection (Standard, Couples, Family)
✅ Complete enrollment form with validation
✅ Paystack inline checkout
✅ Form state management
✅ Payment confirmation UI
✅ Mobile responsive design
✅ Loading states during payment
✅ Error handling

## Need Help?

Contact Paystack support or check their documentation for any integration issues.
