# IT313 Course Catalog - Styling & Layout 

## Problem
A responsive course catalog screen for prospective students. It has a title header and a scrollable list of course cards. Each card shows a colored code badge beside the course title and schedule, plus tags that wrap on narrow screens. Shadows must look correct on both iOs and Android.

## Component Structure
- **CourseCatalog** (parent): hold the course array in state, renders the header and a ScrollView, and uses .map() with key={course.id} to render one CourseCard per course. 
- **CourseCard** (child): receives id,code,title,units and schedule as props. It uses a row layout (badge + text block with flex: 1), wrapping tags (flexWrap), responsive width with useWindowDimensions, and Platform.select for iOs shadow/Android elevation.
- **App.tsx**: the app entry file that contains both components.

## How to Run
1. npm install
2. npx expo start
3. Scan the QR code with Expo Go, or press i (iOs simulator) / a (Android emulator).