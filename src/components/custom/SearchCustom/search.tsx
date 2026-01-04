import { useState, useRef, useMemo } from "react";
import type { SearchProps } from "./interface";
import { SearchOutlined } from "@ant-design/icons";

const Search = ({ topics, onSearch }: SearchProps) => {
  const [valueSearch, setValueSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestTopics = useMemo(() => {
    if (!valueSearch.trim()) return [];
    return topics.filter(item =>
      item.label.toLowerCase().includes(valueSearch.toLowerCase())
    );
  }, [valueSearch, topics]);

  const handleSearch = () => {
    onSearch({ valueSearch, topic });
    setShowSuggest(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValueSearch(val);
    setTopic("");

    const hasSuggest = topics.some(item =>
      item.label.toLowerCase().includes(val.toLowerCase())
    );

    setShowSuggest(hasSuggest);
  };

  const handleFocus = () => {
    if (suggestTopics.length) {
      setShowSuggest(true);
    }
  };

  const handleSelect = (item: { label: string; value: string }) => {
    setValueSearch(item.label);
    setTopic(item.value);
    setShowSuggest(false);
  };

  return (
    <div className="pill-search" ref={wrapperRef}>
      <div className="pill-search__box">

        <div className="pill-search__input">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={valueSearch}
            onFocus={handleFocus}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchOutlined className="pill-search__icon" onClick={()=> handleSearch()}/>
        </div>


        <div
          className={`pill-search__suggest ${showSuggest && suggestTopics.length ? "is-visible" : ""
            }`}
        >
          {suggestTopics.map(item => (
            <div
              key={item.value}
              className="pill-search__item"
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
