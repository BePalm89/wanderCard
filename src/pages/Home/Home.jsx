import './Home.css';

import {Play} from 'lucide-react';

import Text from "../../components/Text/Text.jsx";
import Button from "../../components/Button/Button.jsx";

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-page-text">
                <Text
                    text={"Travel Roulette"}
                    level={1}
                    style={{
                        fontSize: 'var(--font-size-xxl)',
                        textTransform: 'uppercase'
                    }}/>
                <Text
                    text={"Spin the globe and discover your next adventure!"}
                    level={7}
                    style={{
                        fontSize: 'var(--font-size-l)',
                    }}/>
            </div>
            <Button label={"How to play"} variant={"primary"}/>
            <div className="spin-globe">
            </div>
            <Button label={"Spin the globe"} variant={"secondary"} icon={Play} iconProps={{size: 16}}
            />
        </div>
    )
};

export default Home;
