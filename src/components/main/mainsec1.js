import { Link } from 'react-router-dom';


const MainSec1 = () => {
  
    return(
        <div className="mainsec">
            <div className="row1">
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cyvqpzwb3web8gf1ytaz/brasilia-training-backpack-5ptm3R.png" alt="bag1" />
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/rprmdmxbhevhp0nzvb2t/brasilia-training-backpack-5ptm3R.png" alt="bag2" />
                <div className="rtsec1">
                    <p>
                       <div id="line1">Training Backpack<br/></div>
                       <div id="line2">
                        <div id="#med">(Medium)</div>
                            <span id="amt">₹2,495</span>
                        </div> 
                        
                        <h3>Nike Brasilia</h3>
                    </p>
                    {/* <Router> */}
                    
                        <Link to='/buynow' >
                         
                            <button type="button" className="btn1">Buy Now</button>
                            
                        </Link>
                    <button className="btn2">Add To Cart</button>
                </div>
            </div>
            

        </div>
    )
}

export default MainSec1; 