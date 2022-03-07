import React from 'react';
import Link from 'next/link';
import { Github } from '@components/SVGIcons';

const Footer = () => (
  <footer className="py-8 mt-12 border-t">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Nosotros</h3>
          <ul>
            <li>
              <Link href={{ pathname: '/about' }}>
                <a className="text-sky-500">Conoce más</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Servicios</h3>
          <ul>
            <li>
              <Link href={{ pathname: '/' }}>
                <a className="text-sky-500">Todos los productos</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Hecho para</h3>
          <ul>
            <li>
              <p>
                <a
                  href="https://platzi.com/"
                  target="_blank"
                  className="text-sky-500"
                >
                  Platzi y su curso de Next.JS
                </a>
                {' '}de Platzi dictado por{' '}
                <a
                  href="https://twitter.com/jonalvarezz"
                  target="_blank"
                  className="text-sky-500"
                >
                  @jonalvarezz
                </a>
              </p>
            </li>
            <li className="mt-2">
              <a
                href="https://github.com/leinerke/platzi-nextjs"
                target="_blank"
                className="text-sky-500 flex items-center"
              >
                <Github className="mr-1 text-black" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
