import Banner from "../../components/common/Slider";
import './Home.css';
import MenuItem from "../../components/main/Home/Menu";

const Home = props => {


    return <div className='w-100'>
        <div>
            <Banner title="My Shop"/>
        </div>
        <div className='p-5' id='readmore'>
            <div className='col-12 col-lg-12'>
                <MenuItem />
            </div>
           
        </div>

    </div>

}

export default Home;