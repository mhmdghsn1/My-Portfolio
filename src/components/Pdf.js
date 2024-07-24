import React from 'react';

const PdfComponent = () => {
  const pdfUrl = process.env.PUBLIC_URL + "/pdfjs.pdf";

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'pdfjs.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pdf-div">
      <button className="pdf-button" onClick={downloadPdf}>Download PDF</button>
      <p className="pdf-text">Download Mohamad Ghosn's CV as PDF</p>
    </div>
  );
};

export default PdfComponent;