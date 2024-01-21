import Image from 'next/image';
import imagenFrutas from '@/public/images/frutas-y-verduras.png';
import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  //   image: string;
}

const CategoryCard = ({ name }: CategoryCardProps) => {
  return (
    // <div className='flex flex-col gap-2 items-center max-w-fit'>
    <Link
      href={'/category'}
      className='flex flex-col gap-2 items-center max-w-fit debug'
    >
      <Image
        src={imagenFrutas}
        alt='p1'
        width={200}
        height={200}
        className='aspect-square rounded-full overflow-clip object-fill'
      />
      <span className='text-center'>{name}</span>
    </Link>
    // </div>
  );
};

export { CategoryCard };
