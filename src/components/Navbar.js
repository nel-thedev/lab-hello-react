import Image from './Image';
import Logo from '../images/ironhack-logo-xs.png';
import Menu from '../images/menu-top-xs.png';

const Navbar = () => {
  return (
    <div>
      <nav class="nav">
        <Image source={Logo} className="nav" />
        <Image source={Menu} className="nav" />
      </nav>
    </div>
  );
};

export default Navbar;
