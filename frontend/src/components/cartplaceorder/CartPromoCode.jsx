import './CartPlaceOrder.css'

const CartPromoCode = () => {
    return (
        <div className="promo-code-box">
            <p>If you have a promo code, enter it here:</p>
            <input type="text" className="promo-code-text" placeholder="Enter promo code" />
            <button className="submit-promo-code">Apply</button>
        </div>

    )
}

export default CartPromoCode