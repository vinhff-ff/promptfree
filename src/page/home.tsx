import Footer from "../components/layout/Footer";
import Slide1 from "./TrangChu/slide1";
import Slide2 from "./TrangChu/slide2";
import Slide3 from "./TrangChu/slide3";

const Home = () => {
    return (
        <div>
            <div>
                <Slide1 />
            </div>
            <div>
                <Slide2 />
            </div>
            <div>
                <Slide3 />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;
