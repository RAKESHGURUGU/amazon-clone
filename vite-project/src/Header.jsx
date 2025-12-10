import "./Header.css";
import amazonLogo from "./assets/amazonLogo.png";
import locationlogo from "./assets/icons8-location-50.png";
import cartlogo from "./assets/icons8-cart-60.png";

function Header() {
    return (
        <>
            <div id="header">
                <img src={amazonLogo} alt="amazon.in" height="100px" weight="300px" id="logo" />
                <div id="location">
                    <img src={locationlogo} alt="location" height="40px" weight="40px" id="locationlogo" />
                    <div>
                        <p>Delivering to vizag 500029</p>
                        <h4>Update location</h4>
                    </div>
                </div>
                <div id="returns-orders">
                    <p>Returns</p>
                    <h3>&Orders</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                    <img src={cartlogo} alt="cart" />
                    <h4>Cart</h4>
                </div>
            </div>
        </>
    )
}

export default Header;