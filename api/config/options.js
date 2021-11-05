export const CORS_OPTIONS = {
    origin: ['http://localhost:3000', 'http://localhost:4111', 'https://cv.jonder.jobs', process.env.FRONT_URL],
};

export const MONGOOSE_OPTIONS = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
