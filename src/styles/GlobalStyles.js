import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --maincolor: rgb(235, 198, 10);
    --secondarycolor: red;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cairo', sans-serif !important;
    height: auto;
    direction: rtl;
  }

  a {
    text-decoration: none !important;
    color: black !important;
  }

  .top-header {
    background-color: var(--maincolor);
  }

  .left-header {
    margin-bottom: 15px;
  }

  .left-header a {
    margin-left: 10px;
    padding-left: 5px;
    border-left: 1px solid;
  }

  .search-icon {
    font-size: 15px;
    color: #007BFF;
    cursor: pointer;
    margin-top: 5px;
  }

  .search-icon:hover {
    color: #0056b3;
  }

  .cart-icon {
    font-size: 25px;
    color: #FF5733;
    cursor: pointer;
    margin-right: 15px;
    transition: color 0.3s ease;
  }

  .cart-icon:hover {
    color: #C70039;
  }

  .login-icon {
    font-size: 25px;
    color: #1E90FF;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .login-icon:hover {
    color: #0056b3;
  }

  .favorite-icon {
    font-size: 25px;
    color: #FF4D4D;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .favorite-icon:hover {
    color: #C70039;
  }

  span {
    font-size: 20px;
  }

  .menu-icon {
    border-radius: 3px !important;
  }

  .nav-link {
    font-weight: 600 !important;
  }

  .bottom-header {
    box-shadow: 3px 3px 3px rgb(195, 168, 168);
    margin-bottom: 10px;
  }

  .section-title {
    margin-bottom: 50px;
    font-family: 'Almarai', sans-serif;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #007BFF;
    padding: 10px 0px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .card-ti {
    border: 1px dashed rgba(0, 0, 255, 0.36);
    border-radius: 10px;
    background-color: #3333335f;
    box-shadow: 1px 1px 2px 5px #1E90FF;
  }

  .product-card {
    position: relative;
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
  }

  .compare-icon {
    font-size: 25px;
    color: #007BFF;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .compare-icon:hover {
    transform: scale(1.2);
    color: #0056b3;
  }

  footer {
    background-color: rgba(0, 0, 0, 0.668);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 50px;
    margin-top: 50px;
    border-top: 2px solid var(--secondarycolor);
  }

  .bunner {
    background-color: rgba(0, 0, 0, 0.371);
    padding-top: 75px;
    padding-bottom: 75px;
    border-bottom: 2px solid var(--secondarycolor);
  }

  .category-title {
    color: white;
    font-family: 'Almarai', sans-serif;
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

  .summary {
    background-color: #eee;
    padding: 15px;
    border-radius: 10px;
  }

  .user-info, .card-infoo {
    background-color: #eee;
    padding: 15px;
    border-radius: 10px;
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
    font-family: 'Almarai', sans-serif;
    font-weight: bold;
    font-size: 20px;
  }

  .rating-stars {
    color: #ffc107;
  }

  .rating-stars .fa-star {
    color: #ffc107;
  }

  .rating-stars .fa-star.empty {
    color: #ccc;
  }
`;

export default GlobalStyles;
