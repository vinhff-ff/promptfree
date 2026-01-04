import { CardMainData, CardHotData } from "../../components/custom/CardCustom/data";
import CardNormal from "../../components/custom/CardNormal/cardNormal";
import Footer from "../../components/layout/Footer";
import CardMain from "./cardMain";

const Trending = () => {

    return (
        <div>
            <div className="ctnTrend">
                <div className="cardMainTrend">
                    <CardMain {...CardMainData} />
                </div>

                {CardHotData.map((item) => (
                    <div className="cardNormalItem" key={item.id}>
                        <CardNormal {...item} />
                    </div>
                ))}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Trending