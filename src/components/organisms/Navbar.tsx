import Logo from '../atoms/Logo';
import Item from '../atoms/Item';
import Icon from '../atoms/Icon';

const items = [
  { href: '/', text: 'HOME' },
  { href: '/new', text: 'NEW' },
  { href: '/shop', text: 'SHOP' },
  { href: '/about', text: 'ABOUT' },
];

const Navbar = () => {
  return (
    <nav className="grid grid-cols-6 lg:grid-cols-12 h-20 items-center">
      <Logo />
      <div className="flex lg:col-start-4 gap-20">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>

      <div className="flex col-start-12 justify-end gap-4">
        <Icon name="cart" />
        <Icon name="stash" />
      </div>
    </nav>
  );
};
export default Navbar;
