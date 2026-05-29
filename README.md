# Razorpay Landing Page Clone 💳🚀

A premium, high-fidelity clone of the official **Razorpay** landing page built using **React**, **Vite**, and **Tailwind CSS**. This project replicates the modern fintech aesthetic, featuring vibrant gradients, clean layouts, and rich micro-interactions.

---

## ✨ Key Features

### 1. **Accept Payments Suite (Feature Section 1)**
* Replicates the Razorpay Core Payment suite.
* **Premium Diagonal Card Layout**: Implements high-fidelity diagonal-slice borders using custom inline SVG masking path designs.
* **Interactive Hover States**: Icon badges dynamically scale and transition from a deep navy blue gradient (`from-blue-950 to-blue-900`) to a vibrant sky-blue brand gradient (`from-sky-400 to-blue-500`) on hover.
* **Micro-Animations**: Hover wave vectors glide smoothly into view upon card interaction.

### 2. **RazorpayX Business Banking (Feature Section 2)**
* **Seamless Dark-Theme Card**: Blends the business banking illustration (`buisness-banking.png`) with the container using a precise slate-gray background (`#181c2e`) match.
* **Tilted Action Buttons**: Replicates Razorpay's iconic "Sign Up" and "Check out the demo" buttons with skewed green action arrow badges (`skew-x-[15deg]`) overflowing the boundaries.
* **Secondary Banking Grid**: Features a 3-column interactive banking grid for **Current Account**, **Capital & Credit**, and **Payouts** using matching dark-mode diagonal card geometries.
* **Demo Callout Banner**: A sleek horizontal callout container with grayish borders and a dark linear gradient leading to the demo console trigger.

### 3. **Modern Styling & Responsiveness**
* Built with a robust layout container system (`w-10/12 max-w-[1080px] mx-auto`).
* Fully dynamic SVG backgrounds (`feature-section-2BG.svg`) that scale with generous top and bottom padding (`pt-[16rem] pb-[520px]`) for a balanced layout.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React](https://react.dev/)
* **Build Tool**: [Vite](https://vite.dev/)
* **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Feather Icons](https://feathericons.com/)

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/sohamaggarwal007/React-JS.git
cd Project-2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📸 Preview Highlights

* **Slanted Buttons**: Uses standard Tailwind utility combinations (`overflow-visible`, `skew-x-[15deg]`, and `skew-x-[-15deg]`) to render pixel-perfect parallelogram badge accents.
* **Card Depth Layout**: Incorporates multiple layer stacking indices (`z-0` round badges, `z-10` card SVG backgrounds, and `z-20` absolute content boxes) to deliver native overlay aesthetics.
