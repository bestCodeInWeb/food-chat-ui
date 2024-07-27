import React, { ReactNode, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const ChatLayout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex min-h-screen w-full bg-gradient-to-bl from-blue-2 to-indigo-400'>
      <div className={`${isSidebarOpen ? 'w-full' : 'w-0 md:w-[300px]'}`}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>

      <div className={`${isSidebarOpen ? 'w-0 md:w-full' : 'w-full'}`}>
        <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />

        <main>
          <div className='pl-0 md:pl-20 pt-24'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ChatLayout;
