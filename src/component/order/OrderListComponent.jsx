import PropTypes from 'prop-types';
import './OrderListComponent.css';

const OrderListComponent = ({ orders }) => {
    return (
        <ul className="order-list">
            {orders.map(order => (
                <li key={order.orderNumber} className="order-item">
                    <div className="order-info">
                        {/* 상품명 표시 */}
                        {order.orderDetails && order.orderDetails.length > 0 && (
                            <h2 className="order-product-name">
                                상품명: {order.orderDetails.map(detail => detail.productName).join(', ')}
                            </h2>
                        )}
                        {/* 상품 번호 표시 */}
                        {order.orderDetails && order.orderDetails.length > 0 ? (
                            <p className="order-product-number">
                                상품 번호: {order.orderDetails.map(detail => detail.productId).join(', ')}
                            </p>
                        ) : (
                            <p className="order-product-number">상품 번호: 없음</p>
                        )}

                        {/* 주문 상세 정보 표시 */}
                        <p className="order-customer-id">고객 ID: {order.customerId}</p>
                        <p className="order-phone">전화번호: {order.phoneNumber}</p>
                        <p className="order-address">주소: {order.deliveryAddress}</p>
                        <p className="order-message">배송 메시지: {order.deliveryMessage}</p>
                        <p className="order-price">총 가격: {order.totalPrice}원</p>
                        <p className="order-date">주문 시간: {new Date(order.orderDate).toLocaleString()}</p>
                        <p className="order-status">상태: {order.orderStatus}</p>


                    </div>
                </li>
            ))}
        </ul>
    );
};

OrderListComponent.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            orderNumber: PropTypes.number.isRequired,
            customerId: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string,
            deliveryAddress: PropTypes.string.isRequired,
            deliveryMessage: PropTypes.string,
            totalPrice: PropTypes.number.isRequired,
            orderDate: PropTypes.string.isRequired,
            orderStatus: PropTypes.string.isRequired,
            productNumber: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default OrderListComponent;