import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

// Generate a certificate template as HTML
export const generateCertificateHTML = (certificate: Certificate): string => {
  return `
    <div id="certificate-template" style="
      width: 1200px;
      height: 800px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      font-family: 'Arial', sans-serif;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 60px;
      box-sizing: border-box;
      border: 20px solid #fff;
      box-shadow: 0 0 30px rgba(0,0,0,0.3);
    ">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="
          font-size: 48px;
          font-weight: bold;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 2px;
        ">CERTIFICATE</h1>
        <h2 style="
          font-size: 28px;
          margin: 10px 0 0 0;
          font-weight: normal;
          opacity: 0.9;
        ">OF PARTICIPATION</h2>
      </div>

      <!-- Decorative line -->
      <div style="
        width: 300px;
        height: 3px;
        background: white;
        margin: 20px 0;
        opacity: 0.8;
      "></div>

      <!-- Main content -->
      <div style="text-align: center; margin: 40px 0;">
        <p style="
          font-size: 22px;
          margin: 0 0 20px 0;
          opacity: 0.9;
        ">This is to certify that</p>
        
        <h3 style="
          font-size: 42px;
          font-weight: bold;
          margin: 20px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 1px;
        ">${certificate.recipientName}</h3>
        
        <p style="
          font-size: 20px;
          margin: 30px 0;
          line-height: 1.6;
          opacity: 0.9;
        ">has successfully completed the<br/>
        <strong>${certificate.eventName}</strong></p>
      </div>

      <!-- Footer -->
      <div style="
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 60px;
        align-items: flex-end;
      ">
        <div style="text-align: left;">
          <p style="margin: 0; font-size: 16px; opacity: 0.8;">Issue Date:</p>
          <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">
            ${new Date(certificate.issueDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
        
        <div style="text-align: center;">
          <div style="
            width: 200px;
            height: 2px;
            background: white;
            margin-bottom: 10px;
            opacity: 0.6;
          "></div>
          <p style="margin: 0; font-size: 16px; opacity: 0.8;">Authorized Signature</p>
        </div>
        
        <div style="text-align: right;">
          <p style="margin: 0; font-size: 16px; opacity: 0.8;">Certificate ID:</p>
          <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">
            ${certificate.certificateId}
          </p>
        </div>
      </div>
    </div>
  `;
};

// Download certificate as PDF
export const downloadCertificateAsPDF = async (certificate: Certificate): Promise<void> => {
  try {
    // Create a temporary container
    const container = document.createElement('div');
    container.innerHTML = generateCertificateHTML(certificate);
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    document.body.appendChild(container);

    const element = container.querySelector('#certificate-template') as HTMLElement;
    
    if (!element) {
      throw new Error('Certificate template not found');
    }

    // Generate canvas
    const canvas = await html2canvas(element, {
      width: 1200,
      height: 800,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null
    });

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1200, 800]
    });

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, 1200, 800);

    // Download the PDF
    const fileName = `${certificate.recipientName.replace(/\s+/g, '_')}_Certificate_${certificate.certificateId}.pdf`;
    pdf.save(fileName);

    // Clean up
    document.body.removeChild(container);
    
    console.log(`Certificate downloaded successfully: ${fileName}`);
  } catch (error) {
    console.error('Error generating certificate:', error);
    throw error;
  }
};

// Download certificate as PNG image
export const downloadCertificateAsImage = async (certificate: Certificate): Promise<void> => {
  try {
    // Create a temporary container
    const container = document.createElement('div');
    container.innerHTML = generateCertificateHTML(certificate);
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    document.body.appendChild(container);

    const element = container.querySelector('#certificate-template') as HTMLElement;
    
    if (!element) {
      throw new Error('Certificate template not found');
    }

    // Generate canvas
    const canvas = await html2canvas(element, {
      width: 1200,
      height: 800,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null
    });

    // Create download link
    const link = document.createElement('a');
    link.download = `${certificate.recipientName.replace(/\s+/g, '_')}_Certificate_${certificate.certificateId}.png`;
    link.href = canvas.toDataURL('image/png');
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    document.body.removeChild(container);
    
    console.log(`Certificate downloaded successfully: ${link.download}`);
  } catch (error) {
    console.error('Error generating certificate:', error);
    throw error;
  }
};

// Try to download from public folder, fallback to generated certificate
export const downloadCertificate = async (certificate: Certificate, format: 'pdf' | 'png' = 'pdf'): Promise<void> => {
  try {
    // First, try to download from public folder
    const response = await fetch(`/${certificate.certificatePath}`);
    
    if (response.ok) {
      // File exists in public folder, download it directly
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      const fileName = certificate.certificatePath.split('/').pop() || 
        `${certificate.recipientName.replace(/\s+/g, '_')}_Certificate.png`;
      
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log(`Certificate downloaded from public folder: ${fileName}`);
    } else {
      // File doesn't exist, generate certificate dynamically
      console.log('Certificate file not found in public folder, generating dynamically...');
      
      if (format === 'pdf') {
        await downloadCertificateAsPDF(certificate);
      } else {
        await downloadCertificateAsImage(certificate);
      }
    }
  } catch (error) {
    console.error('Error downloading certificate:', error);
    // Fallback to generated certificate
    try {
      if (format === 'pdf') {
        await downloadCertificateAsPDF(certificate);
      } else {
        await downloadCertificateAsImage(certificate);
      }
    } catch (fallbackError) {
      console.error('Fallback certificate generation failed:', fallbackError);
      throw new Error('Failed to download certificate. Please try again.');
    }
  }
};
