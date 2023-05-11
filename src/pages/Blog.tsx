import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import BlogCard from "../customcomp/BlogCard";
import { Box } from "@mui/material";
import CunstomBackdrop from "../customcomp/Backdrop";

interface datafromapi {
  articles: any[];
  status: string;
  totalResults: number;
}
interface ApiRes {
  data: any;
  loading: boolean;
}
const Blog: React.FC = () => {
  const { data, loading }: ApiRes = useApi(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=17d9c39f11344786a19ea5c16693c5ea"
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: { sm: "1rem", xs: "0 " },
      }}
    >
      {loading ? <CunstomBackdrop loading={loading} /> : null}
      {data?.articles &&
        data?.articles.map((item: datafromapi, index: number) => {
          return (
            <>
              <BlogCard item={item} index={index} />
            </>
          );
        })}
    </Box>
  );
};

export default Blog;
