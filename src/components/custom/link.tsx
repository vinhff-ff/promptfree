import { CaretRightFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface LinkNavigateProps {
    content: string;
}

const LinkNavigate = ({ content}: LinkNavigateProps) => {

    return (
        <p className="linkCustom"
        >
            <CaretRightFilled /> {content}
        </p>
    );
};

export default LinkNavigate;
