import Link from 'next/link';

const Logo = ({ ...props }) => (
  <Link href="/">
    <a className="text-2xl" {...props}>
      SUPERSONIC
    </a>
  </Link>
);

export default Logo;
