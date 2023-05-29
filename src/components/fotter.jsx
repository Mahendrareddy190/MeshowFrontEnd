import React from "react";
import "../css/footer.css";
const fotter = () => {
  return (
    <div className="container-fluid fotter">
      <div className="fotter-content">
        <div>
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default fotter;
