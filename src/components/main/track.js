import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import HomeIcon from '@material-ui/icons/Home';


const Track = () => {
    return(
        <div className="trackord">
            <div className="track">
                <div>
                    <ShoppingCartIcon fontSize="large"/>
                        <p>Order Confirmed</p>
                </div>
                <hr className="bluehr"/>
                <div>
                    <SettingsIcon fontSize="large"/>
                    <p>Processing Order</p>
                </div>
                <hr className="grayhr"/>
                <div>
                    <LocalTaxiIcon fontSize="large"/>
                    <p>Dispatched</p>
                </div>
                <hr className="grayhr"/>

                <div>
                    <HomeIcon fontSize="large"/>
                    <p>Delivered</p>
                </div>


            </div>
            <div className="pdtdet">
                <img src="https://images.nike.com/is/image/DotCom/BA5954_410_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg" alt="bag8"></img>

                <div>
                    <h3>Product Details</h3>
                    <p>Training Backpack (Medium)</p>
                    <p>Midnight Navy</p>
                
                </div>
                
            </div>
        </div>
        
    )
}
export default Track;