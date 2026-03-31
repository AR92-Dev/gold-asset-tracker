# ⬡ GoldTracker — Live Gold Price & Portfolio Manager

A premium, fully-featured gold tracking web application built with **Pure HTML, CSS, and JavaScript**. No frameworks. No build tools. Just open `index.html` in your browser.

---

## 🌟 Features

| Feature | Description |
|---|---|
| **Live Gold Prices** | Real-time XAU/USD ounce price via gold-api.com, updated every 60 seconds |
| **Multi-Karat Calculations** | 24K, 21K, 18K gram prices computed from the ounce price |
| **Gold Coins** | Rashadi Lira (7.216g, 21K) and English Sovereign (7.988g, 22K) |
| **Gold Bars** | 1g through 1kg bars, all prices computed live |
| **Custom Calculator** | Enter any weight and karat for instant value |
| **USD ↔ JOD Toggle** | One-click currency conversion (1 USD = 0.709 JOD) |
| **News Feed** | Latest gold market news via GNews API with auto-scrolling slider |
| **Price Chart** | Session price history visualized with Chart.js |
| **Authentication** | Register/Login stored in LocalStorage, session via SessionStorage |
| **Portfolio Manager** | Add jewelry, bars, coins with images and purchase details |
| **Profit & Loss** | Live P&L calculations vs purchase price for every asset |
| **Search & Filter** | Filter assets by type, karat; search by name; sort multiple ways |
| **Portfolio Charts** | Donut chart (by type) and bar chart (invested vs current per asset) |
| **Responsive Design** | Works on desktop, tablet, and mobile |

---

## 🗂️ Project Structure

```
JavaScript_project_Gold/
├── index.html          # Home page
├── auth.html           # Login / Register
├── prices.html         # Gold Price Board
├── assets.html         # My Gold Assets (Portfolio)
│
├── css/
│   ├── styles.css      # Global styles, theme, variables
│   ├── home.css        # Home page specific styles
│   ├── auth.css        # Auth page styles
│   ├── prices.css      # Prices page styles
│   └── assets.css      # Assets page styles
│
└── js/
    ├── config.js       # API config, constants, gold calculation engine
    ├── storage.js      # LocalStorage & SessionStorage helpers
    ├── api.js          # Gold price & news API calls
    ├── auth.js         # Authentication logic
    ├── ui.js           # Shared UI utilities (toast, navbar, etc.)
    ├── home.js         # Home page logic
    ├── auth-page.js    # Login/register form logic
    ├── prices.js       # Gold prices page logic
    └── assets.js       # Portfolio management logic
```

---

## 🚀 How to Run

1. **Clone or download** this repository
2. **Open `index.html`** in any modern browser (Chrome, Firefox, Edge)
3. No server required — everything runs locally!

> ⚡ For the best experience, use a browser with DevTools > Network tab to see live API calls.

---

## 🔑 API Keys

The project uses:

| API | Key Location | Docs |
|---|---|---|
| [gold-api.com](https://gold-api.com) | `js/config.js → GOLD_API_KEY` | [Docs](https://gold-api.com/docs) |
| [gnews.io](https://gnews.io) | `js/config.js → NEWS_API_KEY` | [Docs](https://docs.gnews.io) |

> **Important:** Replace the API keys in `js/config.js` with your own if they expire.

---

## 🧮 Gold Calculation Logic

All prices are derived from the **XAU (ounce) price** only:

```
Gram Price   = Ounce Price ÷ 31.1035 × Karat Purity
21K Gram     = Ounce Price ÷ 31.1035 × 0.875
Rashadi Lira = Gram Price (21K) × 7.216g
English Lira = Gram Price (22K) × 7.988g
Bar Price    = Gram Price (24K) × Bar weight in grams
Current Value = Gram Price (karat) × Asset weight
Profit/Loss  = Current Value - Purchase Price
```

---

## 🔐 Data Storage

| Data | Storage Method |
|---|---|
| Registered users | LocalStorage (`gt_users`) |
| Logged-in session | SessionStorage (`gt_current_user`) |
| Gold assets | LocalStorage (`gt_assets`) |
| Price history | LocalStorage (`gt_price_history`) |
| News cache | LocalStorage (`gt_news_cache`, 30min TTL) |
| Currency preference | LocalStorage (`gt_currency`) |

---

## 📱 Pages

### 🏠 Home (`index.html`)
- Live XAU price ticker with gram prices
- Auto-scrolling news slider (5s)
- Session price history chart
- Quick stats (24K, 21K, Rashadi, English)
- Feature highlights

### 🔐 Auth (`auth.html`)
- Split-screen design with brand panel
- Register: Name, Phone, Email, Gender, Password
- Login: Email + Password validation
- Password strength meter
- Stored in LocalStorage

### 📊 Gold Prices (`prices.html`)
- Karat price cards (24K / 21K / 18K)
- Coin prices (Rashadi + English Lira)
- Gold bar prices (1g → 1kg)
- Custom weight calculator
- Price history chart

### 💼 My Assets (`assets.html`)
- Auth-protected (redirects to login)
- Portfolio summary (count, invested, value, P&L)
- Search + filter (type, karat) + sort
- Asset cards with image, karat, weight, P&L badge
- Add/Edit modal with image upload
- Detail view modal
- Portfolio donut chart + invested vs current bar chart

---

## 👨‍💻 Built With

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — ES6+, Fetch API, async/await
- **Chart.js** — Price and portfolio charts
- **Bootstrap 5** — Grid utilities and icons
- **Bootstrap Icons** — Icon library
- **Google Fonts** — Inter + Playfair Display

---

## 📅 Project Timeline

**Duration: 5 Days** (March 31 – April 4, 2026)

---

## 📄 License

MIT License — Free to use, modify, and distribute.
