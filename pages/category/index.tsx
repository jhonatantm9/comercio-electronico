import { HeaderInformation } from '@/components/HeaderInformation';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ui/ProductCard';

const CategoryPage = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-white'>
      <div className='fixed w-full top-0 h-[90px]'>
        <Navbar />
      </div>
      <div className='flex flex-col mt-[90px]'>
        <HeaderInformation />
        <div className='flex flex-col p-4 gap-4'>
          <h3 className='text-xl font-semibold'>Category</h3>
          <div className='grid grid-cols-4'>
            <ProductCard name={'arroz'} image={''} price={0} />
            <ProductCard name={'arroz'} image={''} price={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
