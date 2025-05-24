import type { FC } from "react";

interface CustomProps extends React.HTMLAttributes<HTMLDivElement> {
  aa?: string;
}

const Test: FC<CustomProps> = ({ style, onClick, children }) => {
  return (
    <div style={style} onClick={onClick}>
      TEst
      <p>{children}</p>
    </div>
  );
};

export default Test;
