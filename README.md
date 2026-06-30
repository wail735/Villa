# 🏡 Villa Agency — Luxury Real Estate Platform

<div align="center">

![Villa Agency](https://img.shields.io/badge/Villa-Agency-ee4d2d?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-7-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**A modern, premium real estate web application built with React.**

</div>

---

## ✨ Features

- 🏠 **Property Listings** — Browse luxury villas, apartments, condos and more
- 🔍 **Real-time Search** — Filter properties by location or type instantly
- 🏷️ **Category Filters** — Filter by All, Villa, Apartment, Condo, Penthouse
- ❤️ **Favorites** — Save properties to your wishlist (persisted in localStorage)
- ✏️ **Full CRUD** — Add, edit, and delete properties with image upload
- 📊 **Stats Section** — Animated counter showcasing agency achievements
- 🗺️ **Google Maps** — Interactive map with embedded location
- 📧 **Contact Form** — Send messages directly via EmailJS
- 🌙 **Glassmorphism Navbar** — Sticky navbar with blur effect on scroll
- 🎞️ **Hero Slider** — Cinematic full-screen slides with text animations
- 📱 **Fully Responsive** — Mobile-first design for all screen sizes
- 🔠 **Premium Typography** — Playfair Display + Inter font pairing

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| UI Library | Material UI v7 |
| Styling | TailwindCSS v3 + Custom CSS |
| Animations | Framer Motion v12 |
| Routing | React Router DOM v7 |
| Slider | React Slick |
| Maps | @vis.gl/react-google-maps |
| Email | EmailJS |
| Icons | React Icons + MUI Icons |
| State | React Hooks + localStorage |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 8

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/villa-agency.git

# Navigate to the app directory
cd villa-agency/myapp

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at **http://localhost:3000**

---

## 📁 Project Structure

```
myapp/
├── public/
│   ├── assets/
│   │   └── images/          # Property images, icons
│   ├── fonts/               # Custom fonts
│   └── index.html           # SEO-optimized HTML
│
└── src/
    ├── Header/
    │   ├── NavBar.js        # Glassmorphism sticky navbar
    │   └── header.js        # Top info bar
    ├── SlideImages/
    │   └── SlideImage.js    # Animated hero slider
    ├── Stats/
    │   └── Stats.js         # Animated counter section
    ├── Featured/            # Featured property section
    ├── Properties/
    │   ├── Properties.js    # Main listings (CRUD + filters)
    │   ├── modal.js         # Add property modal
    │   ├── modiferModal.js  # Edit property modal
    │   └── deletemodal.js   # Delete confirmation modal
    ├── Contact/             # Contact form + Google Maps
    ├── Ideal/               # "Ideal property" section
    ├── Video/               # Video background section
    ├── Context/
    │   └── modalcontext.js  # React Context for modals
    ├── App.js               # Main app + routing
    ├── App.css              # Design system variables
    └── Home.js              # Home page composition
```

---

## 🎨 Design Highlights

- **Color Palette**: Deep coral `#ee4d2d` primary with dark backgrounds
- **Typography**: Playfair Display (headings) + Inter (body)
- **Animations**: Framer Motion for page transitions and scroll reveals
- **Cards**: Hover lift effect with shadow elevation
- **Glassmorphism**: Frosted glass navbar and UI elements

---

## 📸 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slider, stats, featured, properties overview |
| Properties | `/properties` | Full CRUD property management |
| Property Details | `/property-details` | Detailed view with floor plans |
| Contact | `/contact-us` | Google Maps + contact form |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT © Villa Agency
