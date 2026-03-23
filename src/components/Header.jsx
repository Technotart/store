import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .top-header {
    border-bottom: 1px solid #eee;
  }

  .search-icon {
    color: #666;
  }

  .cart-icon, .login-icon, .favorite-icon {
    font-size: 20px;
    margin-left: 15px;
    color: #333;
    transition: color 0.3s;
  }

  .cart-icon:hover, .login-icon:hover, .favorite-icon:hover {
    color: #007BFF;
  }

  .bottom-header {
    border-top: 1px solid #eee;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .navbar-nav .nav-link {
    color: #333 !important;
    font-weight: 500;
    padding: 10px 15px;
  }

  .navbar-nav .nav-link:hover {
    color: #007BFF !important;
  }

  .dropdown-menu {
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .dropdown-item {
    padding: 10px 20px;
  }

  .dropdown-item:hover {
    background-color: #007BFF;
    color: white !important;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 6px 6px;
  font-size: 12px;
  font-weight: bold;
`;

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContainer>
      <div id="top-header" className="top-header py-1">
        <div className="container">
          <div className="row align-items-center">
            {/* الشعار */}
            <div className="col-6 col-md-3">
              <Link to="/">
                <img width="120px" src="/images/logo.png" alt="logo" />
              </Link>
            </div>

            {/* مربع البحث */}
            <div className="col-6 col-md-5 d-flex align-items-center">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fas fa-search search-icon"></i>
                </span>
                <input type="text" className="form-control border-start-0" placeholder="ابحث عن منتج..." />
              </div>
            </div> {/* تم إغلاق عمود البحث هنا */}

            {/* الروابط السريعة */}
            <div className="col-md-4 left-header d-none d-lg-flex justify-content-end align-items-center">
              <Link to="/cart" className="position-relative">
                <i className="fas fa-cart-shopping cart-icon"></i>
                {totalQuantity > 0 && <CartBadge>{totalQuantity}</CartBadge>}
              </Link>
              <Link to="/register">
                <i className="fas fa-right-to-bracket login-icon"></i>
              </Link>
              <Link to="/laptops">
                <i className="fas fa-heart favorite-icon"></i>
              </Link>
            </div>
          </div> {/* إغلاق row */}
        </div> {/* إغلاق container */}
      </div> {/* إغلاق top-header */}

      <div className="bottom-header">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">الرئيسية</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">المنتجات</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/laptops">الحواسيب</Link></li>
                    <li><Link className="dropdown-item" to="/mobiles">الموبايلات</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/cart">السلة</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/checkout">إتمام الدفع</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/register">تسجيل الدخول/إنشاء حساب</Link></li>
              </ul>
            </div> {/* إغلاق collapse */}
          </div> {/* إغلاق container */}
        </nav>
      </div>
    </HeaderContainer>
  );
}
export default Header;
