import React from 'react';
import './Signup.css';


const googlePlayUrl = 'https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png';
const microsoftStoreUrl = 'https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png';

function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">

        {/* --- Main Signup Box --- */}
        <div className="signup-box">
          <h1 className="logo">Instagram</h1>
          <h2 className="description-text">
            Sign up to see photos and videos from your friends.
          </h2>

          <button className="facebook-login-btn">
             <span className="facebook-icon"></span>
            Log in with Facebook
          </button>

          <div className="separator">
            <div className="line"></div>
            <div className="or-text">OR</div>
            <div className="line"></div>
          </div>

          <form className="signup-form" action="" method="post">
            <input type="text" name="emailOrMobile" placeholder="Mobile Number or Email" required />
            <input type="text" name="fullName" placeholder="Full Name" required />
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />

             <p className="info-text">
                 People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a>
             </p>
             <p className="policy-text">
                 By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
             </p>

            <button type="submit" className="signup-btn">Sign up</button>
          </form>
        </div>

        {/* --- Login Prompt Box --- */}
        <div className="login-prompt-box">
          <p>Have an account? <a href="#">Log in</a></p>
        </div>

        
        <div className="get-app-section">
          <p>Get the app.</p>
          <div className="app-stores">
            <a href="#" aria-label="Get it on Google Play">
              <img src={googlePlayUrl} alt="Get it on Google Play" />
            </a>
            <a href="#" aria-label="Get it from Microsoft">
              <img src={microsoftStoreUrl} alt="Get it from Microsoft" />
            </a>
          </div>
        </div>

      </div>

      {/* --- Footer --- */}
      <footer className="signup-footer">
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
             </select>
             <span>© 2024 Instagram from Meta</span>
         </div>
       </footer>

    </div>
  );
}

export default Signup;