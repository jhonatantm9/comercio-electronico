import { LuShoppingCart } from 'react-icons/lu';

const ButtonAddCart = () => {
  return (
    <button className='flex gap-6 bg-lavander-pink justify-center items-center rounded-md px-4 py-2 w-1/2 self-center hover:bg-hot-pink'>
      <span className='font-semibold'>Agregar</span>
      <LuShoppingCart />
    </button>
  );
};

export { ButtonAddCart };
