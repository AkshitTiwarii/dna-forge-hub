# Certificate Download System

## Overview
The DNA Lead Community Event certificate system provides real certificate downloads for all 211 participants. The system supports both PDF and PNG formats with automatic generation when physical certificate files are not available.

## Features

### 🎯 **Real Certificate Downloads**
- **PDF Format**: High-quality certificates suitable for printing and official use
- **PNG Format**: Image files perfect for social media sharing and digital display
- **Automatic Generation**: If a physical certificate file doesn't exist, the system generates one dynamically
- **Loading States**: Visual feedback during certificate generation process

### 🔍 **Smart Search & Filter**
- Search by participant name, email, certificate ID, or event name
- Filter by certificate categories
- Real-time results for all 211 participants

### 📁 **File Structure**
```
public/
  certificates/
    ├── template.svg              # Certificate template
    ├── Riya_Nagpal.svg          # Sample certificate (participant #1)
    ├── Akshit_Tiwari.svg        # Sample certificate (participant #8)
    └── [other certificates]     # Additional certificate files

src/
  utils/
    └── certificateGenerator.ts   # Certificate generation utilities
  data/
    └── completeCertificates.ts   # All 211 participant records
```

## How It Works

### 1. **Direct Download** (Preferred)
If a certificate file exists in `public/certificates/`, it downloads directly:
- Fast download
- Pre-designed certificates
- Consistent branding

### 2. **Dynamic Generation** (Fallback)
If no physical file exists, the system:
- Generates an HTML certificate template
- Converts to high-quality canvas using html2canvas
- Creates PDF using jsPDF or PNG image
- Downloads automatically

### 3. **Certificate Template**
Generated certificates include:
- **Recipient Name**: Real participant name from CSV data
- **Event Details**: "DNA Lead Community Event"
- **Issue Date**: July 20, 2025
- **Certificate ID**: Format DNA2025-XXX (e.g., DNA2025-001)
- **Professional Design**: Gradient background, proper typography
- **Official Elements**: Signature line, date, certificate ID

## Usage

### For Participants
1. **Visit**: Navigate to /rewards page
2. **Search**: Find your certificate by name or email
3. **Download**: Click "Download (PDF)" or "PNG" button
4. **Wait**: System will generate if needed (shows loading spinner)
5. **Save**: Certificate downloads automatically to your device

### For Developers
```typescript
import { downloadCertificate } from '@/utils/certificateGenerator';

// Download as PDF (default)
await downloadCertificate(certificate, 'pdf');

// Download as PNG
await downloadCertificate(certificate, 'png');
```

## Technical Implementation

### Dependencies
- **html2canvas**: Converts HTML to canvas for image generation
- **jsPDF**: Creates PDF documents from canvas
- **React**: UI framework with hooks for state management

### Performance
- **Optimized**: Only generates certificates when needed
- **Caching**: Physical files load instantly
- **Loading States**: User feedback during generation
- **Error Handling**: Graceful fallbacks for failed downloads

### File Naming Convention
- **Physical Files**: `certificates/Participant_Name.svg` or `.png`
- **Generated Downloads**: `ParticipantName_Certificate_DNA2025-XXX.pdf`

## Certificate Data
All 211 participants from the DNA Lead Community Event CSV are included:
- **Real Names**: Riya Nagpal, Akshit Tiwari, Rupal Mittal, etc.
- **Real Emails**: Actual participant email addresses
- **Unique IDs**: DNA2025-001 through DNA2025-211
- **Consistent Event**: All certificates for same event with same date

## Testing
1. **With Physical Files**: Try downloading Riya Nagpal or Akshit Tiwari certificates (SVG files exist)
2. **With Generation**: Try downloading any other participant (will generate dynamically)
3. **Both Formats**: Test both PDF and PNG downloads
4. **Search**: Search for specific participants to test filtering

## Future Enhancements
- Bulk certificate generation for administrators
- Custom certificate templates per event
- Email delivery system
- Certificate verification QR codes
- Analytics for download tracking
