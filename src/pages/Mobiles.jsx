
import { useState } from 'react';
import styled from 'styled-components';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const MobilesContainer = styled.main`
  .bunner {
    background-color: rgba(0, 0, 0, 0.371);
    padding-top: 25px;
    padding-bottom: 25px;
    border-bottom: 2px solid red;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .category-title {
    color: white;
    font-family: almarai;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
  }

  .filter-section {
    background-color: #eee;
    padding: 10px;
    border: 1px solid #ccc;
    margin-top: 70px;
    border-radius: 5px;
  }
.sticky-LgTop{
position:sticky;
top:120px;
right:0;
}
  .filter-title {
    color: black;
    font-family: almarai;
    font-weight: bold;
    font-size: 20px;
  }
`;

function Mobiles() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  
  const brands = ['all', 'Apple', 'Samsung', 'Xiaomi', 'Google', 'OnePlus', 'Realme'];
  
  const filteredMobiles = selectedBrand === 'all' 
    ? products.mobiles 
    : products.mobiles.filter(mobile => mobile.brand === selectedBrand);

  return (
    <MobilesContainer>
      <section className="bunner">
        <h1 className="category-title">قسم الموبايلات</h1>
      </section>

      <div className="container">
        <div className="row">
          {/* قسم الفلترة الجانبي */}
          <div className="col-md-3 d-none d-md-block">
            <div className="filter-section sticky-LgTop">
              <h4 className="filter-title">الفلترة بالماركة</h4>
              <div className="filter-radio d-flex flex-column gap-1">
                {brands.map((brand) => (
                  <div className="form-check" key={brand}>
                    <input 
                      type="radio" 
                      id={brand} 
                      name="brand" 
                      className="form-check-input"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                    />
                    <label htmlFor={brand} className="form-check-label">
                      {brand === 'all' ? 'الكل' : brand}
                    </label>
                  </div>
                ))}
              </div>
            </div> {/* تم إغلاق filter-section هنا */}
          </div> {/* تم إغلاق col-md-3 هنا */}
          
          {/* قسم عرض المنتجات */}
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
              {filteredMobiles.map((product) => (
                <div className="col" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div> {/* تم إغلاق col-md-9 هنا */}
        </div> {/* تم إغلاق row هنا */}
      </div> {/* تم إغلاق container هنا */}
    </MobilesContainer>
  );
}
export default Mobiles;

