import { UserModel } from "../models/user.model.js";

const addToCart = async (req, res) => {
    try {
        const { itemId, userId } = req.body;
        let userData = await UserModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartItem || new Map();

        // Update the quantity for the item
        let currentQuantity = cartData.get(itemId) || 0;
        cartData.set(itemId, currentQuantity + 1);

        // Save the updated cart data
        await UserModel.findByIdAndUpdate(userId, { cartItem: cartData });
        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({
            success: false,
            message: "Error adding to cart",
            error: error.message || "An unexpected error occurred"
        });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const { itemId, userId } = req.body;
        let userData = await UserModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartItem || new Map();

        // Update the quantity for the item
        let currentQuantity = cartData.get(itemId) || 0;
        if (currentQuantity > 1) {
            cartData.set(itemId, currentQuantity - 1);
        } else if (currentQuantity === 1) {
            cartData.delete(itemId); // Remove the item if quantity is zero
        }

        // Save the updated cart data
        await UserModel.findByIdAndUpdate(userId, { cartItem: cartData });
        res.json({ success: true, message: "Removed from Cart" });
    } catch (error) {
        console.error("Error removing from cart:", error);
        res.status(500).json({
            success: false,
            message: "Error removing from cart",
            error: error.message || "An unexpected error occurred"
        });
    }
};

const getCart = async (req, res) => {
    try {
        const { userId } = req.body;
        let userData = await UserModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartItem || new Map();
        res.json({ success: true, cartData: Object.fromEntries(cartData) });
    } catch (error) {
        console.error("Error retrieving cart data:", error);
        res.status(500).json({
            success: false,
            message: "Error retrieving cart data",
            error: error.message || "An unexpected error occurred"
        });
    }
};

export { addToCart, removeFromCart, getCart };
