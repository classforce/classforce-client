import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className='bg-primary flex justify-between items-center gap-4 px-4 py-2'>
        <Link
          href='/'
          className='flex items-center gap-2 bg-white bg-opacity-0 hover:bg-opacity-25 p-1 rounded transition'>
          <Image
            src='/images/logo-padded.svg'
            width={32}
            height={32}
            alt='Logo'
            className='rounded'
          />
          <p className='text-body font-bold uppercase'>Classforce</p>
        </Link>
        <nav className='flex items-center gap-2'>
          <Link
            href='/'
            className='p-1 bg-white bg-opacity-0 hover:bg-opacity-25 transition rounded'>
            Ogłoszenia
          </Link>
          <Link
            href='/grupy'
            className='p-1 bg-white bg-opacity-0 hover:bg-opacity-25 transition rounded'>
            Grupy
          </Link>
          <Link
            href='/zadania'
            className='p-1 bg-white bg-opacity-0 hover:bg-opacity-25 transition rounded'>
            Zadania
          </Link>
          <Link
            href='/kolokwia'
            className='p-1 bg-white bg-opacity-0 hover:bg-opacity-25 transition rounded'>
            Kolokwia
          </Link>
          <Link
            href='/plan-lekcji'
            className='p-1 bg-white bg-opacity-0 hover:bg-opacity-25 transition rounded'>
            Plan lekcji
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Layout;
