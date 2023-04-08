import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    address: string;
    phone: string;
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

export default mongoose.model<IUser>('employees', userSchema);
