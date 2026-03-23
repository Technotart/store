import { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.main`
  .cont1 {
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
    margin: 50px auto;
  }

  .input-group {
    margin-bottom: 15px;
    text-align: right;
  }

  .input-group label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .bton {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }

  .bton:hover {
    background-color: #0056b3;
  }

  .login-link {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
  }

  .login-link a {
    color: #007bff;
    text-decoration: none;
  }

  .login-link a:hover {
    text-decoration: underline;
  }
`;

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    alert(isLogin ? 'تم تسجيل الدخول بنجاح!' : 'تم إنشاء الحساب بنجاح!');
  };

  return (
    <RegisterContainer>
      <div className="container cont1">
        <h2>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="username">اسم المستخدم:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="أدخل اسم المستخدم" 
                value={formData.username}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">البريد الإلكتروني:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="أدخل بريدك الإلكتروني" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">كلمة المرور:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="أدخل كلمة المرور" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label htmlFor="confirmPassword">تأكيد كلمة المرور:</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                placeholder="أعد كتابة كلمة المرور" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <button type="submit" className="bton">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب'}
          </button>
        </form>

        <div className="login-link">
          {isLogin ? (
            <>
              ليس لديك حساب؟{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
                إنشاء حساب جديد
              </a>
            </>
          ) : (
            <>
              لديك حساب بالفعل؟{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>
                تسجيل الدخول
              </a>
            </>
          )}
        </div>
      </div> 
    </RegisterContainer>
  );
}

export default Register;