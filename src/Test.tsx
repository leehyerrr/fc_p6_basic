import type { FC } from "react";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type CustomProps = {
  aa?: string;
  onClick?: () => void;
};

type xx = React.PropsWithChildren<DivProps & CustomProps>;

// const Test: FC<xx> = (...props) => {
//   console.log(props);
//   return (
//     <div style={props[0]["style"]} onClick={props[0]["onClick"]}>
//       TEst
//     </div>
//   );
// };

const Test: FC<xx> = ({ style, onClick }) => {
  return (
    <div style={style} onClick={onClick}>
      TEst
    </div>
  );
};

export default Test;
