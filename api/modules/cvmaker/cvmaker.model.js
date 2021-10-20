import mongoose from 'mongoose';

const cvSchema = mongoose.Schema(
    {
        user: { type: String, required: false }, // unique id ?
        pic_filename: { type: String, required: false },
        template: { type: String, required: true },
        params: {},
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Cv', cvSchema);
