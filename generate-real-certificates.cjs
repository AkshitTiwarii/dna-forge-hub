const fs = require('fs');
const path = require('path');

// Certificate generation settings
const outputDir = './public/certificates';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Enhanced SVG certificate template
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
  <text x="600" y="375" font-family="Georgia, serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">${participant.name}</text>
  
  <!-- Event details -->
  <text x="600" y="450" font-family="Arial, sans-serif" font-size="22" fill="white" text-anchor="middle" opacity="0.9">has successfully completed the</text>
  <text x="600" y="485" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="white" text-anchor="middle">DNA Lead Community Event</text>
  
  <!-- Achievement description -->
  <text x="600" y="530" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.8">and demonstrated exceptional commitment to learning and growth</text>
  
  <!-- Footer section -->
  <line x1="150" y1="620" x2="1050" y2="620" stroke="white" stroke-width="1" opacity="0.5"/>
  
  <!-- Date section -->
  <text x="200" y="660" font-family="Arial, sans-serif" font-size="16" fill="white" opacity="0.8">Issue Date:</text>
  <text x="200" y="685" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">July 20, 2025</text>
  
  <!-- Signature section -->
  <line x1="450" y1="670" x2="650" y2="670" stroke="white" stroke-width="2" opacity="0.7"/>
  <text x="550" y="695" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" opacity="0.8">Authorized Signature</text>
  <text x="550" y="715" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.6">Event Organizer</text>
  
  <!-- Certificate ID section -->
  <text x="1000" y="660" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="end" opacity="0.8">Certificate ID:</text>
  <text x="1000" y="685" font-family="Courier, monospace" font-size="20" font-weight="bold" fill="white" text-anchor="end">${participant.certId}</text>
  
  <!-- DNA Lead branding -->
  <text x="600" y="750" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.6">DNA Lead Community • Building Future Leaders</text>
  
  <!-- Decorative corner elements -->
  <path d="M 100 100 L 140 100 L 140 140 L 100 140 Z" fill="white" opacity="0.1"/>
  <path d="M 1060 100 L 1100 100 L 1100 140 L 1060 140 Z" fill="white" opacity="0.1"/>
  <path d="M 100 660 L 140 660 L 140 700 L 100 700 Z" fill="white" opacity="0.1"/>
  <path d="M 1060 660 L 1100 660 L 1100 700 L 1060 700 Z" fill="white" opacity="0.1"/>
</svg>`;
};

// Participant data from CSV
const participants = [
  { name: "Riya Nagpal", email: "riyanagpal9c@gmail.com", certId: "DNA2025-001" },
  { name: "Rupal Mittal", email: "rupalmittal02@gmail.com", certId: "DNA2025-002" },
  { name: "Anurag Sehrawat", email: "anuragsehrawat25@gmail.com", certId: "DNA2025-003" },
  { name: "Aditya Kumar Singh", email: "adityas4328q@gmail.com", certId: "DNA2025-004" },
  { name: "Bhoomi Srivstav", email: "bhoomisrivastava2023@gmail.com", certId: "DNA2025-005" },
  { name: "Ayush Yadav", email: "raoayush496@gmail.com", certId: "DNA2025-006" },
  { name: "Keshav", email: "keshavsingh8298609953@gmail.com", certId: "DNA2025-007" },
  { name: "Akshit Tiwari", email: "akshittiwari29@gmail.com", certId: "DNA2025-008" },
  { name: "Armaan Singh", email: "akgod0101@gmail.com", certId: "DNA2025-009" },
  { name: "Deepansu", email: "Deepanshu1484s@gmail.com", certId: "DNA2025-010" },
  { name: "Mayank Sharma", email: "sharmamayank5051@gmail.com", certId: "DNA2025-011" },
  { name: "Saksham Didi", email: "sakshamdidi7@gmail.com", certId: "DNA2025-012" },
  { name: "Priyanshu Rawat", email: "priyanshurawat374@gmail.com", certId: "DNA2025-013" },
  { name: "Rashmi Kumari", email: "rashmi.23082006@gmail.com", certId: "DNA2025-014" },
  { name: "Bhavya", email: "bhavyakumar.2506@gmail.com", certId: "DNA2025-015" },
  { name: "Nitin", email: "nskashver@gmail.co", certId: "DNA2025-016" },
  { name: "Nitin Sharma", email: "noniponi4605@gmail.com", certId: "DNA2025-017" },
  { name: "Shivaansh Byahut", email: "shivanshbyahut3@gmail.com", certId: "DNA2025-018" },
  { name: "Ajay Chauhan", email: "ajay69chauahan@gmail.com", certId: "DNA2025-019" },
  { name: "Bobby Gupta", email: "bobbyg92500@gmail.com", certId: "DNA2025-020" },
  { name: "Anshuman", email: "apoint200@gmail.com", certId: "DNA2025-021" },
  { name: "Mukul Dutta", email: "mukuldutta2006@gmail.com", certId: "DNA2025-022" },
  { name: "Shobhit Babu", email: "shreekisan575@gmail.com", certId: "DNA2025-023" },
  { name: "Jatin", email: "kjatin1806@gmail.com", certId: "DNA2025-024" },
  { name: "Nitin", email: "nitinhinvar@gmail.com", certId: "DNA2025-025" },
  { name: "Prince Kumar", email: "princeverma918@gmail.com", certId: "DNA2025-026" },
  { name: "Jyoti Pant", email: "jyotipant614@gmail.com", certId: "DNA2025-027" },
  { name: "Mayank", email: "Mayankkothari15206@gmail.com", certId: "DNA2025-028" },
  { name: "Kumar Vaibhav Sir", email: "vaibhavs3387@gmail.com", certId: "DNA2025-029" },
  { name: "Avinash Kumar Yadav", email: "24-cse-aiml-011avinash@eitfaridabad.co.in", certId: "DNA2025-030" },
  { name: "Nitesh Yadav", email: "Yashrroy04@gmail.com", certId: "DNA2025-031" },
  { name: "Amitesh Kumar Singh", email: "kamitesh468@gmail.com", certId: "DNA2025-032" },
  { name: "Ranjit", email: "Ram05101973@gmail.com", certId: "DNA2025-033" },
  { name: "Mandeep", email: "Mk2977172@gmail.com", certId: "DNA2025-034" },
  { name: "Aryan Sahu", email: "aryaan.saahu@gmail.com", certId: "DNA2025-035" },
  { name: "Krish Dadwal", email: "kd02122005@gmail.com", certId: "DNA2025-036" },
  { name: "Aaryan Phogaat", email: "aaryanphogat25@gmail.com", certId: "DNA2025-037" },
  { name: "Avinash Kumar", email: "avinashkum9899@gmail.com", certId: "DNA2025-038" },
  { name: "Ajay Kumar", email: "honestybhai57@gmail.com", certId: "DNA2025-039" },
  { name: "Chirag", email: "pc3132006@gmail.com", certId: "DNA2025-040" },
  { name: "Daksh Bist", email: "landire21@gmail.com", certId: "DNA2025-041" },
  { name: "Chirag Sharma", email: "chiragsharma1165@gmail.com", certId: "DNA2025-042" },
  { name: "Alameen Fioz", email: "alameenfiroz077@gmail.com", certId: "DNA2025-043" },
  { name: "Harmanjot Singh", email: "Harmanjot4714@gmail.com", certId: "DNA2025-044" },
  { name: "Aashish Dagar", email: "Nfsaashish@gmail.com", certId: "DNA2025-045" },
  { name: "Ananta Agarwal", email: "drananta1120@gmail.com", certId: "DNA2025-046" },
  { name: "Aditya Choubey", email: "aditya.choubey.soe@gmail.com", certId: "DNA2025-047" },
  { name: "Krishna Ojha", email: "krishnasoft201@gmail.com", certId: "DNA2025-048" },
  { name: "Kusum Thakur", email: "kusumthakur2219@gmail.com", certId: "DNA2025-049" },
  { name: "Manisha Kumari", email: "manishakmanu5788@gmail.com", certId: "DNA2025-050" }
  // Add more participants as needed - this is first 50 for testing
];

// Generate certificates for the first batch
const generateCertificates = () => {
  console.log('🎯 Starting certificate generation...');
  console.log(`📊 Generating certificates for ${participants.length} participants`);
  
  let generated = 0;
  let errors = 0;
  
  participants.forEach((participant, index) => {
    try {
      const svg = generateCertificateSVG(participant);
      const fileName = `${participant.name.replace(/\s+/g, '_')}.svg`;
      const filePath = path.join(outputDir, fileName);
      
      fs.writeFileSync(filePath, svg);
      generated++;
      
      if ((index + 1) % 10 === 0) {
        console.log(`✅ Generated ${index + 1}/${participants.length} certificates`);
      }
    } catch (error) {
      console.error(`❌ Error generating certificate for ${participant.name}:`, error.message);
      errors++;
    }
  });
  
  console.log(`\n🎉 Certificate generation complete!`);
  console.log(`✅ Successfully generated: ${generated} certificates`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`📁 Certificates saved to: ${outputDir}`);
};

// Run the generation
generateCertificates();
