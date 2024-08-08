import { assets } from "../../assets/assets";
import './AppDownload.css';

const AppDownload = () => {
    return (
        <div className="app-download" id='app-download'>
            <h2>For Better Experience Get Tomato App</h2>
            <div className="store-logos">
                <img src={assets.play_store} alt="playstore" />
                <img src={assets.app_store} alt="apple store" />
            </div>
        </div>
    );
}

export default AppDownload;
