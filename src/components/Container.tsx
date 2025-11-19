import type { FC, HTMLAttributes, ReactNode } from "react";

type ContainerPropType = {
  className: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container: FC<ContainerPropType> = ({
  className = "text-blue-100",
  children,
  ...rest
}: ContainerPropType) => {
  return (
    <div className={`container mx ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
