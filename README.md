## CARPET — The Campus Marketplace

### Overview

CARPET is a mobile app for university communities that connects clients with student freelancers for everyday services like cosmetics, photography, videography, digital design, coding, and more. It features category browsing, search, curated cards, bookings, and a Stripe-powered checkout flow — all built with React Native (Expo) and a lightweight Node/Express backend.

### Key Features

- **Onboarding & Welcome**: Animated splash and setup screens that introduce CARPET and let users choose a role (client or service provider).
- **Home Feed**: Popular categories and recommended service cards with ratings, reviews, and pricing.
- **Search**: Category search with quick filtering for fast discovery.
- **Bookings**: Views for upcoming bookings and detailed breakdowns.
- **Service Selection + Checkout**: Curate add-ons, dynamically update the price, and pay using the Stripe Payment Sheet.
- **Navigation**: Bottom tabs for Home, Search, Chat (placeholder UI), and My Bookings.

## Architecture

### High-level

- **Frontend**: React Native app using Expo SDK 48, React Navigation (Stack + Bottom Tabs), and `@stripe/stripe-react-native` for payments.
- **Backend**: Node.js / Express service that creates Stripe PaymentIntents. The app currently exposes a `POST /pay` endpoint on port `8080`.

### Request flow (payments)

1. User selects services and add-ons in `ChoosingService` and taps Pay.
2. Frontend requests `POST /pay` from the backend with `{ name, cost }`.
3. Backend creates a Stripe PaymentIntent and returns `client_secret`.
4. Frontend initializes and presents Stripe’s Payment Sheet using that `client_secret`.

## Tech Stack

- **Mobile**: Expo, React Native, React, React Navigation
- **UI**: React Native Elements (SearchBar), vector icons, custom cards and components
- **Payments**: Stripe (`@stripe/stripe-react-native`, `stripe` server SDK)
- **Server**: Node.js, Express, CORS, dotenv

## Project Structure

```
carpet/
  backend/
    index.js          # Express server (Stripe PaymentIntent endpoint)
    package.json
  frontend/
    App.js            # Navigation container & stack
    Components/       # Screens and UI components
    assets/           # Images and icons
    package.json
  README.md
```

### Notable frontend components

- `SplashScreen`, `Setup`, `AccountInfo` — onboarding and verification
- `Tabs` — bottom tab navigator (Home/Main, SearchPage, Inbox, BookingsOrders)
- `Main`, `StandardCard`, `NavigateCard` — curated feed and category cards
- `SearchPage`, `SearchCard` — search categories and options
- `BookingsOrders`, `BookingDetails`, `BookingCard` — booking list and details
- `ChoosingService`, `Payment` — select add-ons, compute price, and present Stripe Payment Sheet

## Getting Started

### Prerequisites

- Node.js 16+ (Node 18 recommended)
- npm or Yarn
- Expo CLI (`npx expo` is fine) and Expo Go app (for device testing)
- iOS Simulator (Xcode) and/or Android Emulator (Android Studio) for local simulators
- Stripe account (for API keys)

### 1) Install dependencies

Run installs separately for server and app:

```bash
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
```

### 2) Configure environment

Create a `backend/.env` file with your Stripe secret key:

```bash
# backend/.env
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXX
```

Important:

- Use your Stripe **secret key** (starts with `sk_`) on the backend only.
- On the frontend, you must use your Stripe **publishable key** (starts with `pk_`) in `StripeProvider`.

The backend runs on port `8080` by default (configured in `backend/index.js`).

### 3) Run the backend

```bash
cd backend
npm start
# Server listens on http://localhost:8080
```

If you prefer live-reloading and have `nodemon` installed globally, you can use the existing script:

```bash
npm run dev
```

### 4) Run the mobile app (Expo)

```bash
cd frontend
npm run start
# or
# npm run ios
# npm run android
```

Choose the appropriate target from Expo Dev Tools (iOS simulator, Android emulator, or a physical device via QR code).

### Network configuration notes

The payment component makes a request to your backend at `POST /pay`. When running on a simulator or device, make sure the frontend can reach your machine:

- iOS Simulator can usually use `http://localhost:8080`.
- Android Emulator often needs `http://10.0.2.2:8080`.
- Physical devices must use your computer’s LAN IP (e.g., `http://192.168.1.10:8080`).

In `frontend/Components/Payment.js` there’s a helper `uri` computed from the Expo manifest, but the `fetch` currently uses `http://localhost:8080/pay`. You can switch it to use the computed `uri` for better cross-device support:

```diff
- const response = await fetch("http://localhost:8080/pay", {
+ const response = await fetch(`${uri}/pay`, {
```

Alternatively, run Expo in tunnel mode and expose your backend via a tunneling service (ngrok, Cloudflare Tunnel) and point the app to that URL.

## Stripe Testing

- Use Stripe test cards like `4242 4242 4242 4242` with any future expiry, any CVC, and a valid ZIP.
- Amount is computed from selected add-ons in `ChoosingService` (e.g., Gel Polish Removal, Acrylic Nails, etc.).
- The backend rounds to cents and creates the PaymentIntent in USD.

## Scripts

### Backend (in `backend/`)

- `npm start` — runs `node index.js`
- `npm run dev` — runs `nodemon index` (requires nodemon installed globally or added as a devDependency)

### Frontend (in `frontend/`)

- `npm run start` — starts Expo dev server
- `npm run ios` — start Expo on iOS simulator
- `npm run android` — start Expo on Android emulator
- `npm run web` — run Expo for web

## Security Notes

- Never embed Stripe secret keys (`sk_...`) in the mobile app. They belong only on the server.
- Use environment variables for secrets (`backend/.env`). Consider adding a dedicated `.env.example` to document required keys.
- For production, serve the backend over HTTPS and configure allowed origins for CORS.

## Roadmap / Ideas

- Real authentication and role-based flows (client vs. provider)
- Provider profiles, availability, and booking requests
- Persistent chat and notifications
- Webhooks for payment status and receipts
- Real search and filtering backed by an API
