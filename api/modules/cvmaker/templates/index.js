import { template1 } from './template1';
import { template2 } from './template2';
import { template3 } from './template3';
import { template4 } from './template4';
import { template5 } from './template5';
import { template6 } from './template6';
import { template7 } from './template7';
import { template8 } from './template8';
import { template9 } from './template9';

const findTemplate = (name, params, img_file, pageNo) => {
    switch (name) {
        case 'template1': //    Berkeley
            return { fileName: 'template1', template: template1(params, img_file, pageNo) };

        case 'template2': //    Princeton
            return { fileName: 'template2', template: template2(params, img_file, pageNo) };

        case 'template3': //    Otago
            return { fileName: 'template3', template: template3(params, img_file, pageNo) };

        case 'template4': //    Stanford
            return { fileName: 'template4', template: template4(params, img_file, pageNo) };

        case 'template5': //    Harvard
            return { fileName: 'template5', template: template5(params, img_file, pageNo) };

        case 'template6': //    Edinburgh
            return { fileName: 'template6', template: template6(params, img_file, pageNo) };

        case 'template7': //    Cambridge
            return { fileName: 'template7', template: template7(params, img_file, pageNo) };

        case 'template8': //    Auckland
            return { fileName: 'template8', template: template8(params, img_file, pageNo) };

        case 'template9': //    Oxford
            return { fileName: 'template9', template: template9(params, img_file, pageNo) };

        default:
            return { fileName: 'template1', template: template1(params, img_file, pageNo) };
    }
};

export default findTemplate;
