import axiosInstance from "./axios";

export const searchImage = async (params: {
  keyword: string;
  topic: string;
}) => {
  const res = await axiosInstance.get("/api/search/image", {
    params
  });
  return res;
};
