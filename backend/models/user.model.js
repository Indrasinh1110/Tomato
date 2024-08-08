import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartItem: { type: Map, of: Number, default: {"none":1} } // Use a Map where keys are strings (item IDs) and values are numbers (quantities)
});

export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
