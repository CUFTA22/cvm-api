import pdfGen from 'html-pdf';
import { countPages1, formatFinalPDF } from './utils';
import fs from 'fs';

import findTemplate from './templates';

const PDFS_LEFT = ['template4', 'template5', 'template6', 'template8', 'template9'];

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
