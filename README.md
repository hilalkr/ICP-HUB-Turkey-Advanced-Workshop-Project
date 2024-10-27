# ICP Shopping - Product Management System

A decentralized product management system built on the Internet Computer Protocol (ICP) using Motoko and React.

## Features

- 📦 Product Management (CRUD Operations)
- 📊 Real-time Dashboard
- 💰 Price Tracking
- 📈 Inventory Management
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- Frontend: React.js
- Styling: Tailwind CSS
- Backend: Motoko
- Platform: Internet Computer Protocol (ICP)

## Prerequisites

- Node.js (v14 or higher)
- DFX (latest version)
- Internet Computer CLI

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/hilalkr/ICP-HUB-Turkey-Advanced-Workshop-Project.git
cd ICP-HUB-Turkey-Advanced-Workshop-Project
```

2. Install dependencies:
```bash
npm install
```

3. Start the local replica:
```bash
dfx start --background
```

4. Deploy the canisters:
```bash
dfx deploy
```

5. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── motoko_project_frontend/    # Frontend application
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Application entry point
│   └── assets/               # Static assets
└── motoko_project_backend/    # Backend canister code
```

## Development

### Frontend Development

The frontend is built with React and uses Vite as the build tool. To start the development server:

```bash
npm start
```

### Backend Development

The backend is written in Motoko. To rebuild the backend:

```bash
dfx deploy motoko_project_backend
```

## Deployment

To deploy to the IC mainnet:

```bash
dfx deploy --network ic
```







