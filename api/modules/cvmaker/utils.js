import { PDFDocument } from 'pdf-lib';
import pdfJS from 'pdfjs-dist/es5/build/pdf';
import muhammara from 'muhammara';
import streams from 'memory-streams';

function typedArrayToBuffer(array) {
    return array.buffer.slice(array.byteOffset, array.byteLength + array.byteOffset);
}

export const countPages1 = (buffer) => {
    const count = buffer.toString().match(/\/Type[\s]*\/Page[^s]/g).length;
    return count;
};

export const splitPdfPages = (pdf) => {
    const buffer = new Buffer(pdf);
    const readStream = new muhammara.PDFRStreamForBuffer(buffer);

    const pdfReader = muhammara.createReader(readStream);

    let writer = [];

    for (let i = 0; i < pdfReader.getPagesCount(); i++) {
        writer[i] = new streams.WritableStream();

        let pdfWriter = muhammara.createWriter(new muhammara.PDFStreamForResponse(writer[i]));
        pdfWriter.createPDFCopyingContext(pdfReader).appendPDFPageFromPDF(i);

        pdfWriter.end();
    }

    writer = writer.map((val) => val.toBuffer().toString('base64'));

    return {
        cv: buffer.toString('base64'),
        pages: writer,
    };
};

export const formatFinalPDF = async (buffer, pageNo) => {
    const pdfDoc = await PDFDocument.load(buffer);
    const unit8 = new Uint8Array(buffer);

    // Detect if there's empty page and remove it

    const pdfJSDoc = await pdfJS.getDocument({ data: unit8 }).promise;
    const pdfJSPage = await pdfJSDoc.getPage(pageNo);
    const pdfJSText = await pdfJSPage.getTextContent();

    if (!pdfJSText.items.length) pdfDoc.removePage(pageNo - 1);

    const newPdf = await pdfDoc.save();

    // Split pages in array
    const formatRes = splitPdfPages(newPdf);

    return formatRes;
};
