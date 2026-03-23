import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

const CartContainer = styled.main`
  .bunner {
    background-color: rgba(0, 0, 0, 0.371);
    padding-top: 75px;
    padding-bottom: 75px;
    border-bottom: 2px solid red;
  }

  .category-title {
    color: white;
    font-family: almarai;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
  }

  .mini-card {
    background-color: #eee;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }

  .mini-card img {
    border-radius: 10px;
    margin-left: 5px;
  }

  .cart-product-title {
    font-size: 18px;
    font-weight: bold;
  }

  .summary {
    background-color: #eee;
    padding: 15px;
    border-radius: 10px;
  }

  .cart-item {
    border-bottom: 1px dashed #ccc;
  }

  .filter-section {
    background-color: #eee;
    padding: 10px;
    border: 1px solid #ccc;
    margin-top: 70px;
    border-radius: 5px;
  }

  .filter-title {
    color: black;
    font-family: almarai;
    font-weight: bold;
    font-size: 20px;
  }
`;

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartContainer>
      <section className="bunner">
        <h1 className="category-title">سلة المشتريات</h1>
      </section>

      <div className="container mt-5 cart">
        <div className="row">
          {/* قسم المنتجات في السلة */}
          <div className="col-md-8">
            <div className="row row-cols-1">
              {/* رأس الجدول المستعار */}
              <div className="col mini-card d-flex justify-content-between align-items-center px-3">
                <p className="cart-product-title mb-0">المنتج</p>
                <p className="cart-product-title mb-0">السعر</p>
                <p className="cart-product-title mb-0">الكمية</p>
                <p className="cart-product-title mb-0">الإجمالي</p>
              </div>

              {cartItems.length === 0 ? (
                <div className="col mini-card text-center py-5">
                  <p>السلة فارغة حالياً</p>
                  <Link to="/" className="btn btn-primary">تصفح المنتجات</Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div className="col mini-card d-flex justify-content-between align-items-center px-3" key={item.id}>
                    <div className="d-flex align-items-center gap-2" style={{width: '25%'}}>
                      <img src={item.image} className="img-fluid" width="50px" alt={item.name} />
                      <div>
                        <p className="mb-1 fw-bold">{item.name}</p>
                        <button className="btn btn-sm text-danger p-0" onClick={() => handleRemove(item.id)}>حذف</button>
                      </div>
                    </div>
                    <p className="mb-0">{item.price}$</p>
                    <div className="btn-group bg-light">
                      <button className="btn btn-sm" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                      <span className="px-2 d-flex align-items-center">{item.quantity}</span>
                      <button className="btn btn-sm" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className="mb-0">{item.price * item.quantity}$</p>
                  </div>
                ))
              )}
            </div>
          </div> {/* إغلاق col-md-8 */}

          {/* قسم ملخص السلة */}
          <div className="col-md-4 mt-4 mt-md-0">
            <div className="summary">
              <h4 className="cart-product-title mb-3">ملخص سلة المشتريات</h4>
              <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span>المجموع النهائي:</span>
                <sn className="fw-bold text-danger">{totalPrice}$</sn>pa
              </div>
              <div className="d-flex flex-column gap-2">
                <Link to="/checkout" className="btn btn-danger w-100">الانتقال للدفع</Link>
                <Link to="/" className="btn btn-outline-primary w-100">العودة للمتجر</Link>
              </div>
            </div>
          </div> {/* إغلاق col-md-4 */}
        </div> {/* إغلاق row */}
      </div> {/* إغلاق container */}
    </CartContainer>
  );
}
export default Cart;
