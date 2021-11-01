import pdfGen from 'html-pdf';
import pdfPage from 'pdf-page-counter';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

import findTemplate from './templates';

// ------------------------------
// ------------------------------
// utils
// ------------------------------
// ------------------------------

const PDFS_LEFT = ['template4', 'template5', 'template6', 'template8', 'template9'];

const countPages1 = (buffer) => {
    const count = buffer.toString().match(/\/Type[\s]*\/Page[^s]/g).length;
    return count;
};

const countPages2 = async (buffer) => {
    const pdf = await PDFDocument.load(buffer);
    return pdf.getPageCount();
};

// ------------------------------
// ------------------------------
// Buffer
// ------------------------------
// ------------------------------

export const createPdf = (name, params, img_file, res) => {
    const { template: template1 } = findTemplate(name, params, img_file, 1);

    pdfGen.create(template1, {}).toBuffer(async (err, buff) => {
        if (err) res.status(400).send('Error creating pdf!');
        const cv1Buffer = buff;

        if (PDFS_LEFT.includes(name)) {
            const noOfPages = await countPages1(cv1Buffer);
            console.log(noOfPages);

            const { template: template2 } = findTemplate(name, params, img_file, noOfPages);

            pdfGen.create(template2, {}).toBuffer((err, buff) => {
                if (err) res.status(400).send('Error creating pdf!');
                const cv2Buffer = buff;
                res.status(201).send(cv2Buffer.toString('base64'));
            });

            // pdfPage(cv1Buffer).then((pdfData) => {
            //     console.log(pdfData.numpages);
            //     const { template: template2 } = findTemplate(name, params, img_file, pdfData.numpages);

            //     pdfGen.create(template2, {}).toBuffer((err, buff) => {
            //         if (err) res.status(400).send('Error creating pdf!');
            //         const cv2Buffer = buff;
            //         res.status(201).send(cv2Buffer.toString('base64'));
            //     });
            // });
        } else {
            res.status(201).send(cv1Buffer.toString('base64'));
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

    pdfGen.create(template1, {}).toFile(`documents/${fn1}.pdf`, async (err, pdf) => {
        if (err) res.status(400).send('Error creating pdf!');

        if (PDFS_LEFT.includes(name)) {
            let cv1Buffer = fs.readFileSync(pdf.filename);
            const noOfPages = countPages1(cv1Buffer);

            console.log(noOfPages);
            const { fileName: fn2, template: template2 } = findTemplate(name, params, img_file, noOfPages);

            pdfGen.create(template2, {}).toFile(`documents/${fn2}.pdf`, (err, pdf) => {
                if (err) res.status(400).send('Error creating pdf!');
                res.status(201).sendFile(pdf.filename);
            });

            //    pdfPage(cv1Buffer).then((pdfData) => {
            //         console.log(pdfData.numpages);
            //         const { fileName: fn2, template: template2 } = findTemplate(name, params, img_file, pdfData.numpages);

            //         pdfGen.create(template2, {}).toFile(`documents/${fn2}.pdf`, (err, pdf) => {
            //             if (err) res.status(400).send('Error creating pdf!');
            //             res.status(201).sendFile(pdf.filename);
            //         });
            //     });
        } else {
            res.status(201).sendFile(pdf.filename);
        }
    });
};
