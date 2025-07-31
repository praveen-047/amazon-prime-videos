# Amazon Prime Videos Clone

This is a React-based clone of Amazon Prime Videos UI that displays a categorized list of movies (Action and Comedy). Users can click on any movie thumbnail to view a video popup trailer using a modal player.

🔗 Live Demo
(https://amazonprimee.ccbp.tech/)

## 🚀 Features

- 📽 Categorized Movie List (Action & Comedy)
- 🎞 Modal Popup Video Player (using `reactjs-popup` and `react-player`)
- 🎠 Horizontal Movie Slider (using `react-slick`)
- 🧼 Clean UI resembling Prime Video

## 📁 Folder Structure

src/
├── components/
│ ├── PrimeVideo/
│ │ └── index.js
│ ├── MoviesSlider/
│ │ └── index.js
│ ├── MovieItem/
│ │ └── index.js
├── App.js
├── App.css

markdown
Copy
Edit

## 📦 Libraries Used

- **react-slick** – For the horizontal slider of movie thumbnails  
- **reactjs-popup** – For showing videos in modal view  
- **react-player** – For embedded video playback  
- **react-icons** – For the close icon in the modal

## 🔧 Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/praveen-047/amazon-prime-videos.git
Navigate to the project directory:
cd amazon-prime-videos

Install dependencies:
npm install

Start the development server:
npm start
