import React from "react";
const Footer = () => {
    return(
        <div className="foot">
            <div className="mar">
                <ul className="block">
                    <h4>FIND A STORE</h4>
                    <h4>BECOME A MEMBER</h4>
                    <h4>SIGN UP FOR EMAIL</h4>
                    <h4>STUDENT DISCOUNT</h4>
                    <h4>SEND US FEEDBACK</h4>
                </ul>
                <ul className="getname">
                    <h4>GET HELP</h4>
                    <li>Order Status</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Payment Options</li>
                    <li>Contact Us On Nike.com Inquiries</li>
                    <li>Contact Us On All Other Inquiries</li>
                </ul>
                <ul className="about">
                    <h4>ABOUT NIKE</h4>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            <hr/>
            <ul className="last">
              <li>India</li>  
              <li>© 2021 Nike, Inc. All Rights Reserved</li>
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>New Privacy Policy</li>
            </ul>
           
        </div>
    )
}

export default Footer;