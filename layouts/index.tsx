interface layoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <main className='flex flex-col h-screen w-full bg-orange-100'>
      {children}
    </main>
  );
};

export { Layout };
