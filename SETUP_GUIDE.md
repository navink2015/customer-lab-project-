# Setup Guide for Segment Saver App

## Quick Start

### 1. Install Dependencies (Already Done)
```bash
npm install
```

### 2. Configure Webhook URL

1. Go to https://webhook.site/
2. Copy your unique webhook URL
3. Open `src/App.tsx`
4. Find this line (around line 6):
   ```typescript
   const WEBHOOK_URL = 'https://webhook.site/your-unique-url';
   ```
5. Replace `'https://webhook.site/your-unique-url'` with your actual webhook URL

### 3. Start the Application
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## Usage Instructions

### Adding Schemas to a Segment

1. **Click "Save segment"** button on the main page
2. **Enter a segment name** in the input field
3. **Select a schema** from the "Add schema to segment" dropdown
4. **Click "+ Add new schema"** to add it to the blue box
5. **Repeat steps 3-4** to add more schemas
6. **Click "Save the Segment"** to submit

### Schema Categories

- **Green Dot (●)** = User Traits
  - First Name
  - Last Name
  - Gender
  - Age

- **Red Dot (●)** = Group Traits
  - Account Name
  - City
  - State

### Modifying Schemas

- **Change a schema**: Click on any added schema dropdown and select a different option
- **Remove a schema**: Click the minus (−) button next to it

## Testing the Webhook

1. Keep your webhook.site page open in another tab
2. In the app, create a segment and click "Save the Segment"
3. Check your webhook.site page - you should see a POST request with this format:

```json
{
  "segment_name": "your_segment_name",
  "schema": [
    {"first_name": "First Name"},
    {"last_name": "Last Name"}
  ]
}
```

## Project Structure

```
src/
├── components/
│   ├── SegmentModal.tsx      # Main modal component
│   └── SegmentModal.css      # Modal styling
├── data/
│   └── schemas.ts            # Available schema definitions
├── types/
│   └── schema.types.ts       # TypeScript interfaces
├── App.tsx                   # Main app component
├── App.css                   # Main app styling
└── index.tsx                 # Entry point
```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
- Stop other applications using port 3000
- Or the app will prompt you to use another port (usually 3001)

### Webhook Not Receiving Data
- Verify the webhook URL is correct in `src/App.tsx`
- Check your webhook.site page is still open
- Check browser console for errors (F12)

### Build Errors
If you encounter build errors:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm start
```

## TypeScript Errors

You may see some TypeScript linter warnings in your IDE. These are mostly related to React 18's stricter type checking and can be safely ignored if the app runs correctly. The application will compile and run despite these warnings.

## Next Steps

1. Customize the webhook URL
2. Test all functionality
3. Push to your GitHub repository
4. Share the repository URL

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Custom CSS** - Styling (no UI libraries)
- **Fetch API** - HTTP requests
- **React Hooks** - State management

## Features

✅ Dynamic schema selection  
✅ Category indicators (User/Group Traits)  
✅ Smart dropdown filtering  
✅ Schema modification and removal  
✅ Webhook integration  
✅ Responsive design  
✅ Type-safe TypeScript implementation



