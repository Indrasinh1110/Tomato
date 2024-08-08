import './Header.css'
const Header = () => {
    return (
        <div className="headerpage">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Delicious Food Delivered To Your Doorstep</h1>
                    <p>Experience the finest culinary delights from the comfort of your home.
                    Our fast and reliable delivery service ensures your favorite meals arrive hot and fresh.
                    </p>
                    <button className='view-menu'>View Menu</button>
                </div>
            </header>
        </div>
    )
}

export default Header