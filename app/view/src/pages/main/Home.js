import Category from "../../components/main/Home/Category"
import Banner from "../../components/main/Home/Banner";
import './Home.css';
import MenuItem from "../../components/main/Home/Menu";

const Home = props => {


    return <div className='w-100'>
        <div>
            <Banner />
        </div>
        <div className='row p-5'>
            <div className='col-12 col-lg-3'>
                <Category />
            </div>

            <div className='col-12 col-lg-9'>
                <MenuItem />
            </div>
           
        </div>

    </div>

}

export default Home;