import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-primary-100 ${fontStyle}`}>
      <Image
        src="/assets/images/weboraAgency.png"
        alt="Webora"
        height={100}
        width={100}
      />
    </span>
  );
};

export { Logo };
