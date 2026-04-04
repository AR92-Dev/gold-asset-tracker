#  Gold Price Tracker Web App

## 🧾 Overview
This project focuses on providing a comprehensive web application simulating a real-world gold tracking platform. Designed and built using Pure HTML, CSS, and Vanilla JavaScript, users can view live gold market prices, check out the latest related news, and manage a personal digital vault of gold assets. 

The application calculates different standardized gold values (Gram, Karat, Coins, and Bars), tracks user assets, and calculates real-time Profit and Loss (P&L) relying on live API calls and persistent front-end data storage.

## 🎯 Objectives
- **Build responsive UI** without heavy framework dependencies, utilizing Flexbox and rich modern aesthetics.
- **Apply Pure JavaScript** concepts practically.
- **Fetch and display data** seamlessly from APIs (`Gold-API` & `GNews API`).
- **Manage Data** securely utilizing `LocalStorage` and `SessionStorage`.
- **Perform dynamic calculations** for personalized Profit/Loss.

## ✨ Key Features
- **Live Market Data:** Fetches live gold ounce price (XAU) and uses it as a base to mathematically calculate 24K, 21K, 18K values per gram, as well as English Lira, Rashadi Lira, and standard Gold Bars.
- **Currency Conversion Toggle:** Instantly translate all dashboard data from USD ⇄ JOD natively.
- **Authentication System:** Registration and User-Login flows relying on `LocalStorage` to save users and `SessionStorage` for active login sessions.
- **Digital Asset Vault:** Users can "Add Assets" specifying type (Jewelry/Bars/Coins), Karat, Weight, Image, Purchase Price, and Purchase Date.
- **Real-time Profit & Loss (P&L):** Iterates over user assets dynamically comparing the historical purchase price to current market values.
- **News Integration:** Dedicated slider populated with dynamic financial news updates via the `Gnews-API`.

## 🛠️ Technology Stack
- **HTML5:** Semantic architecture.
- **CSS3:** Custom layouts, responsive media queries, dark mode styling with premium colors (gradients & gold `#F2CA50`).
- **Vanilla JavaScript:** Full logical implementation (DOM manipulation, fetching, parsing JSON, converting assets).
- **Storage:** Browser `LocalStorage` & `SessionStorage`.
- **APIs:** 
  - `gold-api.com` for XAU base prices.
  - `gnews.io` for Gold-related news.

## 👥 Team & Task Distribution

### 👨‍💻 Yousef Zuaiant
- **Authentication Flow & Storage:** Engineered the structural logic required for the Registration and Login forms (`auth.js` / `register.js`) securely tracking active user sessions in `SessionStorage`.
- **UI/UX & System Layout:** Designed scalable CSS configurations for login/register pages (`login.css`, `Register.css`, `asset.css`). Delivered exact responsiveness handling Media Queries, flexible inputs, and ensuring correct display behavior for varying screen sizes.
- **Navigation Systems:** Polished global header components layout constraints and resolved native cross-page responsiveness. 

### 👩‍💻 Dana Alkhabbas
- **API Interfacing (Data Engine):** Wrote the internal fetch requests hooking into the `Gold-API` and structured the extraction of the Ounce prices. 
- **Gold Conversion Mathematics:** Mapped the formula calculations bridging single Ounce figures over to localized, easily digestible inputs (e.g., 21-Karat fractions, weights for English vs. Rashadi coins).
- **Home Dashboard & News:** Wired the dynamic home UI pieces together, including implementing the global Currency converter (USD to JOD) and populating the interactive News slider (`GNews API`).

### 👨‍💻 Ahmad Al Tamimi
- **"My Assets" Engineering:** Built the structural backend/frontend bridge allowing users to maintain multiple diverse jewelry entries into their digital vault.
- **Dynamic Profit/Loss Algorithms:** Wrote the primary algorithmic systems executing comparisons between standard historic costs vs live-fetched Gold baseline updates, visually painting exact +/- profit percentages.
- **Asset Data Management Layout:** Processed local DOM injection loops converting heavy local JSON arrays into well-formatted HTML cards showing weight, purchase dates, real-time value tracking, and images.

## 🚀 How to Run
1. Clone this repository locally ensuring all relative paths remain intact:
   ```bash
   git clone https://github.com/AR92-Dev/gold-asset-tracker.git
   ```
2. Navigate directly into the project directory.
3. Use a simple local server (Highly recommended: **VS Code Live Server**) to open `index.html`.
4. Check out the Home Page, create an account, log in, and begin adding items to your asset list to watch your dynamic Profit and Loss updates live!

---
> *Developed as Project #3 to reflect comprehensive JavaScript competency alongside scalable web implementations!*
