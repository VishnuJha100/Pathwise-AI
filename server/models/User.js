import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    skills: [
        {
            name: String,
            status: {
                type: String,
                enum: ["learning", "in-progress", "mastered"],
                default: "learning"
            }
        }
    ]
}, { timeseries: true });

export default mongoose.model("User", userSchema);