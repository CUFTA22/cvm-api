import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

// const storage = new GridFsStorage({
//     url: process.env.MONGO_URI,
//     file: (req, file) => {
//         const match = ['image/png', 'image/jpeg'];
//         const filename = `${Date.now()}-cvm-${file.originalname}`;

//         if (match.indexOf(file.mimetype) === -1) {
//             return filename;
//         }

//         return {
//             bucketName: 'images',
//             filename,
//         };
//     },
// });

// const uploadFiles = multer({ storage: storage }).single('image');
const uploadFiles = multer({}).single('image');

export default uploadFiles;
