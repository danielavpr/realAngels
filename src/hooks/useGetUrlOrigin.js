import { useSearchParams } from "react-router-dom";

const useGetUrlOrigin = () => {
  const [searchParams] = useSearchParams();
  const origin = searchParams.get("origin");
  if (origin) {
    localStorage.setItem("origin", searchParams.get("origin"));
  }
};

export default useGetUrlOrigin;
