import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return(
        <div className="fullhead">
            <header className="header">
                
                <img src="https://static.highsnobiety.com/thumbor/r873PoeCzXqaIcuKDegl8f1dcsw=/1200x720/static.highsnobiety.com/wp-content/uploads/2012/08/06171822/replacement-logos-feature.jpg" alt="nike"></img>
                <div className="opt">
                    <ul className="inopt">
                        <li>Men </li>
                        <li>Women </li>
                        <li>Kids </li>
                        <li>Customise</li>
                        <li>Sale</li>
                    </ul>
                </div>
                    <div className="search">

                        <SearchIcon fontSize="large" />
                        <input type="text" placeholder="Search" ></input>
                        <ShoppingCartIcon fontSize="large"/>
                        {/* <Link to='/cart'><ShoppingCartIcon fontSize="large"/></Link>  */}
                        <li className="orders"><Link to='/trackorder' className="orders">Orders</Link></li>


                    </div>
                    
            </header>
        </div>
    )
}

export default NavBar;