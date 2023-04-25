import { useSearchParams } from "react-router-dom";

export default () => {
  const [searchParams] = useSearchParams();
  const origin = searchParams.get("origin");
  if (origin) {
    localStorage.setItem("origin", searchParams.get("origin"));
  }
};
