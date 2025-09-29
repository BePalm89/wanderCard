import './Logo.css';

const Logo = () => {
    return (
        <div className="simple-flex">
            <div className="logo-container">
                <img src="/logo/logo.png" alt="logo" />
            </div>
            <p className="logo-text">WanderCard</p>
        </div>
    )
};

export default Logo;
