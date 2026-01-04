import { CheckCircleFilled } from "@ant-design/icons";
import imgMain from "../../assets/imgMain.jpg";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../../components/custom/BtnCustom/btn";
const Slide1 = () => {
    const navigate = useNavigate();
    return (
        <div className="slide-1">
            <div className="slide-1__content">
                <h1>
                    <b>Gốc Ảnh</b> kết nối con người với AI
                </h1>

                <p><CheckCircleFilled style={{ color: 'var(--pinkGlobal)' }} /> khosongao.com là nền tảng sáng tạo hình ảnh bằng AI</p>
                <p><CheckCircleFilled style={{ color: 'var(--pinkGlobal)' }} /> Tạo, chỉnh sửa và ghép ảnh chỉ với một câu lệnh đơn giản</p>
                <p><CheckCircleFilled style={{ color: 'var(--pinkGlobal)' }} /> Prompt luôn được cập nhật theo xu hướng mới nhất</p>
                <p><CheckCircleFilled style={{ color: 'var(--pinkGlobal)' }} /> Cá nhân hóa theo khuôn mặt, phong cách và nhu cầu riêng</p>

                <div style={{marginTop:'45px'}} >
                    <ButtonCustom size="md" onClick={() => navigate('/prompt-sua-anh')}>Tạo ảnh</ButtonCustom>
                </div>
            </div>
            <div className="slide-1__image">
                <img src={imgMain} alt="AI Image Creation Platform" />
            </div>
        </div>
    )
}

export default Slide1;