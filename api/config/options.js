export const CORS_OPTIONS = {
    origin: ['http://localhost:3000', process.env.FRONT_URL],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', '*'],
    credentials: true,
};

export const MONGOOSE_OPTIONS = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
