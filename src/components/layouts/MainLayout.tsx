import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children: ReactNode;
}

const ChatLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full bg-gradient-to-bl from-blue-2 to-indigo-400'>
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

export default ChatLayout;
