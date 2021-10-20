import { CronJob } from 'cron';
import dbCleanupJob from './job_dbCleanup';

// For testing "* * * * *" - every minute
// Every Saturday at 03:00 AM      0 3 * * sat
const dbCleanupCron = new CronJob('0 3 * * sat', dbCleanupJob);

export const runJobs = () => {
    dbCleanupCron.start();
};
