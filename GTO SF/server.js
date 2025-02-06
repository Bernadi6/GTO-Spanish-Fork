const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON (optional)
app.use(express.json());

// Test endpoint to check if the server is running
app.get('/test', (req, res) => {
  res.send('Server is running!');
});

// Load credentials.json safely
let credentials;
try {
  credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
} catch (error) {
  console.error('Error loading credentials.json:', error.message);
  process.exit(1); // Exit if credentials file is missing or corrupted
}

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Google Sheet ID and range
const SHEET_ID = '17QEseBb21mmc7vuledUc7PU_lLreM3cjGMHpLuSogrU';
const RANGE = 'unit!A2:G';

// API endpoint to fetch unit data
app.get('/units', async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    if (!response.data.values) {
      return res.status(404).json({ message: 'No data found in the sheet' });
    }

    // Map Google Sheets data to JSON format
    const data = response.data.values.map((row, index) => ({
      size: row[0] || 'N/A',        // Column A
      price: row[1] || 'N/A',       // Column B
      webRate: row[2] || 'N/A',     // Column C
      availability: row[3] || 'N/A',// Column D
      imageUrl: row[4] || '',       // Column E
      link: row[5] || '',           // Column F (Ensure unique links)
      label: row[6] || '',          // Column G
      id: index + 1                 // Unique ID for tracking
    }));

    console.log('Fetched Data:', data); // Debugging log
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`âœ… Server running at http://localhost:${PORT}`);
});