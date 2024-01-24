import { HeaderInformation } from '@/components/HeaderInformation';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import referenceImage from '@/public/images/arroz-diana.jpg';
import { HorizontalDivider } from '@/components/ui/HorizontalDivider';
import { ButtonAddCart } from '@/components/ui/ButtonAddCart';
import { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex flex-col w-full h-screen bg-white'>
      <div className='fixed w-full top-0 h-[90px]'>
        <Navbar />
      </div>
      <div className='flex flex-col mt-[90px]'>
        <HeaderInformation />
        <div className='flex gap-8 p-4 px-8'>
          <Image
            src={referenceImage}
            alt={'Imagen del producto'}
            className='w-[35%]'
          />
          <div className='flex flex-col w-[65%] gap-6 p-1'>
            <h2 className=''>Producto</h2>
            <HorizontalDivider color='dark-purple' />
            <span className='font-light text-2xl text-gray-900'>$Precio</span>
            <div className='flex items-center'>
              <span className='text-xl text-gray-700'>Cantidad:</span>
              <input
                type='number'
                className='w-12 h-8 mx-2 text-center border border-gray-400 rounded-md'
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <ButtonAddCart />
            </div>
            <HorizontalDivider color='dark-purple' />
            <p className='text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam rerum sit explicabo commodi quaerat aut sequi nam,
              ipsum magnam nulla, nostrum a inventore repudiandae. Vero
              voluptate eos sint quia perferendis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
