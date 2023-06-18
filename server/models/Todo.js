import mongoose, { Schema } from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {
        type: String
    },

    isDone: {
        type: Boolean,
        default: false
    },
},
    { timestamps: true }
);

export default mongoose.model('Todo', TodoSchema);