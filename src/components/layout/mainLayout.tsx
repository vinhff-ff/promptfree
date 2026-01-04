import { useState, useEffect } from "react";
import { Layout } from "antd";
import MenuCustom from "../custom/menu";
import type { AppRoute } from "../../router/router";
import BackgroundBeams from "../custom/background";
import Logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
  menu: AppRoute[];
}

const MainLayout = ({ children, menu }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout className="layout-main">
      <BackgroundBeams/>
      <Header className={`layout-main__header ${scrolled ? "scrolled" : ""}`}>
        <div className="layout-main__logo">
          <img src={Logo} alt="logo" onClick={()=> navigate('/')}/>
        </div>
        <MenuCustom menu={menu} />
      </Header>

      <Content className="layout-main__content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
