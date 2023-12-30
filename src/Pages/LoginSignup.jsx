import "./Styles/Loginsignup.css";

export default function LoginSignup() {
  return (
    <div className="loginsingup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="button">Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="terms" id="terms" required />
          <label name="terms" id="terms">
            By Continueing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
}
