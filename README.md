# Segment Saver React Application

A React + TypeScript application for creating and saving customer segments with dynamic schema selection.

## 🚀 Features

- **Dynamic Schema Management**: Add and remove schemas dynamically
- **Category Indicators**: Visual distinction between User Traits (green) and Group Traits (red)
- **Smart Dropdown Filtering**: Only show unselected schemas in dropdown
- **Webhook Integration**: Send segment data to any webhook URL
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd customer-lab-project
```

2. Install dependencies:
```bash
npm install
```

3. Configure the webhook URL:
   - Go to [https://webhook.site/](https://webhook.site/)
   - Copy your unique webhook URL
   - Open `src/App.tsx`
   - Replace the `WEBHOOK_URL` constant with your webhook URL:
   ```typescript
   const WEBHOOK_URL = 'https://webhook.site/your-unique-url';
   ```

## 🎯 Running the Application

Start the development server:
```bash
npm start
```

The application will open automatically in your browser at [http://localhost:3000](http://localhost:3000)

## 📱 Usage

1. **Open the Modal**: Click the "Save segment" button on the main page

2. **Enter Segment Name**: Type a name for your segment in the text input

3. **Add Schemas**: 
   - Select a schema from the "Add schema to segment" dropdown
   - Click "+ Add new schema" to add it to the blue box
   - The selected schema will appear with a colored dot (green for User Traits, red for Group Traits)

4. **Modify Schemas**:
   - Change any added schema by clicking on it and selecting a different option
   - Remove a schema by clicking the minus (−) button

5. **Save**: Click "Save the Segment" to send the data to your webhook

## 📊 Available Schemas

### User Traits (Green Dot)
- First Name
- Last Name
- Gender
- Age

### Group Traits (Red Dot)
- Account Name
- City
- State

## 📤 Data Format

When you save a segment, the data is sent in the following format:

```json
{
  "segment_name": "last_10_days_blog_visits",
  "schema": [
    {"first_name": "First Name"},
    {"last_name": "Last Name"},
    {"age": "Age"}
  ]
}
```

## 🏗️ Project Structure

```
customer-lab-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SegmentModal.tsx      # Main modal component
│   │   └── SegmentModal.css      # Modal styles
│   ├── data/
│   │   └── schemas.ts            # Available schemas configuration
│   ├── types/
│   │   └── schema.types.ts       # TypeScript type definitions
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Main application styles
│   ├── index.tsx                 # Application entry point
│   └── index.css                 # Global styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🧪 Testing

To test the application:

1. Start the application with `npm start`
2. Open your webhook URL page on [webhook.site](https://webhook.site/)
3. Click "Save segment" in the application
4. Add a segment name and some schemas
5. Click "Save the Segment"
6. Check your webhook.site page to see the received data

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Features

- Clean, modern UI matching the provided design
- Smooth transitions and hover effects
- Modal overlay with right-side slide-in panel
- Color-coded schema categories
- Responsive layout for mobile devices

## 🔒 Type Safety

The application is built with TypeScript strict mode enabled, ensuring:
- Full type checking
- Autocomplete support
- Better refactoring capabilities
- Reduced runtime errors

## 📝 Notes

- The application uses React 18 with TypeScript
- No external UI libraries are used - all styling is custom CSS
- The modal prevents selecting the same schema twice
- Removed schemas become available again in the dropdown
- The application validates that at least one schema is added before saving

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is created as part of an assessment task.

## 🙏 Acknowledgments

- Design based on the provided screen mockup
- Built with Create React App
- Uses React Hooks for state management



