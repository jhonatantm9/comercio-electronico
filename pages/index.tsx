import { HeaderInformation } from '@/components/HeaderInformation';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/layouts';
import Image from 'next/image';
import imagenPrueba from '@/public/images/arroz-diana.jpg';
import imagenFrutas from '@/public/images/frutas-y-verduras.png';
import { CategoryCard } from '@/components/ui/CategoryCard';

const Home = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-white'>
      <Navbar />
      <HeaderInformation />
      <section className='flex flex-col items-center p-2 mt-4 gap-4'>
        <h2 className='text-center'>Productos promocionados</h2>
        <div className='flex gap-x-10 gap-y-3'>
          <Image src={imagenPrueba} alt='p1' width={250} height={250} />
          <Image src={imagenPrueba} alt='p2' width={250} height={250} />
          <Image src={imagenPrueba} alt='p3' width={250} height={250} />
        </div>
      </section>
      <section className='flex flex-col p-2 gap-4 items-center'>
        <h2 className='text-center'>Categorías</h2>
        <div className='grid grid-cols-5 gap-8 p-4'>
          <CategoryCard name={'Frutas y verduras'} />
          <CategoryCard name={'Carnes y pescados'} />
          <CategoryCard name={'Alacena'} />
          <CategoryCard name={'Bebidas y snacks'} />
          <CategoryCard name={'Licores'} />
        </div>
      </section>
      <section className='flex gap-4 w-2/3 py-6 items-center self-center'>
        <h3 className='text-center text-xl w-2/5'>Sobre la tienda</h3>
        <p className='w-3/5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatum, facere eveniet molestiae laborum perspiciatis sit
          reiciendis dolorum id illum, aperiam odio magnam nemo soluta hic
          perferendis fugiat pariatur rerum!
        </p>
      </section>
    </div>
  );
};

export default Home;
