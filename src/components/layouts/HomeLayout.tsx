import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full bg-secondary'>
      <div className='w-1/5'>
        <Sidebar />
      </div>

      <div className='w-4/5'>
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
