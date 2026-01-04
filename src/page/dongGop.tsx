import ButtonCustom from "../components/custom/BtnCustom/btn"
import hoaVan from '../assets/hoaVan.png'
import Footer from "../components/layout/Footer"
const DongGop = () => {
    const handleOpenTiktok = () => {
        window.open(
            "https://www.tiktok.com/@taoanhbangaicogivui",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div>
            <div className="dongGopCtn">
                <div className="dongGopCtnImg">
                    <img src={hoaVan} alt="Anh" />
                </div>
                <div className="dongGopCtnContent">
                    <h2>Hướng dẫn đóng góp</h2>
                    <p>Chúng tôi xây dựng nền tảng này để chia sẻ giá trị thực sự đến cộng đồng.</p>
                    <p>Mỗi đóng góp của bạn là một bước tiến giúp nội dung ngày càng chất lượng hơn.</p>
                    <p>Chúng tôi tin rằng tri thức chỉ thực sự có ý nghĩa khi được lan tỏa.</p>
                    <p>Sự ủng hộ của bạn giúp dự án duy trì, phát triển và cải tiến mỗi ngày.</p>
                    <p>Cảm ơn bạn đã đồng hành và trở thành một phần của hành trình này.</p>
                    <div>
                        <ButtonCustom onClick={() => handleOpenTiktok()}>Đóng góp</ButtonCustom>
                    </div>
                </div>

            </div>
            <div><Footer /></div>
        </div>
    )
}
export default DongGop