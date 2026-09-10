import "./home.css";
import giftImage from "../../../assets/download.jpg"; // Renamed for clarity

export function Home() {
    return (
        <div className="Home">
            <h1>Welcome to Gift Shop</h1>
            <p className="subtitle">Find the perfect gift for every recipient and special occasion.</p>

            <div className="hero-section">
                <h2>Browse & Discover</h2>
                <p>
                    Explore our curated collection of items organized by audience. Select a category to start
                    browsing or add new items directly to our inventory.
                </p>

                {/* Rendered the imported image here */}
                <img src={giftImage} alt="Gift shop showcase" />
            </div>
        </div>
    );
}