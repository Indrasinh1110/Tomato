import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Please log in again." });
    }
    try {
        const decoded_Token = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = decoded_Token.tokenId;
        next();
    } catch (error) {
        return res.json({ success: false, message: "Invalid token. Please log in again." });
    }
};

export { authMiddleware };
