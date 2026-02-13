# WealthsFun Sales Funnel

A high-converting 3-step sales funnel for WealthsFun's CEO Accelerator Program.

## 📁 Content Management System

All page text is controlled via a single JSON file. This makes it easy to update copy without touching HTML.

### How It Works

```
content.json  →  server.js loads it  →  EJS templates render it  →  HTML output
```

### File Structure

```
wealthsfun-claude-code-funnel/
├── content.json          # ← ALL TEXT CONTENT LIVES HERE
├── server.js             # Express server that loads content.json
├── views/
│   ├── index.ejs         # Squeeze page template
│   ├── indoctrination.ejs # CEO Letter template
│   └── sales.ejs         # Programs & Offers template
└── public/
    └── *.html            # Static fallbacks (not used when server runs)
```

### Editing Content

1. **Open `content.json`**
2. **Find the section you want to edit** (use `_comment` fields as guides)
3. **Update the text value**
4. **Restart the server** (or it auto-reloads in dev mode)

### JSON Structure Overview

```json
{
  "_fileDescription": "Controls ALL text for the funnel pages",
  
  "shared": {
    "_comment": "Used across all pages",
    "brand": "WealthsFun",
    "checkoutUrl": "https://app.wealthsfun.com/checkout-page-page",
    "copyright": "© 2026 WealthsFun..."
  },

  "indexPage": {
    "_comment": "=== SQUEEZE PAGE === views/index.ejs",
    "hero": {
      "_htmlSection": "HERO SECTION",  // Matches <!-- ===== HERO SECTION ===== -->
      "badge": "Data-Driven Decisions",
      "headingLine1": "Your Life is the Business —",
      "headingHighlight": "Run It Like a CEO."
    }
  },

  "indoctrinationPage": {
    "_comment": "=== CEO LETTER === views/indoctrination.ejs",
    // ...
  },

  "salesPage": {
    "_comment": "=== PROGRAMS & OFFERS === views/sales.ejs",
    // ...
  }
}
```

### Comment Field Guide

| Field | Purpose |
|-------|---------|
| `_comment` | Human-readable description of the section |
| `_pageFile` | Which EJS template uses this content |
| `_htmlSection` | Matches the `<!-- ===== SECTION NAME ===== -->` comment in HTML |

### Example: Updating the Hero Headline

**In `content.json`:**
```json
"hero": {
  "headingLine1": "Your Life is the Business —",
  "headingHighlight": "Run It Like a CEO."
}
```

**In `views/index.ejs`:**
```html
<h1>
    <%= p.indexPage.hero.headingLine1 %><br>
    <span class="gradient-text"><%= p.indexPage.hero.headingHighlight %></span>
</h1>
```

**Output:**
```html
<h1>
    Your Life is the Business —<br>
    <span class="gradient-text">Run It Like a CEO.</span>
</h1>
```

---

## 🎯 Funnel Structure

### Step 1: **index.ejs** (Squeeze Page)
**Purpose:** Capture attention and build initial interest

**JSON Section:** `indexPage`

**Key Sections (in order):**
- `hero` — Badge, headline, subheadline, CTA buttons, social proof
- `empowering` — Two feature cards with numbered titles
- `promise` — "Our Promise" glass card section
- `footerCta` — Final CTA before footer

---

### Step 2: **indoctrination.ejs** (The Letter)
**Purpose:** Build trust, agitate pain points, present the transformation

**JSON Section:** `indoctrinationPage`

**Key Sections (in order):**
- `nav` — Top navigation with "View Offer" link
- `hero` — Bold confrontational headline
- `letter` — The full persuasive letter including:
  - `greeting` — "Dear Future CEO..."
  - `paragraphs` — Opening paragraphs
  - `callout1` — "The Real Problem?" box
  - `centerQuote` — Key quote about data-driven business
  - `dontGuessLines` — Three contrasting statements
  - `benefitsHeading` + `benefits` — What changes when you step up
  - `callout2` — "Bottom line?" box
  - `closingParagraphs` — Final paragraphs
  - `signoff` + `signature` — Letter closing
- `cta` — Final CTA to view programs

---

### Step 3: **sales.ejs** (The Offer)
**Purpose:** Present programs and convert to sale

**JSON Section:** `salesPage`

**Key Sections (in order):**
- `nav` — Sticky nav with "Get Started" button
- `hero` — "Choose Your Path to Wealth" headline
- `flagshipProgram` — $7,000 Sovereign Wealth Systems Mentorship
- `innerCircle` — Monthly ($149.97) and Annual ($1,497) membership options
- `strategySession` — $300 one-time 1:1 session
- `ceoAccelerator` — $15,000 90-Day Intensive
- `comparison` — "Which Path is Right for You?" decision helper
- `finalCta` — Final call-to-action

---

## 🚀 Running the Server

```bash
# Install dependencies
npm install

# Start the server
npm start

# Or for development with auto-reload
npm run dev
```

The server runs on `http://localhost:3000` by default.

---

## 🎨 Brand Identity

### Colors
- **Background:** `#050505` (Near Black) with subtle grid pattern
- **Primary Text:** `#FFFFFF` (White)
- **Secondary Text:** `#9CA3AF` (Gray-400)
- **Accent/Buttons:** `#EF4444` to `#DC2626` (Red gradient)
- **Gradient Text:** Red (#EF4444) to Orange (#F97316)

### Typography
- **Font Family:** Outfit (via Google Fonts CDN)
- **Headings:** Bold/Black weights (700-900)
- **Body:** Regular/Medium (400-600)

### UI Elements
- **Buttons:** Fully rounded pill shape with gradient
- **Cards:** Glassmorphism effect (transparent bg, subtle border, backdrop blur)
- **Badges:** Pill-shaped with icons
- **Spacing:** Generous padding for premium feel

---

## 📱 Mobile Responsive

All pages are fully responsive with:
- Mobile-first Tailwind CSS classes
- Breakpoints: `sm:`, `md:`, `lg:`
- Flexible grid layouts
- Optimized typography scaling

---

## 🎓 Conversion Optimization Features

✅ **Scarcity:** Limited spots messaging  
✅ **Social Proof:** Testimonials + CEO count stat  
✅ **Value Stacking:** Clear breakdown of what's included  
✅ **Price Anchoring:** Multiple price points for different budgets  
✅ **Clear CTA Progression:** Each page has clear next step  
✅ **Decision Helper:** "Which Path is Right for You?" section  

---

Built with ❤️ for high-ticket sales success.
