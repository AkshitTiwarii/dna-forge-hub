export interface Certificate {
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

// Simple certificate download function for PNG files
export const downloadCertificateImage = async (certificate: Certificate): Promise<void> => {
  try {
    const fileName = certificate.certificatePath.split('/').pop() || 
      `${certificate.recipientName.replace(/\s+/g, '_')}_Certificate.png`;
    
    // Create a download link for the file in public folder
    const link = document.createElement('a');
    link.href = `/${certificate.certificatePath}`;
    link.download = fileName;
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Certificate downloaded: ${fileName}`);
    
  } catch (error) {
    console.error('Error downloading certificate:', error);
    throw new Error('Failed to download certificate. Please try again.');
  }
};

// Main download function - simplified to only handle PNG downloads
export const downloadCertificate = async (certificate: Certificate, format: 'png' = 'png'): Promise<void> => {
  await downloadCertificateImage(certificate);
};
