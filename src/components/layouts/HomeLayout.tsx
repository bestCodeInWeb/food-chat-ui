import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex min-h-screen w-full bg-secondary'>
      <div className={`${isSidebarOpen ? 'w-full' : 'w-0 md:w-[300px]'}`}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>

      <div className={`${isSidebarOpen ? 'w-0 md:w-full' : 'w-full'}`}>
        <main>
          <div className='p-10'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomeLayout;
