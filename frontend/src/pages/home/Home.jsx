import './Home.css';
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu';
import FoodDisplay from '../../components/fooddisplay/FoodDisplay';


const Home = () => {
    return (
        <div className="home" id='home'>
            <Header />
            <ExploreMenu />
            <FoodDisplay/>
        </div>
    );
}

export default Home;
