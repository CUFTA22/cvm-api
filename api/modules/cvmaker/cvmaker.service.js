import { PDFDocument } from 'pdf-lib';
import pdfJS from 'pdfjs-dist/es5/build/pdf';
import pdfGen from 'html-pdf';
import fs from 'fs';

import findTemplate from './templates';

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// utils
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

const PDFS_LEFT = ['template4', 'template5', 'template6', 'template8', 'template9'];

const countPages1 = (buffer) => {
    const count = buffer.toString().match(/\/Type[\s]*\/Page[^s]/g).length;
    return count;
};

const formatFinalPDF = async (buffer, pageNo) => {
    const pdfDoc = await PDFDocument.load(buffer);
    const unit8 = new Uint8Array(buffer);

    // Detect if there's empty page and remove it

    const pdfJSDoc = await pdfJS.getDocument({ data: unit8 }).promise;
    const pdfJSPage = await pdfJSDoc.getPage(pageNo);
    const pdfJSText = await pdfJSPage.getTextContent();

    console.log('Last page txt: ' + pdfJSText.items.length);

    if (!pdfJSText.items.length) pdfDoc.removePage(pageNo);

    const newPdf = await pdfDoc.saveAsBase64();

    // Split pages in array

    return newPdf;
};

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// Buffer
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

export const createPdf = (name, params, img_file, res) => {
    const { template: template1 } = findTemplate(name, params, img_file, 1);

    pdfGen.create(template1, {}).toBuffer(async (err, buff1) => {
        if (err) res.status(400).send('Error creating pdf!');

        if (PDFS_LEFT.includes(name)) {
            const noOfPages = await countPages1(buff1);
            console.log('No of pages: ' + noOfPages);

            const { template: template2 } = findTemplate(name, params, img_file, noOfPages);

            pdfGen.create(template2, {}).toBuffer(async (err, buff2) => {
                if (err) res.status(400).send('Error creating pdf!');

                const finalPdf = await formatFinalPDF(buff2, noOfPages);

                res.status(201).send(finalPdf);
            });
        } else {
            res.status(201).send(buff1.toString('base64'));
        }
    });
};

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// File
// ----------------------------------------------------------------
// ----------------------------------------------------------------

export const createPdfFile = (name, params, img_file, res) => {
    const { fileName: fn1, template: template1 } = findTemplate(name, params, img_file, 1);

    pdfGen.create(template1, {}).toFile(`documents/${fn1}.pdf`, async (err, pdf1) => {
        if (err) res.status(400).send('Error creating pdf!');

        if (PDFS_LEFT.includes(name)) {
            let cv1Buffer = fs.readFileSync(pdf1.filename);
            const noOfPages = countPages1(cv1Buffer);

            console.log('No of pages: ' + noOfPages);
            const { fileName: fn2, template: template2 } = findTemplate(name, params, img_file, noOfPages);

            pdfGen.create(template2, {}).toFile(`documents/${fn2}.pdf`, async (err, pdf2) => {
                let cv2Buffer = fs.readFileSync(pdf2.filename);

                if (err) res.status(400).send('Error creating pdf!');

                const finalPdf = await formatFinalPDF(cv2Buffer, noOfPages);

                res.status(201).send(finalPdf);
            });
        } else {
            res.status(201).sendFile(pdf1.filename);
        }
    });
};
