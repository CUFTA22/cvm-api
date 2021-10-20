import transformParams from '../../utils/transformParams';
import * as svc from './cvmaker.service';

/**
 * Generate CV PDF
 * @param {object} something
 * @returns {Promise}
 */

export const handlePost = async (req, res) => {
    const { personalInfo, experience, template } = req.body;

    const { name, params } = transformParams(personalInfo, experience, template);

    svc.createPdf(name, params, req.file, res);
};
