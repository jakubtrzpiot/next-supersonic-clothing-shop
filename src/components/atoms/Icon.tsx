import Image from 'next/image';

const Icon = ({ name, ...props }) => (
  <div {...props}>
    <Image
      className="cursor-pointer"
      src={`/assets/icons/${name}.svg`}
      alt={name}
      width={24}
      height={24}
    />
  </div>
);

export default Icon;
