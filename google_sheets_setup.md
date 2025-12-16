# How to Connect Booking Form to Google Sheets

Since this is a static website (no backend server), we use **Google Apps Script** to receive form data and save it to a Google Sheet.

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. Name it "RanchiCarRental Bookings".
3. In the first row (Header), add these exact column names:
   - `timestamp`
   - `name`
   - `mobile`
   - `pickup`
   - `drop`
   - `date`
   - `time`
   - `duration`
   - `tripType`
   - `carType`
   - `driveType`
   - `estimatedTotal`
   - `message`

### Step 2: Create the Script
1. In the Google Sheet, click on **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the code below:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.mobile,
    data.pickup,
    data.drop,
    data.date,
    data.time,
    data.duration,
    data.tripType,
    data.carType,
    data.driveType,
    data.estimatedTotal,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy the Script
1. Click on **Deploy** (blue button, top right) > **New deployment**.
2. Click the specific **Select type** gear icon next to "Select type".
3. Choose **Web app**.
4. Fill in:
   - **Description**: "Booking API"
   - **Execute as**: "Me"
   - **Who has access**: **"Anyone"** (This is critical so the website can send data without login).
5. Click **Deploy**.
6. Authorize the script when asked (you might see a warning "Google hasn't verified this app", click Advanced > Go to (Project Name) (unsafe)).

### Step 4: Copy URL
1. Copy the **Web app URL** (it starts with `https://script.google.com/macros/s/...`).
2. Go to your project file: `src/components/booking/BookingForm.tsx`.
3. Replace the placeholder URL with your new Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_COPIED_ID/exec";
   ```

Done! Now every time someone fills the booking form, it will appear in your Google Sheet instantly.
