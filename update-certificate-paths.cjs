const fs = require('fs');

// Read the current certificates file
const filePath = './src/data/completeCertificates.ts';
const content = fs.readFileSync(filePath, 'utf8');

// List of participants who now have real SVG certificates
const participantsWithSVG = [
  "Riya Nagpal", "Rupal Mittal", "Anurag Sehrawat", "Aditya Kumar Singh", 
  "Bhoomi Srivstav", "Ayush Yadav", "Keshav", "Akshit Tiwari", "Armaan Singh", 
  "Deepansu", "Mayank Sharma", "Saksham Didi", "Priyanshu Rawat", "Rashmi Kumari", 
  "Bhavya", "Nitin", "Nitin Sharma", "Shivaansh Byahut", "Ajay Chauhan", 
  "Bobby Gupta", "Anshuman", "Mukul Dutta", "Shobhit Babu", "Jatin", 
  "Prince Kumar", "Jyoti Pant", "Mayank", "Kumar Vaibhav Sir", 
  "Avinash Kumar Yadav", "Nitesh Yadav", "Amitesh Kumar Singh", "Ranjit", 
  "Mandeep", "Aryan Sahu", "Krish Dadwal", "Aaryan Phogaat", "Avinash Kumar", 
  "Ajay Kumar", "Chirag", "Daksh Bist", "Chirag Sharma", "Alameen Fioz", 
  "Harmanjot Singh", "Aashish Dagar", "Ananta Agarwal", "Aditya Choubey", 
  "Krishna Ojha", "Kusum Thakur", "Manisha Kumari"
];

// Update the content by replacing .png with .svg for these participants
let updatedContent = content;

participantsWithSVG.forEach(name => {
  const nameForFile = name.replace(/\s+/g, '_');
  const oldPath = `certificates/${nameForFile}.png`;
  const newPath = `certificates/${nameForFile}.svg`;
  
  updatedContent = updatedContent.replace(
    new RegExp(`certificatePath: "${oldPath}"`, 'g'),
    `certificatePath: "${newPath}"`
  );
});

// Write the updated content back
fs.writeFileSync(filePath, updatedContent);

console.log(`✅ Updated certificate paths for ${participantsWithSVG.length} participants`);
console.log('📁 These participants now have real SVG certificates');
console.log('🎯 The rest will continue to use dynamic generation');

// Show which files were updated
console.log('\n📋 Updated certificate paths:');
participantsWithSVG.slice(0, 10).forEach(name => {
  console.log(`   ${name} → certificates/${name.replace(/\s+/g, '_')}.svg`);
});
console.log(`   ... and ${participantsWithSVG.length - 10} more`);
