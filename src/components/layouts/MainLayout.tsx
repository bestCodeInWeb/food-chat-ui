import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full bg-secondary'>
      <div className='w-1/5'>
        <Sidebar />
      </div>

      <div className='w-4/5'>
        <Header />

        <main>
          <div className='px-10 pt-24'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout;
