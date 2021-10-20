import { Router } from 'express';
import { validate } from '../../middlewares/validation';
import * as ctrl from './cvmaker.controller';
import { postRules } from './cvmaker.validation';
import catchAsyncError from '../../utils/catchAsyncError';
import uploadFiles from '../../middlewares/upload';

const router = Router();

// router.post('/', postRules(), validate, catchAsyncError(ctrl.handlePost));
router.post('/', uploadFiles, catchAsyncError(ctrl.handlePost));

export default router;
