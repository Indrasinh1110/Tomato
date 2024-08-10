// import { orderModel } from "../models/order.model.js";
// import Stripe from 'stripe';
// import { UserModel } from './../models/user.model';

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const placeOrder = async (req, res) => {
//     const frontend_url = "host://localhost:5173";
//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address
//         })
//         await newOrder.save();
//         await UserModel.findByIdAndUpdate(req.body / userId, { cartItem: {} });
//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name
//                 },
//                 unit_amount: item.price * 100
//             },
//             quantity: item.quantity
//         }))
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "GST(5%)"
//                 },
//                 unit_amount: item.price * 5,
//                 quantity: 1
//             }
//         })
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges"
//                 },
//                 unit_amount: 40 * 100,
//                 quantity: 1
//             }
//         })

//         const session = await Stripe.Checkout.session.create({
//             line_items: line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         })

//         res.json({ success: true, session_url: session.url })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error });

//     }
// }

// export { placeOrder };