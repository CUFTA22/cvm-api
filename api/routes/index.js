import cvRoutes from '../modules/cvmaker';

export default (app) => {
    app.use('/api/cv', cvRoutes);
    // app.use('/api/auth', authRoutes);
};
