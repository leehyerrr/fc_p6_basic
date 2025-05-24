import type { widthChild } from "./type";

// type ReactH1Props = DetailedHTMLProps<
//   React.HTMLAttributes<HTMLHeadingElement>,
//   HTMLHeadingElement
// >;

// const Container: FC<PropsWithChildren<ReactH1Props>> = ({
//   children,
//   style,
// }) => {
//   return <h1 style={style}>{children}</h1>;
// };

const Container: widthChild = ({ children, style }) => {
  return <h1 style={style}>{children}</h1>;
};

export default Container;
