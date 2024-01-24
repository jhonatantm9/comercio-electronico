import Image from 'next/image';
import imagenReferencia from '@/public/images/arroz-diana.jpg';
import { ButtonAddCart } from '@/components/ui/ButtonAddCart';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
}

const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <div className='flex flex-col gap-2 shadow-sm shadow-gray-400 rounded-md p-4'>
      <Link href={'/product'} className='flex flex-col gap-2'>
        <Image
          src={imagenReferencia}
          alt={name}
          width={240}
          className='aspect-square self-center'
        />
        <span className='text-lg'>{name}</span>
        <span className='text-lg font-medium'>{price}</span>
      </Link>
      <ButtonAddCart />
    </div>
  );
};

export { ProductCard };
