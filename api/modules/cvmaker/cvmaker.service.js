import Resume from './cvmaker.model';
import pdf from 'html-pdf';
import findTemplate from './templates';

export const deleteCVById = (id) => Resume.findByIdAndDelete(id);
export const getCVForCleanup = (lt) =>
    Resume.find({
        updatedAt: { $lt: lt },
    });
export const createCVDocument = (name, params, filename) => {
    const doc = new Resume({
        pic_filename: filename,
        template: name,
        params,
    });
    doc.save();
};

export const createPdf = (name, params, img_file, res) => {
    const { fileName, template } = findTemplate(name, params, img_file);

    pdf.create(template, {}).toFile(`documents/${fileName}.pdf`, (err, pdf) => {
        if (err) res.status(400).send('Error creating pdf!');

        // createCVDocument(name, params, db_filename);

        res.status(201).sendFile(pdf.filename);
    });
};
