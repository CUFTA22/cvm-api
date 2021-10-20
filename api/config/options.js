export const CORS_OPTIONS = {
    origin: [process.env.FRONT_URL],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', '*'],
    credentials: true,
};

export const MONGOOSE_OPTIONS = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
