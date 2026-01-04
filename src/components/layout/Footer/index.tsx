import Logo from '../../../assets/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-section">
          <div className="footer__logo-wrapper">
            <img src={Logo} alt="Logo khosongao.com" />
            <span>GỐC ẢNH</span>
          </div>
          <div className='footer__content-wrapper'>
            <p className="footer__description">
              Gốc Ảnh là nền tảng sáng tạo hình ảnh bằng AI, cho phép bạn tạo, chỉnh sửa và ghép ảnh chỉ với một câu lệnh đơn giản. Hệ thống hỗ trợ nhiều phong cách hình ảnh, liên tục cập nhật theo xu hướng mới, giúp cá nhân hóa nội dung nhanh chóng mà không cần kỹ năng thiết kế chuyên sâu
            </p>
            <div className="footer__websites">
              <h2>Các website của chúng tôi</h2>
              <div className="footer__website-list">
                <a
                  href="https://giasusupham1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__website-link"
                >
                  giasusupham1.com
                </a>
                <a
                  href="https://vnews.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__website-link"
                >
                  vnews.vercel.app
                </a>
                <a
                  href="https://ducvincfk200.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__website-link"
                >
                  ducvincfk200.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__divider"></div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} khosongao.com. Tất cả các quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;