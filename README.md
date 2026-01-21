# 🎓 Open Day 2026 - Interactive Web Application

An immersive, interactive web application designed for Emeris open day, showcasing degree and certificate programs with stunning animations and user-friendly navigation.

## 🌟 Features

### 🎨 Modern UI/UX Design
- **Particle Background Effects** - Dynamic, interactive particle animations using tsParticles
- **Smooth Animations** - Powered by Framer Motion for fluid transitions and micro-interactions
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Gradient Themes** - Beautiful purple gradient color scheme throughout

### 📚 Program Information
- **Degree Program** - Bachelor of Science in Information Technology
- **Higher Certificate Program** - Higher Certificate in Information Technology
- Detailed module breakdowns by semester
- Career path visualizations
- Downloadable course information and fee PDFs

### 📥 Enhanced Download Buttons
- **Clear Visual Indicators** - Download icon (📥) with bouncing animation
- **Two-Line Layout** - "Download" label with document name
- **Hover Effects** - Ripple animation and lift effect on hover
- **Professional Styling** - Gradient backgrounds with enhanced shadows

### 🗺️ Career Path Visualizer
- **Interactive Journey Map** - Visual representation of career progression
- **Module-to-Career Mapping** - See how modules relate to different career paths
- **Multiple Career Tracks**:
  - Software Developer
  - Data Scientist
  - Cybersecurity Specialist
  - Cloud Architect
  - AI/ML Engineer

### 📱 Navigation
- **Tab-Based Interface** - Easy switching between Modules, Careers, and Visualizer
- **Semester Toggle** - Quick access to Semester 1 and Semester 2 content
- **Smooth Transitions** - Animated page changes and content loading

## 🚀 Technologies Used

- **React 19** - Latest version of React for building the UI
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **tsParticles** - Particle effects for background animations
- **CSS3** - Modern styling with gradients, animations, and flexbox/grid
- **GitHub Pages** - Hosting and deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rohanm007/OpenDay.git
cd OpenDay/openday-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

The site will be deployed to: `https://rohanm007.github.io/OpenDay`

## 📂 Project Structure

```
openday-app/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ModuleCard.jsx   # Accordian cards
│   │   ├── CareerCard.jsx   # Career information cards
│   │   ├── ParticleBackground.jsx
│   │   └── CareerPathVisualizer.jsx
│   ├── pages/              # Main page components
│   │   ├── LandingPage.jsx
│   │   ├── DegreePage.jsx
│   │   └── CertificatePage.jsx
│   ├── data/               # Module and career data
│   │   ├── modules.js
│   │   └── certificateModules.js
│   ├── assets/             # Images and PDFs
│   └── App.jsx             # Main app component
├── public/                 # Static assets
└── package.json
```

## 🎯 Key Components

### ModuleCard Component
- Accordian Card design
- Front view: Module icon, code, and name
- Expanded view: Description and key topics
- Controlled state management for single-card-open behavior

### CareerPathVisualizer
- Interactive SVG-based journey map
- Shows progression from modules to careers
- Animated connections and hover effects

### Download Buttons
- Animated download icons
- Clear labeling with "Download" text
- Ripple and lift hover effects
- Links to PDF resources

## 🎨 Design Highlights

- **Color Scheme**: Purple gradients (#667eea to #764ba2)
- **Typography**: Modern, clean fonts with proper hierarchy
- **Spacing**: Generous whitespace for better readability
- **Animations**: Subtle, purposeful animations that enhance UX
- **Accessibility**: High contrast, readable text, and clear interactive elements

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with side-by-side content
- **Tablet** (≤768px): Adjusted layouts and font sizes
- **Mobile**: Single-column layout, optimized touch targets

## 🌐 Live Demo

Visit the live application: [https://rohanm007.github.io/OpenDay](https://rohanm007.github.io/OpenDay)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created for Open Day 2026 - Showcasing the future of technology education.

---

**Built using React, Vite, and Framer Motion**