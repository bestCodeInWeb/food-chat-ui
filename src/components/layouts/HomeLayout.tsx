import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex min-h-screen w-full bg-secondary'>
      <div className={`flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'w-[300px]' : 'w-0'}`}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>

      <div className='flex-grow transition-all duration-300'>
        <main>
          <div className='pl-0'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default HomeLayout;
