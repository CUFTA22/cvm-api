import transformParams from '../../utils/transformParams';
import * as svc from './cvmaker.service';

const handleRequest = (req, res, fn) => {
    const { data } = req.body;

    const parsedData = JSON.parse(data);

    const { personalInfo, experience, template } = parsedData;

    const { name, params } = transformParams(personalInfo, experience, template);

    fn(name, params, req.file, res);
};

export const handlePost = async (req, res) => handleRequest(req, res, svc.createPdf);

export const handlePostFile = async (req, res) => handleRequest(req, res, svc.createPdfFile);
