import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

import Image from './Image';

const Icons = () => {
  return (
    <div className="iconsRow">
      <div>
        <Image source={icon1} specificClass="iconImages" />
        <h2>Declarative</h2>
        <p>text text</p>
      </div>
      <div>
        <Image source={icon2} specificClass="iconImages" />
        <h2>Components</h2>
        <p>text text</p>
      </div>
      <div>
        <Image source={icon3} specificClass="iconImages" />
        <h2>Single-way</h2>
        <p>text text</p>
      </div>
      <div>
        <Image source={icon4} specificClass="iconImages" />
        <h2>JSX</h2>
        <p>text text</p>
      </div>
    </div>
  );
};

export default Icons;
