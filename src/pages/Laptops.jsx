
import { useState } from 'react';
import styled from 'styled-components';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const LaptopsContainer = styled.main`
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

function Laptops() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  
  const brands = ['all', 'Dell', 'HP', 'Lenovo', 'Asus', 'Apple', 'Acer', 'Razer'];
  
  const filteredLaptops = selectedBrand === 'all' 
    ? products.laptops 
    : products.laptops.filter(laptop => laptop.brand === selectedBrand);

  return (
    <LaptopsContainer>
      <section className="bunner">
        <h1 className="category-title">قسم الحواسيب المحمولة</h1>
      </section>

      <div className="container">
        <div className="row">
          {/* قسم الفلترة */}
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
            </div> {/* إغلاق filter-section */}
          </div>

          {/* قسم المنتجات */}
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
              {filteredLaptops.map((product) => (
                <div className="col" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div> {/* إغلاق col-md-9 */}
        </div> {/* إغلاق row الأساسي */}
      </div> {/* إغلاق container الأساسي */}
    </LaptopsContainer>
  );
}
export default Laptops;