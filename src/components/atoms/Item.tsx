import Link from 'next/link';

const Item = ({ href, text, ...props }) => (
  <Link href={href}>
    <a>{text}</a>
  </Link>
);

export default Item;
