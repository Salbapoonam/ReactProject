// import React from 'react';
// import logo from '../assets/logo.png';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src={logo} alt="Temple Logo" />
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Temple Logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
