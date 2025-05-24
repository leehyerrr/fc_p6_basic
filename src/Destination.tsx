import type {
  FC,
  DetailedHTMLProps,
  PropsWithChildren,
  HTMLAttributes,
} from "react";
import type { ReactDiveProps } from "./type";

// type ReactDiveProps = DetailedHTMLProps<
//   React.HTMLAttributes<HTMLDivElement>,
//   HTMLDivElement
// >;

// type DestinationProps = ReactDiveProps & {
//   place?: string;
//   description?: string;
// };

// export interface DestinationProps extends ReactDiveProps {
//   place?: string;
//   description?: string;
// }
type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

// 커스텀 props 정의
type CustomProps = {
  place?: string;
  description?: string;
};

type DestinationProps = PropsWithChildren<ReactDiveProps & CustomProps>;

//case1 (기본값 있을때).
// const Destination: FC<DestinationProps> = ({
//   place = "서울",
//   description = "남산타워 와 한강이 있는 도시",
//   style,
// }) => {
//   return (
//     <div style={style}>
//       <h2>{place}</h2>
//       <p>{description}</p>
//     </div>
//   );
// };

//case1-2 (기본값 없음).
// const Destination: FC<DestinationProps> = ({ place, description, style }) => {
//   return (
//     <div style={style}>
//       <h2>{place}</h2>
//       <p>{description}</p>
//     </div>
//   );
// };

//case2 (ts).
// const Destination = ({
//   place = "서울",
//   description = "남산타워 와 한강이 있는 도시",
//   style,
// }: DestinationProps) => {
//   return (
//     <div style={style}>
//       <h2>{place}</h2>
//       <p>{description}</p>
//     </div>
//   );
// };

//case2 (ts).
const Destination: FC<DestinationProps> = ({
  place = "서울",
  description = "남산타워 와 한강이 있는 도시",
  style,
  children,
}) => {
  return (
    <div style={style}>
      <h2>{place}</h2>
      <p>{description}</p>
      <p>{children}</p>
    </div>
  );
};

export default Destination;
