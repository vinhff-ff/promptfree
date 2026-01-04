import ButtonCustom from "../../components/custom/BtnCustom/btn";
import Slider from "../../components/custom/CardCustom/Slider";
import CardHotData from "../../components/custom/CardCustom/data";
import CardNormal from "../../components/custom/CardNormal/cardNormal";
import { useNavigate } from "react-router-dom";
const Slide2: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="slide-2">
      <h2>PROMPT TẠO ẢNH THEO TREND MỚI NHẤT</h2>
      <div className="slide-2-desktop">
        <Slider data={CardHotData} activeSlide={2} />
      </div>
      <div className="slide-2-mobile">
        {CardHotData?.map((item) => (
          <CardNormal
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
            topic={item.topic}
            prompt={item.prompt}
          />
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <ButtonCustom onClick={() => navigate('/prompt-trending')} size="sm">Xem thêm</ButtonCustom>
      </div>
    </div>
  );
};

export default Slide2;
