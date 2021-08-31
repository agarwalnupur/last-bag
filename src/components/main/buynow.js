import { useState } from "react";

const BuyNow = () => {
    const [qty, setQty] = useState(1);
    return(
        <div className="fullbuy">
            <div className="buy">
                <div className="btns">
                    <button>Become a Member</button>
                    <button>Login</button>
                </div>
                <div className="info">
                    <h3>Enter your name and address</h3>
                    <input type="text" placeholder="First Name"/><br/>
                    <input type="text" placeholder="Last Name"/><br/>
                    <input type="text" placeholder="Address Line 1"/><br/>
                    <input type="text" placeholder="Address Line 2"/><br/>
                    <input type="text" placeholder="Address Line 3"/><br/>
                    <input type="text" placeholder="Postal Code"/>
                    <input type="text" placeholder="Locality"/><br/>
                    <input type="text" placeholder="State/Territory"/><br/>
                    <input type="text" value="India"/><br/>
                    <h3>What's your contact information?</h3>
                    <input type="text" placeholder="Contact Number" required/> <br/>
                    <input type="email" placeholder="Email" required/><br/>
                    <input type="checkbox"></input>
                    <label htmlFor="terms"> I accept to the terms and conditions of agreement</label>
                    <h3>Payment</h3>
                    <p style={{padding: "10px 0"}}>ONLY CASH ON DELIVERY(COD) AVAILABLE</p>
                    <button className="placeorder"  style={{backgroundColor:"black", color:"white"}}>PLACE ORDER</button>
                </div>
            </div>
            <div className="ordersum">
                <div>
                    <ul>
                        <h3>Order Summary</h3>
                        <div>
                            <h4>Quantity</h4>
                            <input type="number" defaultValue="1" min="1" onChange={(e) => { setQty(e.target.value)}}></input>
                        </div>
                        
                        <div className="fin">
                            <li>Subtotal</li>
                            <li>₹{qty*2495.00}</li>
                        </div>
                        <div className="fin">
                            <li>Delivery/Shipping </li>
                            <li>₹750</li>
                        </div>
                        <div className="fin">
                            <li>Total</li>
                            <li>₹{qty*2495.00+750.00}</li>
                        </div>
                    
                    </ul>
                    <div className="bagimg">
                        <h4 style={{marginTop:"20px"}}> Arrives Sun,12 Sep - Mon, 27 Sep</h4>
                        <div className="lastflex">
                            <img src="https://secure-images.nike.com/is/image/DotCom/BA5954_410?v=b2799a48b91dc12eff18976d19ec584e" alt="bag7"/>
                            <ul>
                                <li>Nike Brasilia Training Backpack</li>
                                <li>(Medium)</li>
                                <li>Qty {qty}</li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
    )
}
export default BuyNow; 