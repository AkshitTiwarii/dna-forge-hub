const fs = require('fs');
const path = require('path');

// Read the certificates directory
const certificatesDir = './public/certificates';
const certFiles = fs.readdirSync(certificatesDir)
  .filter(file => file.endsWith('.svg') && file !== 'template.svg')
  .map(file => file.replace('.svg', ''));

console.log(`Found ${certFiles.length} certificate files:`);
certFiles.forEach(cert => console.log(`- ${cert}`));

// Read the current completeCertificates.ts file
const dataFilePath = './src/data/completeCertificates.ts';
let content = fs.readFileSync(dataFilePath, 'utf8');

// Extract the certificate data array
const arrayStart = content.indexOf('export const completeCertificates: Certificate[] = [');
const arrayEnd = content.lastIndexOf('];');

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not find certificate array in the file');
  process.exit(1);
}

// Parse the existing certificates to get the data structure
const beforeArray = content.substring(0, arrayStart);
const afterArray = content.substring(arrayEnd + 2);

// Extract certificate objects using a more robust approach
const arrayContent = content.substring(
  content.indexOf('[', arrayStart) + 1,
  arrayEnd
);

// Split by certificate objects (looking for id pattern)
const certObjects = [];
const lines = arrayContent.split('\n');
let currentCert = {};
let currentCertLines = [];
let inCertificate = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.includes('id: "') && line.includes(',')) {
    // Start of new certificate
    if (inCertificate && Object.keys(currentCert).length > 0) {
      certObjects.push(currentCert);
    }
    currentCert = {};
    currentCertLines = [];
    inCertificate = true;
  }
  
  if (inCertificate) {
    // Extract key-value pairs
    if (line.includes('recipientName: "')) {
      const name = line.match(/recipientName: "([^"]+)"/);
      if (name) currentCert.recipientName = name[1];
    }
    if (line.includes('recipientEmail: "')) {
      const email = line.match(/recipientEmail: "([^"]+)"/);
      if (email) currentCert.recipientEmail = email[1];
    }
    if (line.includes('id: "')) {
      const id = line.match(/id: "([^"]+)"/);
      if (id) currentCert.id = id[1];
    }
    if (line.includes('certificateId: "')) {
      const certId = line.match(/certificateId: "([^"]+)"/);
      if (certId) currentCert.certificateId = certId[1];
    }
    
    currentCertLines.push(line);
    
    if (line === '},' || line === '}') {
      inCertificate = false;
      if (Object.keys(currentCert).length > 0) {
        certObjects.push(currentCert);
      }
    }
  }
}

console.log(`\nParsed ${certObjects.length} certificate objects from data file`);

// Update certificate paths for existing files
let updatedCount = 0;
const updatedCerts = certObjects.map(cert => {
  if (!cert.recipientName) return cert;
  
  // Convert name to filename format
  const fileName = cert.recipientName.replace(/\s+/g, '_').replace(/[^\w\-_]/g, '');
  
  // Check if file exists
  if (certFiles.includes(fileName)) {
    cert.certificatePath = `certificates/${fileName}.svg`;
    updatedCount++;
    console.log(`✅ Updated: ${cert.recipientName} -> ${fileName}.svg`);
  } else {
    // Keep as PNG for dynamic generation
    cert.certificatePath = `certificates/${fileName}.png`;
    console.log(`⚠️  No file found for: ${cert.recipientName} (${fileName}.svg) - keeping PNG for dynamic generation`);
  }
  
  return cert;
});

console.log(`\n📊 Summary:`);
console.log(`- Total participants: ${certObjects.length}`);
console.log(`- Real certificate files found: ${certFiles.length}`);
console.log(`- Paths updated to use real files: ${updatedCount}`);
console.log(`- Will use dynamic generation: ${certObjects.length - updatedCount}`);

// Generate the updated file content
const updatedCertificatesArray = updatedCerts.map(cert => `  {
    id: "${cert.id}",
    recipientName: "${cert.recipientName}",
    recipientEmail: "${cert.recipientEmail}",
    certificatePath: "${cert.certificatePath}",
    eventName: "DNA Lead Community Event",
    issueDate: "2025-07-20",
    title: "Certificate of Participation",
    description: "Successfully completed DNA Lead Community Event",
    type: "certificate",
    category: "certificate",
    certificateId: "${cert.certificateId}"
  }`).join(',\n');

const newContent = `export interface Certificate {
  id: string;
  recipientName: string;
  recipientEmail: string;
  certificatePath: string;
  eventName: string;
  issueDate: string;
  title: string;
  description: string;
  type: string;
  category: string;
  certificateId: string;
}

export const completeCertificates: Certificate[] = [
${updatedCertificatesArray}
];`;

// Write the updated file
fs.writeFileSync(dataFilePath, newContent);
console.log(`\n✅ Updated ${dataFilePath} successfully!`);
console.log(`🎉 All real certificate files are now linked to the corresponding participants!`);
