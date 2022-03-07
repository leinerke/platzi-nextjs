import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Avocado, Basket } from '@components/SVGIcons';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="shadow mb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div id="logo">
            <Link href={{ pathname: '/' }}>
              <a
                className={`flex items-center p-4 transition-colors ${pathname === '/' ? 'bg-zinc-100' : 'hover:bg-zinc-50'}`}
              >
                <Avocado />
                Avo Store
              </a>
            </Link>
          </div>
          <div id="cart">
            <Link href={{ pathname: '/cart' }}>
              <a
                className={`flex items-center p-4 transition-colors ${pathname === '/cart' ? 'bg-zinc-100' : 'hover:bg-zinc-50'}`}
              >
                <Basket className="mr-2" />
                Canasta
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
