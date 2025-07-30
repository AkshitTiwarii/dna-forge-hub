const fs = require('fs');
const path = require('path');

// Read the certificate data
const certificatesPath = './src/data/completeCertificates.ts';
const outputDir = './public/certificates';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// SVG certificate template function
const generateCertificateSVG = (participant) => {
  return `<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bg)"/>
  
  <!-- Decorative border -->
  <rect x="40" y="40" width="1120" height="720" fill="none" stroke="white" stroke-width="8" opacity="0.3"/>
  <rect x="60" y="60" width="1080" height="680" fill="none" stroke="white" stroke-width="4" opacity="0.6"/>
  
  <!-- Header ornament -->
  <circle cx="600" cy="120" r="30" fill="white" opacity="0.1"/>
  <circle cx="600" cy="120" r="20" fill="white" opacity="0.2"/>
  
  <!-- Main header -->
  <text x="600" y="140" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">CERTIFICATE</text>
  <text x="600" y="180" font-family="Georgia, serif" font-size="32" fill="white" text-anchor="middle" opacity="0.9">OF PARTICIPATION</text>
  
  <!-- Decorative elements -->
  <line x1="300" y1="220" x2="900" y2="220" stroke="white" stroke-width="3" opacity="0.8"/>
  <circle cx="280" cy="220" r="8" fill="white" opacity="0.8"/>
  <circle cx="920" cy="220" r="8" fill="white" opacity="0.8"/>
  
  <!-- Certificate body -->
  <text x="600" y="290" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.9">This is to certify that</text>
  
  <!-- Participant name with background -->
  <rect x="200" y="320" width="800" height="80" fill="white" opacity="0.1" rx="10"/>
  <text x="600" y="375" font-family="Georgia, serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">${participant.recipientName}</text>
  
  <!-- Event details -->
  <text x="600" y="450" font-family="Arial, sans-serif" font-size="22" fill="white" text-anchor="middle" opacity="0.9">has successfully completed the</text>
  <text x="600" y="485" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle">${participant.eventName}</text>
  
  <!-- Achievement description -->
  <text x="600" y="530" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.8">and demonstrated exceptional commitment to learning and growth</text>
  
  <!-- Footer section -->
  <line x1="150" y1="620" x2="1050" y2="620" stroke="white" stroke-width="1" opacity="0.5"/>
  
  <!-- Date section -->
  <text x="200" y="660" font-family="Arial, sans-serif" font-size="16" fill="white" opacity="0.8">Issue Date:</text>
  <text x="200" y="685" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">${new Date(participant.issueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}</text>
  
  <!-- Signature section -->
  <line x1="450" y1="670" x2="650" y2="670" stroke="white" stroke-width="2" opacity="0.7"/>
  <text x="550" y="695" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" opacity="0.8">Authorized Signature</text>
  <text x="550" y="715" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.6">Event Organizer</text>
  
  <!-- Certificate ID section -->
  <text x="1000" y="660" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="end" opacity="0.8">Certificate ID:</text>
  <text x="1000" y="685" font-family="Courier, monospace" font-size="20" font-weight="bold" fill="white" text-anchor="end">${participant.certificateId}</text>
  
  <!-- DNA Lead branding -->
  <text x="600" y="750" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.6">DNA Lead Community • Building Future Leaders</text>
  
  <!-- Decorative corner elements -->
  <path d="M 100 100 L 140 100 L 140 140 L 100 140 Z" fill="white" opacity="0.1"/>
  <path d="M 1060 100 L 1100 100 L 1100 140 L 1060 140 Z" fill="white" opacity="0.1"/>
  <path d="M 100 660 L 140 660 L 140 700 L 100 700 Z" fill="white" opacity="0.1"/>
  <path d="M 1060 660 L 1100 660 L 1100 700 L 1060 700 Z" fill="white" opacity="0.1"/>
</svg>`;
};

// Import the certificate data directly
const { completeCertificates } = require('./src/data/completeCertificates.ts');

// Generate certificates for all participants
const generateAllCertificates = () => {
  console.log('🎯 Starting certificate generation...');
  
  // Import the data using a simple approach
  const fs = require('fs');
  const dataContent = fs.readFileSync('./src/data/completeCertificates.ts', 'utf8');
  
  // Extract just the array data
  const arrayStart = dataContent.indexOf('export const completeCertificates: Certificate[] = [');
  const arrayEnd = dataContent.lastIndexOf('];');
  const arrayContent = dataContent.substring(arrayStart, arrayEnd + 2);
  
  // Parse the participants manually (simple approach)
  const lines = dataContent.split('\n');
  const participants = [];
  let currentParticipant = {};
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.includes('recipientName:')) {
      currentParticipant.recipientName = trimmed.match(/"([^"]+)"/)[1];
    } else if (trimmed.includes('recipientEmail:')) {
      currentParticipant.recipientEmail = trimmed.match(/"([^"]+)"/)[1];
    } else if (trimmed.includes('certificatePath:')) {
      currentParticipant.certificatePath = trimmed.match(/"([^"]+)"/)[1];
    } else if (trimmed.includes('eventName:')) {
      currentParticipant.eventName = trimmed.match(/"([^"]+)"/)[1];
    } else if (trimmed.includes('issueDate:')) {
      currentParticipant.issueDate = trimmed.match(/"([^"]+)"/)[1];
    } else if (trimmed.includes('certificateId:')) {
      currentParticipant.certificateId = trimmed.match(/"([^"]+)"/)[1];
      // This is the last field, so push the participant
      participants.push({...currentParticipant});
      currentParticipant = {};
    }
  }
  
  console.log(`📊 Found ${participants.length} participants`);
  
  let generated = 0;
  let errors = 0;
  
  participants.forEach((participant, index) => {
    try {
      const svg = generateCertificateSVG(participant);
      const fileName = participant.certificatePath.split('/').pop().replace('.png', '.svg');
      const filePath = path.join(outputDir, fileName);
      
      fs.writeFileSync(filePath, svg);
      generated++;
      
      if ((index + 1) % 25 === 0) {
        console.log(`✅ Generated ${index + 1}/${participants.length} certificates`);
      }
    } catch (error) {
      console.error(`❌ Error generating certificate for ${participant.recipientName}:`, error.message);
      errors++;
    }
  });
  
  console.log(`\n🎉 Certificate generation complete!`);
  console.log(`✅ Successfully generated: ${generated} certificates`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`📁 Certificates saved to: ${outputDir}`);
  
  return { generated, errors, total: participants.length };
};

// Run the generation
if (require.main === module) {
  generateAllCertificates();
}

module.exports = { generateAllCertificates, generateCertificateSVG };
