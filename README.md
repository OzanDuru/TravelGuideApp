📱 Travel Guide App

Student Name: Ozan Duru
Student ID: 210408005

📌 Overview

Travel Guide App is a multi-screen React Native application built using Expo and React Navigation.
This project demonstrates navigation fundamentals including:

Stack Navigation

Bottom Tab Navigation

Passing data between screens

Custom headers & tab icons

The app includes three main screens:

Home Screen – List of destinations

Details Screen – Dynamic page showing selected place & rating

Settings Screen – Simple settings/info page

📂 Project Structure
TravelGuideApp/
│
├── App.js
├── README.md
│
├── screens/
│   ├── HomeScreen.js
│   ├── DetailsScreen.js
│   └── SettingsScreen.js
│
├── package.json
└── assets/


App.js → Contains Stack + Tab Navigator setup
screens/ → Screen components used by navigators

🚀 How to Run the App
1️⃣ Clone the Repository
git clone https://github.com/OzanDuru/TravelGuideApp.git
cd TravelGuideApp

2️⃣ Install Dependencies

Make sure you have Node.js, npm, and Expo CLI installed.

Install packages:

npm install


or if you prefer Expo’s installer:

npx expo install

3️⃣ Start the App
npx expo start


Expo CLI will open a browser window.

4️⃣ Run on Device

Install Expo Go app on your smartphone

Scan the QR code from terminal or browser

App will load automatically

📚 Navigation Features Implemented
✔️ Stack Navigator

Used for:

Home → Details

Pass data using navigation.navigate('Details', params)

✔️ Route Params

route.params.place
route.params.rating

✔️ Bottom Tab Navigator

Tabs:

Explore → Contains the HomeStack

Settings

✔️ Icons

Using Ionicons from @expo/vector-icons.

Active/Inactive Colors:

tabBarActiveTintColor: 'tomato',
tabBarInactiveTintColor: 'gray',

✔️ Header Styling
headerStyle: { backgroundColor: 'tomato' },
headerTintColor: '#fff',

🧪 Tested On

Expo Go (Android)

Expo Go (iOS)

Web preview (optional)

📝 Git Commit Structure

Your repository should include commits like:

chore: initial project setup
feat: setup project and install navigation dependencies (Part 1)
feat: implement stack navigator with Home and Details screens (Part 2)
feat: add route params to pass data between screens (Part 3)
feat: implement bottom tab navigator with Explore and Settings tabs (Part 4)
feat: add icons and custom styling to navigation (Part 5)

🎯 Purpose

This README is prepared for Mobile Programming - Lab 08 (Navigation & Multi-Screen Apps) submission as required.Student Name : Ozan Duru
Student Id : 210408005
