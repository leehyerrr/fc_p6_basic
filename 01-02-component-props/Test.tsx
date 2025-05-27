import type { FC, ComponentProps } from "react";
import Test2 from "./Test2";
import Button from "./Button";

// interface CustomProps extends React.HTMLAttributes<HTMLDivElement> {
//   aa?: string;
// }

interface CustomProps extends ComponentProps<"div"> {
  aa?: string;
}

const Test: FC<CustomProps> = ({ aa, style, children, ...rest }) => {
  console.log("Test", aa, style, children, rest);
  return (
    <div style={style} /*  onClick={onClick} */>
      TEst
      <p>{children}</p>
      <b>{aa}</b>
      <button>aaa</button>
      <Test2 {...rest}>ddd</Test2>
      <Button>ddd</Button>
    </div>
  );
};

export default Test;
