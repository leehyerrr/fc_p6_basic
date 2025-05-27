import type { FC, PropsWithChildren, DetailedHTMLProps } from "react";

export type ReactH1Props = DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type ReactDiveProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type widthChild = FC<PropsWithChildren<ReactDiveProps>>;
