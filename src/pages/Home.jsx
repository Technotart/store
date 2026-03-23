import { Link } from "react-router-dom";
import styled from "styled-components";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const HomeContainer = styled.main`
  .section-title {
    margin-bottom: 50px;
    font-family: almarai;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #007bff;
    background-image: url("/images/bgif.gif");
    padding: 10px 0px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    color: black;
  }
  .categories .card {
    border: 1px solid blue;
    border-radius: 10px;
    padding: 15px;
  }

  .categories .card img {
    border-radius: 10px;
    transition: all 0.5s;
  }

  .categories .card img:hover {
    transform: scale(1.05);
  }
  .categories .card .card-ti {
    border: 3px solid rgba(0, 0, 255, 0.36);
    border-radius: 10px;
    background-color: #3333335f;
    padding: 5px;
  }
  .products {
    margin-top: 70px;
  }

  .new-products {
    background-color: #eee;
    padding-top: 70px;
    padding-bottom: 70px;
    margin-top: 50px;
  }

  .ads {
    background-color: #eee;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .ad {
    border-radius: 10px !important;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .ad img {
    transition: all 0.5s;
    width: 100%;
  }

  .ad:hover img {
    transform: scale(1.1);
  }

  .ad .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: all 0.3s;
  }
  .ad .overlay:hover {
    opacity: 0;
  }
  .ad .ad-info {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 2;
    width: 100%;
  }

  .ad .ad-info h3 {
    color: white;
    font-family: almarai;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  .ad .ad-info p {
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
`;
function Home() {
  const allProducts = [
    ...products.laptops.slice(0, 4),
    ...products.mobiles.slice(0, 4),
    ...products.tablets.slice(0, 1),
    ...products.accessories.slice(0, 3),
  ];

  return (
    <HomeContainer>
      {/* Slider Section */}
      <section className="slider mt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div
                id="carousel1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel1"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel1"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carousel1"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/images/slider/slider1.png"
                      className="d-block w-100"
                      alt="1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/slider/slider2.png"
                      className="d-block w-100"
                      alt="2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/slider/slider3.png"
                      className="d-block w-100"
                      alt="3"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-4 mt-2 mt-md-0">
              <img
                src="/images/slider/slider4.png"
                className="mb-2 w-100"
                alt="4"
              />
              <img src="/images/slider/slider5.png" className="w-100" alt="5" />
            </div>
          </div>{" "}
          {/* إغلاق row السلايدر */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories mt-5">
        <h2 className="section-title">كافة التصنيفات</h2>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-6">
            {products.categories.map((category) => (
              <div className="col mb-3" key={category.id}>
                <Link to={category.link}>
                  <div className="card h-100">
                    <img
                      className="img-fluid"
                      src={category.image}
                      alt={category.name}
                    />
                    <h3 className="text-center card-ti mt-2">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2 className="section-title">أفضل المنتجات</h2>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {allProducts.map((product) => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Ads products Section */}
      <section className="ads  mt-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 gap-3 flex-md-nowrap m-2">
            {products.ads.map((ad) => (
              <div className="col ad d-flex justify-content-center overflow-hidden position-relative p-0 ">
                <div className="overlay"></div>
                <img className="img-fluid" src={ad.image} alt={ad.title} />
                <div className="ad-info">
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                  <button className="btn btn-danger btn-lg fw-bold">
                    تسوق الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* weekend products  */}
      <section className="week-products">
        <h2 className="section-title text-center mt-2">
          عروض حصرية هذا الشهر فقط! احصل على أحدث المنتجات بأفضل الأسعار 
        </h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {/* Group offers by categoryTitle */}
            {(() => {
              const categories = ['حسومات الشهر للحواسيب ', 'حسومات الشهر للهواتف الذكية', 'حسومات الشهر للتابات', 'حسومات الشهر للساعات الذكية'];
              return categories.map((catTitle, catIndex) => (
                <div className="col" key={`cat-${catIndex}`}>
                  <h4 className="mini-title">{catTitle}</h4>
                  {products.offers
                    .filter(offer => offer.categoryTitle === catTitle)
                    .map((offer) => (
                      <div className="mb-2" key={offer.id}>
                        <Link to={offer.link}>
                          <div className="product-sm d-flex align-items-center">
                            <img
                              className="img-fluid w-25"
                              src={offer.image}
                              alt={offer.title}
                            />
                            <div className="product-info">
                              <p>{offer.title}</p>
                              <p className="text-center">{offer.newPrice}</p>
                              <p className="text-center">{offer.discountText}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
    </HomeContainer>
  );
}
export default Home;
