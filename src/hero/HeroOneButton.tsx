import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="px-4 text-center md:px-8">
    <h1 className="whitespace-pre-line text-3xl leading-tight text-primary-100 md:text-6xl md:leading-hero lg:text-[7rem]">
      {props.title}
    </h1>
    <div className="my-6 text-base text-primary-100 md:my-12 md:text-lg lg:text-xl">
      {props.description}
    </div>
    <div className="flex justify-center">{props.button}</div>
  </header>
);

export { HeroOneButton };
