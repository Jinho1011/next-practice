import { usePopularQuery } from "../../hooks/usePopularQuery";

const Popular = () => {
  const populars = usePopularQuery();

  return <div>Popular</div>;
};

export default Popular;
