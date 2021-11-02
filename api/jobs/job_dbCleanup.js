// import { getCVForCleanup, deleteCVById } from '../modules/cvmaker/cvmaker.service';

// const oneDay = 1000 * 60 * 60 * 24;
// const expirationTime = oneDay * 30 * 3; // 3 months, last digit = number of months

// const dbCleanupJob = async () => {
//     try {
//         const lt = new Date(Date.now() - expirationTime);

//         const cvs = await getCVForCleanup(lt);

//         for (const cv of cvs) {
//             await deleteCVById(cv._id);
//         }
//     } catch (err) {
//         console.error('Error     | DB Cleanup');
//     }
// };

// export default dbCleanupJob;
