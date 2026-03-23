import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from '../store/cartSlice';

const ProductCardContainer = styled.div`
  .product-card {
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }

  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  .quick-icons {
    position: absolute;
    background-color: transparent;
    border: 1px solid #ccc;
    top: 15px;
    right: 0px;
    background-color: rgba(181, 180, 171, 0.4);
    height: 150px;
    width: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s;
    z-index: 10;
    display:none;

  }
  .product-card:hover .quick-icons {
    right: 0;
    display:flex;
  }
  .quick-icons i {
    font-size: 18px;
    cursor: pointer;
    color: #007BFF;
    transition: all 0.3s;
  }

  .quick-icons i:hover {
    color: #0056b3;
    transform: scale(1.2);
  }

  .favorite-icon {
    color: #FF4D4D !important;
  }

  .rating i {
    color: #ffc107;
  }

  .product-img {
    height: 250px;
    object-fit: cover;
    transition: all 0.3s;
  }

`;

function ProductCard({ product, showQuickView = true }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // نصيحة: استبدل alert بـ Toast لتجربة مستخدم أفضل
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`star-icon ${i <= rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}`}
          style={{ fontSize: '16px', marginRight: '2px' }}
          title={`${rating}/5 stars`}
        />
      );
    }
    return <>{stars}</>;
  };
  return (
    <ProductCardContainer>
      <div className="card product-card h-100">
        {showQuickView && (
          <div className="quick-icons">
            <a href={`#product-modal-${product.id}`} data-bs-toggle="modal">
              <i className="fas fa-search search-icon mx-2 mb-3"></i>
            </a>
            <a href=""><i className="fas fa-heart favorite-icon"></i></a>
            <a href=""><i className="fas fa-code-compare compare-icon"></i></a>
          </div>
        )}
        <img src={product.image} className="card-img-top product-img" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <div className="rating mb-2 d-flex">
            {renderStars(product.rating)}
          </div>
          <p className="card-text text-primary fw-bold">{product.price} دولار</p>
          <button className="btn btn-danger w-100" onClick={handleAddToCart}>
            إضافة إلى السلة
          </button>
        </div> {/* <--- تم إغلاق card-body هنا */}
      </div> {/* <--- تم إغلاق card product-card هنا */}
    </ProductCardContainer>
  );
}

export default ProductCard;