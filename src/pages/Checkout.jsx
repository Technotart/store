import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutContainer = styled.main`
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

  .cart-product-title {
    font-size: 18px;
    font-weight: bold;
  }

  .user-info, .card-info {
    background-color: #eee;
    padding: 15px;
    border-radius: 10px;
  }

  .filter-title {
    color: black;
    font-family: almarai;
    font-weight: bold;
    font-size: 20px;
  }

  .total-price {
    font-size: 20px;
    font-weight: bold;
    color: #C70039;
  }
`;
function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم تأكيد الدفع بنجاح! شكراً لطلبك.');
  };

  return (
    <CheckoutContainer>
      <section className="bunner">
        <h1 className="category-title">إتمام الطلب</h1>
      </section>

      <section className="mt-5">
        <div className="container">
          {/* بداية النموذج لتغليف كل المدخلات بما فيها حقول البطاقة والزر */}
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* القسم الأيمن: معلومات الشحن */}
              <div className="col-md-6 mt-3">
                <div className="user-info">
                  <h4 className="filter-title mb-3">معلومات الشحن</h4>
                  <div className="mb-3">
                    <label htmlFor="cardholder-name" className="form-label">اسم صاحب البطاقة</label>
                    <input type="text" className="form-control" id="cardholder-name" placeholder="أدخل الاسم" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                    <input type="tel" className="form-control" id="phone" placeholder="+999 888 777 666" required />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="country" className="form-label">البلد</label>
                      <select className="form-select" id="country" required>
                        <option value="" selected disabled>اختر البلد</option>
                        <option value="syria">سوريا</option>
                        {/* باقي الدول */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city" className="form-label">المدينة</label>
                      <select className="form-select" id="city" required>
                        <option value="" selected disabled>اختر المدينة</option>
                        <option value="damascus">دمشق</option>
                        <option value="Tartus">طرطوس</option>
                        <option value="ِAleppo">حلب</option>
                        <option value="Homs">حمص</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="area" className="form-label">الحي</label>
                    <input type="text" className="form-control" id="area" required />
                  </div>
                </div>
              </div>

              {/* القسم الأيسر: مراجعة المنتجات والدفع */}
              <div className="col-md-6 mt-3">
                <div className="row row-cols-1">
                  {cartItems.map((item) => (
                    <div className="col mini-card d-flex justify-content-between align-items-center px-3" key={item.id}>
                      <div className="d-flex align-items-center gap-2">
                        <img src={item.image} width="40px" alt={item.name} />
                        <span>{item.name} (x{item.quantity})</span>
                      </div>
                      <p className="mb-0">{item.price * item.quantity}$</p>
                    </div>
                  ))}
                </div>

                <div className="total-price mt-3 text-end">
                  المجموع النهائي: {totalPrice}$
                </div>

                <div className="card-info mt-4">
                  <h4 className="mb-3">معلومات البطاقة</h4>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="رقم البطاقة" required />
                  </div>
                  <div className="d-flex gap-2">
                    <input type="month" className="form-control" required />
                    <input type="text" className="form-control" placeholder="CVV" required />
                  </div>
                  <button type="submit" className="btn btn-danger w-100 mt-4 py-2">
                    تأكيد وإتمام الدفع
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </CheckoutContainer>
  );
}
export default Checkout;