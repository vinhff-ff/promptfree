export interface TopicItem {
  label: string;
  value: string;
}

export interface SearchProps {
  topics: TopicItem[];
  onSearch: (params: {
    valueSearch: string;
    topic: string;
  }) => void;
}
