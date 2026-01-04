import { CopyOutlined } from "@ant-design/icons";
import CopyText from "../copy";
import LinkNavigate from "../link";
import { useDrawer } from "../Drawer/context";
import ButtonCustom from "../BtnCustom/btn";

const CardNormal = ({ id, img, name, description, topic, prompt }: any) => {
  const { openDrawer } = useDrawer();

  const handleOpenDetail = () => {
    openDrawer(
      <div className="prompt-card">
        <img
          src={img}
          alt={name}
          className="prompt-image"
        />

        <div className="prompt-content">

          <div className="topic-card-normal-drawer">{topic}</div>
          <div className="topic">{name}</div>
          <p className="description">{description}</p>
          <div className="prompt-text">{prompt}</div>

          <CopyText value={prompt}>
            <ButtonCustom size="sm">
              <CopyOutlined /> Sao chép prompt
            </ButtonCustom>
          </CopyText>
        </div>
      </div>
      ,
      'Chi tiết'
    );
  };

  return (
    <div className="card-normal" data-id={id}>
      <div className="card-normal__image">
        <img src={img} alt={name} />
      </div>

      <div className="card-normal__content">
        <span className="card-normal__topic">{topic}</span>
        <h3 className="card-normal__name">{name}</h3>
        <p className="card-normal__description">{description}</p>

        <div className="footer-card">
          <p className="copy-card">
            <CopyText value={prompt}>
              <p><CopyOutlined /> Sao chép</p>
            </CopyText>
          </p>

          <p className="linkChiTiet" onClick={handleOpenDetail}>
            <LinkNavigate content='Chi tiết' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNormal;
