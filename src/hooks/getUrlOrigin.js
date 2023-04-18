import { useSearchParams } from "react-router-dom";

export default () => {
  const [searchParams] = useSearchParams();
  localStorage.setItem("origin", searchParams.get("origin"));
};
