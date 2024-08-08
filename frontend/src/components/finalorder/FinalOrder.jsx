import CartPlaceOrder from '../cartplaceorder/CartPlaceOrder'
import DeliveryDetails from '../deliveryDetails/DeliveryDetails'
import './FinalOrder.css'
const FinalOrder = () => {
    return (<div className='final-order'>
    <DeliveryDetails/>
    <CartPlaceOrder/>
    </div>
    )
}

export default FinalOrder