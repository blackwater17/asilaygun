import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="bottom-header">
      <ul>
        <li>
          <Link href="/">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
