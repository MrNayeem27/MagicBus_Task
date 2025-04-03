import React from 'react';
import './Login.css';


function Login() {
  return (
    <div className="login-page">
      <div className="image-section">
        <img src="https://media-hosting.imagekit.io/ae8b3f8abb3c4ad0/ChatGPT_Image_Apr_2__2025__10_41_27_PM-removebg-preview.png?Expires=1838223282&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nZz-lNbmD3CJ5TyG52cpUY0jiNhNa4n9nRJGUUfLEo1H5~HODonR21qqpnGSQlUDwcwY7Dqn31hPImRgInJ~Z0pgSr9y-Cl~f9rTxG3~iy3jZy5jjP-3BAiJSgNfDDyd1AnWQbY4OfaiUDetlx8psPN09JXCGf3xmuOTnPMBsz9crYFzoqwgbbIaASPXp~Hay4Akr~yeef7Geqzme9-2ESVjWWiGyTOvCDvH5CLzuppK~22ClMqUvIOMUg8AIidj6sVtbOse-RlByWaEZBxyqSqYdiY7HHf7Q2ZPzWUOYqGFK7EbaamtnUfCdjrHhsgCsafwrcjPseuSln-x92x~Lg__" 
        alt="Instagram app examples" 
        className="login-phones-img"/>
      </div>

      <div className="form-section">
        <div className="login-box">
          <h1 className="logo">Instagram</h1>
          <form className="login-form" action="" method="post">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Phone number, username, or email"
              required/>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="login-button">Log in</button>
          </form>

          <div className="separator">
            <div className="line"></div>
            <div className="or-text">OR</div>
            <div className="line"></div>
          </div>

          <div className="facebook-login">
            <a href="#">
              <span className="facebook-icon"></span>
              Log in with Facebook
            </a>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div className="signup-box">
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>

      </div>


       <footer className="login-footer">
         <div className="footer-links">
            <a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Threads</a>
            <a href="#">Contact Uploading & Non-Users</a>
            <a href="#">Meta Verified</a>
         </div>
         <div className="footer-copyright">
            <select aria-label="Switch Display Language" className="language-select">
                 <option value="en">English</option>
                 <option value="es">Tamil</option>
             </select>
             <span>© 2024 Instagram from Meta</span>
         </div>
       </footer>

    </div>
  );
}

export default Login;