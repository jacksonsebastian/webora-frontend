import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  className?: string;
  backgroundImage?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`${props.color} ${props.className}`}
    style={{
      backgroundImage: `url(${props.backgroundImage})`,
    }}
  >
    {props.children}
  </div>
);

export { Background };
