import type { FC } from "react";

type TextCardPropType = {
  heading: string;
  description: string;
  icon: React.ReactNode;
};

const TextCard: FC<TextCardPropType> = ({
  heading,
  description,
  icon,
}: TextCardPropType) => {
  return (
    <div className="border-2 border-stone-600 p-5">
      <div className="icon-wrapper">{icon}</div>
      <h1 className="text-stone-600 text-2xl font-bold">{heading}</h1>
      <p className="text-stone-500">{description}</p>
    </div>
  );
};

export default TextCard;
