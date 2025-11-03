# Moon New Tab - Weather Start Up Page

A beautiful Chrome extension that replaces your new tab page with a dynamic weather-based interface featuring time-dependent backgrounds and animated weather effects.

## ✨ Features

- **Dynamic Backgrounds**: Changes colors and sun position based on time of day
- **Real-time Weather**: Displays current weather for Hanoi with animated effects
- **Weather Animations**: Rain, snow, lightning, fog effects based on weather conditions
- **Clean Interface**: Shows date, time, and quick access to Gmail and Google Drive
- **Responsive Design**: Beautiful typography and smooth animations

## 🚀 Installation (Chrome Extension)

### For Chrome (Manifest V3 Compatible)

1. **Enable Developer Mode**:
   - Open Chrome and go to `chrome://extensions/`
   - Toggle "Developer mode" in the top right corner

2. **Load the Extension**:
   - Click "Load unpacked"
   - Select this project folder
   - The extension should now appear in your extensions list

3. **Test the Extension**:
   - Open a new tab to see your new weather page
   - The weather data will load automatically for Hanoi

## 📁 Project Structure

- `manifest.json`: Extension manifest (updated to Manifest V3)
- `index.html`: Main new tab page
- `js/script.js`: Core functionality for weather and time-based effects
- `css/style.css`: Styles and animations
- `js/jquery-3.4.1.min.js`: jQuery library
- `js/moment.js`: Date/time formatting library
- `images/`: Weather icons and other assets
- `fonts/`: Custom Montserrat font

## 🔧 Technical Updates (v2.0)

This extension has been updated to **Manifest V3** for compatibility with modern Chrome versions:

- ✅ Updated from Manifest V2 to V3
- ✅ Added proper permissions for weather API
- ✅ Implemented Content Security Policy
- ✅ Fixed font loading for local files
- ✅ Maintained all original functionality

## 🌤️ Weather API

The extension uses OpenWeatherMap API to fetch real-time weather data for Hanoi. The weather effects include:
- Thunder and lightning
- Rain (light, moderate, heavy)
- Snow
- Fog and mist
- Clear skies with dynamic sun positioning

## 🎨 Customization

You can customize the extension by:
- Changing the city in `js/script.js` (line with the API call)
- Modifying colors and animations in `css/style.css`
- Adding new weather icons in the `images/` folder

## 🐛 Troubleshooting

If the extension doesn't work:
1. Check that all files are present
2. Ensure Developer Mode is enabled
3. Check browser console for any errors
4. Verify the extension is enabled in chrome://extensions/

## 📄 License

This project is open source and available under standard terms.
