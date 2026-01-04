import React from "react";
import { Drawer, Grid } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

interface CustomDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  onClose,
  title,
  children
}) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Drawer
      title={title}
      open={open}
      onClose={onClose}
      width={isMobile ? "100%" : "50%"}
      placement="right"
      bodyStyle={{ padding: 0 }}
      headerStyle={{
        background: "#16213e",
        color: "#fff",
        borderBottom: "none"
      }}
      closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
