import type { FC, ComponentProps } from "react";
import useTest from "./useTest";

interface CustomProps extends ComponentProps<"div"> {
  aa?: string;
  place?: string;
}

const Test2: FC<CustomProps> = ({ children, ...rest }) => {
  const destinations = {
    place: "파리",
    description: "에팔탑과 카페가 있는 도시",
  };
  const useXX1 = useTest(1);
  const useXX2 = useTest(2);
  console.log(destinations["place"], destinations["description"]);
  return (
    <div {...rest} /* {...destinations} */ data-place={destinations["place"]}>
      {children}
      <div>usetest1: {useXX1[0]}</div>
      <div>usetest2: {useXX2[0]}</div>
      <button onClick={() => useXX1[1]((prev: number) => prev + 1)}>
        버튼1
      </button>
      <button onClick={() => useXX2[1]((prev: number) => prev + 2)}>
        버튼2
      </button>
    </div>
  );
};

export default Test2;
