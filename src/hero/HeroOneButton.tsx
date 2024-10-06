import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-[7rem] leading-hero text-primary-100">
      {props.title}
    </h1>
    <div className="my-12 text-lg text-primary-100">{props.description}</div>
    {props.button}
  </header>
);

export { HeroOneButton };
