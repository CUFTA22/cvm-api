import transformParams from '../../utils/transformParams';
import * as svc from './cvmaker.service';

/**
 * Generate CV PDF
 * @param {object} something
 * @returns {Promise}
 */

export const handlePost = async (req, res) => {
    const { data } = req.body;
    const { personalInfo, experience, template } = data;

    const { name, params } = transformParams(personalInfo, experience, template);

    svc.createPdf(name, params, req.file, res);
};
