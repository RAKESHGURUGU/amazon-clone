import "./Header.css";
import amazonLogo from "./assets/amazonLogo.png";
import locationlogo from "./assets/icons8-location-50.png";
import cartlogo from "./assets/icons8-cart-60.png";
import searchlogo from "./assets/icons8-search-50.png";

function Header() {
    return (
        <>
            <section id="header">
                <img src={amazonLogo} alt="amazon.in" height="80px" width="200px" id="logo" />
                <div id="location">
                    <img src={locationlogo} alt="location" height="40px" weight="40px" id="locationlogo" />
                    <div>
                        <p>Delivering to vizag 500029</p>
                        <h4>Update location</h4>
                    </div>
                </div>
                <div id="search-bar">
                    <select name="cat" id="cat">
                        <option value="All">All</option>
                        <option value="categories">All</option>
                    </select>
                    <input type="text" id="search" placeholder="Search Amazon.in"/>
                    <img src={searchlogo} alt="search"  id="search-icon"/>
                </div>
                <div id="returns-orders">
                    <p>Hello, sign in</p>
                    <h3>Account & Lists</h3>
                </div>
                <div id="returns-orders">
                    <p>Returns</p>
                    <h3>&Orders</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                    <img src={cartlogo} alt="cart" />
                    <h4>Cart</h4>
                </div>
            </section>
        </>
    )
}

export default Header;