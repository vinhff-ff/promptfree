import { useState } from "react";
import Search from "../components/custom/SearchCustom/search";
import CardNormal from "../components/custom/CardNormal/cardNormal";
import { RightOutlined } from "@ant-design/icons";
import Footer from "../components/layout/Footer";
import { Empty } from "antd";
import sliderData, { type SliderItem } from "../components/custom/CardCustom/data";
import { topics } from "../components/custom/CardCustom/data";

const ImgPrompt = () => {
  const [list, setList] = useState<SliderItem[]>(sliderData);
  const [currentTopic, setCurrentTopic] = useState("");

  const handleSearch = ({
    valueSearch,
    topic
  }: {
    valueSearch: string;
    topic: string;
  }) => {
    const keyword = valueSearch.toLowerCase();
    setCurrentTopic(topic);

    const filtered = list.filter((item) => {
      const matchKeyword =
        item.name.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword);

      const matchTopic = topic ? item.topic === topic : true;

      return matchKeyword && matchTopic;
    });

    setList(filtered);
  };

  const topicLabel =
    topics.find((t) => t.value === currentTopic)?.label || "Tất cả";

  return (
    <div>
      <div className="img-prompt">


        <div className="img-prompt__header">
          <p>
            Chủ đề <RightOutlined /> <strong style={{ color: 'var(--pinkGlobal)' }}>{topicLabel}</strong>
          </p>

          <div>
            <Search topics={topics} onSearch={handleSearch} />
          </div>
        </div>

        {list.length === 0 ? (
          <div className="img-prompt__empty" style={{ padding: '50px' }}>
            <Empty />
          </div>
        ) : (
          <div className="img-prompt__list">
            {list.map((item) => (
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
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ImgPrompt;
