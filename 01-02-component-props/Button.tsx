import type { FC, ComponentProps } from "react";
import Test2 from "./Test2";

// interface CustomProps extends React.HTMLAttributes<HTMLDivElement> {
//   aa?: string;
// }

interface CustomProps extends ComponentProps<"button"> {
  aa?: string | { place: string; description: string };
}

const Button: FC<CustomProps> = ({ aa, children, ...rest }) => {
  return (
    <button>
      {children}
      {typeof aa === "string" && <span>{aa}</span>}
      {typeof aa === "object" && aa && <span>{aa.toString()}</span>}
    </button>
  );
};

export default Button;
