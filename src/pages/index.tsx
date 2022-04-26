import type { NextPage } from "next";
import { usePopularQuery } from "../hooks/usePopularQuery";
import { useTrendingQuery } from "../hooks/useTrendingQuery";

const Home: NextPage = () => {
  const trendings = useTrendingQuery("all", "week");
  const populars = usePopularQuery();

  return <div>Hi</div>;
};

export default Home;
