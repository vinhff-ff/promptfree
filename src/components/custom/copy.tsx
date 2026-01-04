import type { ReactNode } from "react";
import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

interface CopyTextProps {
    value: string;
    children: ReactNode;
}

const CopyText = ({ value, children }: CopyTextProps) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);

            notification.success({
                message: "Sao chép thành công",
                description: "Nội dung đã được sao chép",
                icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
                placement: "topRight",
                duration: 1.5
            });
        } catch (err) {
            notification.error({
                message: "Sao chép thất bại",
                description: "Không thể sao chép nội dung",
                icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
                placement: "topRight",
                duration: 2
            });
        }
    };

    return (
        <span
            onClick={handleCopy}
            style={{ cursor: "pointer" }}
        >
            {children}
        </span>
    );
};

export default CopyText;
