# 🍽️ TableIQ – Restaurant Booking Mobile App

A modern restaurant table booking application built with **React Native (Expo)**, **Firebase**, and **NativeWind**, designed to provide a seamless reservation experience with secure authentication, intuitive navigation, and real-time booking management.

---

## 🚀 Overview

TableIQ allows users to discover restaurants, browse details, and reserve tables in just a few taps.

Users can:

- 🔐 Sign up or Sign in using Firebase Authentication
- 👤 Continue as a Guest without creating an account
- 🍽 Browse available restaurants
- 📖 View restaurant information
- 📅 Select booking date
- ⏰ Choose available time slots
- 👥 Select number of guests
- 🪑 Reserve a table
- 💳 Complete booking through an integrated payment flow
- 📜 View booking history

The application is built using **Expo Router** with a combination of **Drawer Navigation**, **Bottom Tabs**, and **Dynamic Routes** for a scalable navigation architecture.

---

# ✨ Features

### 🔐 Authentication

- Firebase Authentication
- Email & Password Sign In
- User Registration
- Guest User Mode
- Persistent Login Sessions

### 🍽 Restaurant Browsing

- Explore restaurant listings
- View restaurant details
- Dynamic restaurant pages
- About & Contact sections

### 📅 Booking System

- Select booking date
- Choose available time slot
- Select guest count
- Reserve tables
- Booking confirmation flow

### 💳 Payment Flow

- Booking payment modal
- Reservation confirmation
- Booking component abstraction

### 📜 Booking History

- View previous reservations
- Track booked tables
- Simple reservation management

---

# 🧠 Key Learning Outcomes

- Firebase Authentication integration
- Firestore database design
- Expo Router file-based navigation
- Drawer + Bottom Tabs architecture
- Dynamic routing using Expo Router
- Form validation using Zod
- React Hooks for reusable logic
- NativeWind styling workflow
- Component-based architecture
- Context API for global state management

---

# ⚙️ Tech Stack

## 📱 Frontend

- React Native
- Expo
- TypeScript
- Expo Router
- NativeWind
- React Hooks
- Context API
- Zod

## ☁️ Backend / Database

- Firebase Authentication
- Cloud Firestore

## 🎨 Styling

- NativeWind (Tailwind CSS for React Native)

---

# 📁 Project Structure

```text
TableIQ/
│
├── app/
│   ├── (auth)/
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   └── _layout.tsx
│   │
│   ├── (drawer)/
│   │   └── (tabs)/
│   │       ├── home.tsx
│   │       ├── explore.tsx
│   │       ├── history.tsx
│   │       └── _layout.tsx
│   │
│   ├── restaurant/
│   │   ├── [id].tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   └── _layout.tsx
│   │
│   ├── checkout.tsx
│   ├── index.tsx
│   └── _layout.tsx
│
├── components/
│   ├── Booking.tsx
│   └── PaymentModal.tsx
│
├── config/
│   ├── firebaseConfig.js
│   └── bulkupload.js
│
├── constants/
│   └── Color.ts
│
├── context/
│   └── userContext.tsx
│
├── store/
│   └── data.ts
│
├── validations/
│   └── authSchema.ts
│
├── assets/
│
├── app.json
├── eas.json
└── babel.config.js
```

---

# 🧭 Navigation Structure

The application uses **Expo Router** with nested layouts.

```
Root Layout
│
├── Authentication
│   ├── Sign In
│   └── Sign Up
│
├── Drawer Navigation
│   │
│   └── Bottom Tabs
│       ├── Home
│       ├── Explore
│       └── Booking History
│
├── Restaurant
│   ├── Restaurant Details
│   ├── About
│   └── Contact
│
└── Checkout
```

This hybrid navigation structure keeps the application modular and easy to scale.

---

# 🔐 Authentication Flow

- User signs up using Email & Password
- Firebase Authentication creates the account
- User data is stored in Firestore
- Existing users can securely log in
- Users may continue as Guest without authentication
- Authentication state is managed globally using Context API

---

# 🗄️ Database

Firebase Firestore stores:

- User information
- Restaurant details
- Table bookings
- Reservation history

---

# 🎨 UI Highlights

- Responsive layouts
- NativeWind utility-first styling
- Modern card-based restaurant design
- Clean booking flow
- Reusable UI components
- Mobile-first experience

---

# 🧩 Architecture

The project follows a modular structure by separating:

- Screens
- Components
- Context
- Configuration
- Constants
- Validation
- Data Store

This makes the project easier to maintain and extend.

---

# 📌 Core Features

### 👤 User

- Sign Up
- Sign In
- Guest Login
- Authentication Persistence

### 🍽 Restaurant

- Browse restaurants
- View restaurant details
- About section
- Contact information

### 📅 Booking

- Choose booking date
- Select time slot
- Select guest count
- Reserve a table

### 💳 Payment

- Booking payment modal
- Reservation confirmation

### 📜 History

- View previous bookings

---

# ⚠️ Challenges Faced

- Designing nested navigation using Expo Router
- Managing authentication state with Firebase
- Supporting both authenticated and guest users
- Building reusable booking components
- Structuring Firestore collections efficiently
- Implementing form validation using Zod
- Keeping the project modular and scalable

---

# 🛠️ Setup Instructions

## 1. Clone the repository

```bash
git clone <repository-url>
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure Firebase

Create a Firebase project and enable:

- Authentication (Email & Password)
- Cloud Firestore

Then update your Firebase configuration inside:

```text
config/firebaseConfig.js
```

Example:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

---

## 4. Start the project

```bash
npx expo start
```

---

# 📦 Dependencies

- Expo
- React Native
- Expo Router
- Firebase
- NativeWind
- React Context API
- Zod
- TypeScript

---

# 🚀 Future Improvements

- Push Notifications
- Restaurant Search
- Filters & Categories
- Favorite Restaurants
- User Profile Editing
- Booking Cancellation
- Real-time Slot Availability
- Online Payments
- Restaurant Reviews & Ratings

---

# 📱 App Screens

- Authentication
- Home
- Explore
- Restaurant Details
- Booking
- Checkout
- Booking History
- Drawer Navigation

---

# 🤝 Contributing

Contributions are welcome!

Feel free to fork the repository, open issues, or submit pull requests to improve the project.

---

# 📄 License

This project is built for learning and portfolio purposes.
