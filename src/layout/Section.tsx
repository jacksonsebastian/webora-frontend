import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
};

const Section = (props: ISectionProps) => (
  <div
    className={`${props?.className ? props?.className : ''} mx-auto max-w-screen-xl px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div
        className={`${props?.titleClassName ? props?.titleClassName : 'mb-12'} text-center`}
      >
        {props.title && (
          <h2 className="text-4xl font-bold text-primary-100">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl text-primary-500 md:px-64">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
