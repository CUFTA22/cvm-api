import { body } from 'express-validator';

export const postRules = () => {
    return [
        body('name').isString().isLength({ max: 30 }).withMessage('Value too long (max 30)').not().isEmpty(),
        body('template').isString().withMessage('Value must be string').not().isEmpty(),
        body('action').isString().withMessage('Value must be string').isIn(['approve', 'reject']).not().isEmpty(),
        body('subject').isString().isLength({ max: 30 }).withMessage('Value too long (max 30)').optional(),
    ];
};
