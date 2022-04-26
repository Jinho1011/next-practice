import { useTrendingQuery } from "../../hooks/useTrendingQuery";

const Trending = () => {
  const trendings = useTrendingQuery("all", "week");

  return <div>Trending</div>;
};

export default Trending;
