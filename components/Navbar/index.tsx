import Image from 'next/image';
import { LuSearch, LuShoppingCart, LuUserCircle2 } from 'react-icons/lu';
import Logo from '@/public/images/logoVaquita.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex bg-floral-white justify-around gap-2 p-5 items-center shadow-sm shadow-gray-200'>
      <Link href='/'>
        <Image src={Logo} alt='Logo' width={50} height={50} />
      </Link>
      <span>Menú</span>
      {/* <div className='flex'>
        <label htmlFor='search-bar'></label>
        <input
          id='search-bar'
          type='search'
          className='border rounded-md border-dark-purple'
          placeholder='Buscar un producto...'
        />
        <LuSearch />
      </div> */}
      <div className='flex items-center gap-2'>
        <LuUserCircle2 />
        <span>Mi cuenta</span>
      </div>
      <div className='flex items-center gap-2'>
        <LuShoppingCart />
        <span>Carrito</span>
      </div>
    </div>
  );
};

export { Navbar };
