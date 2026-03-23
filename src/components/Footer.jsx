import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.668);
  background-image: url('/images/footerbg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 50px;
  margin-top: 50px;
  border-top: 2px solid red;

  .f1 p, .f2 p, .f3 p, .f4 p {
    font-size: 14px;
    width: 80%;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.658) !important;
  }

  h3 {
    color: white;
    font-family: almarai;
    font-weight: bold;
    font-size: 20px;
  }

  .navbar-nav li {
    margin-bottom: 10px;
  }

  a {
    color: rgba(255, 255, 255, 0.658) !important;
  }

  .f4 p {
    color: rgba(255, 255, 255, 0.658) !important;
  }

  .row:first-child {
    border-bottom: 1px dashed #eeeeee4b;
    padding-bottom: 30px;
  }
`;
function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        {/* الصف الأول: الروابط والمعلومات */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col f1 mb-3">
            <img className="w-75 pt-0" src="/images/logo-white.png" alt="logo" />
            <p>
              نقدم لكم مجموعة متنوعة من أحدث الموبايلات واللابتوبات في متجرنا
            </p>
            <ul className="navbar-nav text-white">
              <li><i className="fa-solid fa-location-dot"></i> سوريا, دمشق</li>
              <li><i className="fa-solid fa-phone"></i> 0987662345</li>
              <li><i className="fa-solid fa-envelope"></i> info@stc.sy</li>
            </ul>
          </div>

          <div className="col f2 mb-3">
            <h3>أهم الروابط</h3>
            <ul className="navbar-nav">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/mobiles">المنتجات</Link></li>
              <li><Link to="/cart">السلة</Link></li>
              <li><Link to="/checkout">إتمام الدفع</Link></li>
            </ul>
          </div>

          <div className="col f3 mb-3">
            <h3>التصنيفات :</h3>
            <ul className="navbar-nav">
              <li><Link to="/laptops">الحواسيب</Link></li>
              <li><Link to="/mobiles">الهواتف</Link></li>
              <li><Link to="/mobiles">الاكسسوارات</Link></li>
              <li><Link to="/mobiles">التابات</Link></li>
            </ul>
          </div>

          <div className="col f4 mb-3">
            <h3>النشرة البريدية</h3>
            <p>تمتع بأحدث الاشعارات والرسائل عن أحدث المنتجات والخصومات daily</p>
            <form>
              <input type="email" className="form-control mb-3" placeholder="أدخل بريدك الالكتروني" required />
              <button className="btn btn-danger w-100">الاشتراك</button>
            </form>
          </div>
        </div> {/* إغلاق الصف الأول */}

        {/* الصف الثاني: حقوق النشر والدفع */}
        <div className="row row-cols-1 row-cols-md-2 mt-3 align-items-center">
          <div className="col text-center text-md-start">
            <img src="/images/payments.png" alt="payments" className="img-fluid" />
          </div>
          <div className="col d-flex justify-content-center justify-content-md-end">
            <p className="text-white mb-0">
              جميع الحقوق محفوظة &copy; لمتجر رات مارت 2025
            </p>
          </div>
        </div> {/* إغلاق الصف الثاني */}
      </div> {/* إغلاق الـ container */}
    </FooterContainer>
  );
}
export default Footer;