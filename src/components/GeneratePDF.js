import { PDFDocument, rgb } from 'pdf-lib';

const generatePdf = async () => {
    try {
        // Crear un nuevo documento PDF
        const pdfDoc = await PDFDocument.create();
        
        // Agregar una página al documento
        const page = pdfDoc.addPage([600, 400]);
        const { width, height } = page.getSize();
        
        // Definir una fuente
        const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
       
        // Agregar texto al documento
        page.drawText('N° Cotización: 18037', {
            x: 50,
            y: height - 50,
            size: 20,
            font: font,
            color: rgb(0, 0, 0),
        });
        
        // Serializar el PDF
        const pdfBytes = await pdfDoc.save();
        
        // Crear un URL para el PDF
        const pdfUrl = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));

        return pdfUrl;
    } catch (error) {
        console.error('Error al generar el PDF:', error);
        throw error;
    }
};

export default generatePdf;
