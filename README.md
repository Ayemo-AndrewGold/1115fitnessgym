# Eleven Fifteen Fitness Gym - Full Stack Application

Modern fitness gym website with membership management, online payment integration, and content management.

## 🏗️ Project Structure

```
eleven-fifteen-fitness-gym/
├── 1115-frontend/          # Next.js 16 frontend application
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   ├── components/     # Reusable UI components
│   │   └── lib/            # Utilities and configs
│   ├── public/             # Static assets (images, videos)
│   └── package.json
│
├── 1115-backend/           # Backend API (to be implemented)
│   └── ...
│
└── README.md               # This file
```

## 🚀 Getting Started

### Frontend Setup

```bash
cd 1115-frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd 1115-backend
# Setup instructions to be added
```

## 🔐 Environment Variables

**IMPORTANT:** Never commit `.env.local` files to git!

Create a `.env.local` file in the `1115-frontend` directory:

```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_test_key_here
```

For production, use your live Paystack public key.

## 🎨 Features

### Frontend
- ✅ Responsive landing page with video backgrounds
- ✅ About, Programs, Membership, Events, Gallery, Contact pages
- ✅ Membership enrollment with Paystack payment integration
- ✅ Google Maps integration for location
- ✅ Mixed video/photo gallery
- ✅ Mobile-optimized navigation
- ✅ Scroll-to-top and WhatsApp widgets

### Backend (Coming Soon)
- Payment verification webhook
- Membership management
- User authentication
- Admin dashboard

## 💳 Payment Integration

Uses Paystack for secure payment processing:
- Test Mode: Use test cards for development
- Production: Switch to live keys for production

## 📱 Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Paystack Inline JS

**Backend:**
- TBD

## 🚢 Deployment

### Frontend
Deploy to Vercel (recommended for Next.js):

```bash
cd 1115-frontend
vercel
```

### Backend
Deployment instructions to be added.

## 📄 License

Private - All rights reserved

## 👥 Team

Eleven Fifteen Fitness Gym
