import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SidebarItem from './SidebarItem';
import { getSidebarItems } from '../../utils/helpers';
import { useAppSelector } from '../../redux/hooks';
import React, { useState } from 'react';
import ContextMenu from '../UI/ContextMenu';

export type Dialog = {
  id: string,
  chatId: string,
  senderId: string,
  recipientId: string,
  senderName: string,
  recipientName: string,
  content: string,
  timestamp: string,
  status: string
}

interface ISidebar {
  setIsSidebarOpen: (value: boolean) => void;
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogs = useAppSelector(state => state.dialogs.items);

  const menuOptions = [
    { text: 'Option 1', onSelect: () => {} },
    { text: 'Option 2', onSelect: () => {} },
    { text: 'Option 3', onSelect: () => {} },
    { text: 'Option 4', onSelect: () => {} },
    { text: 'Option 5', onSelect: () => {} },
  ];

  return (
    <div 
      className={`fixed flex flex-col left-0 top-0 ${isSidebarOpen ? 'w-full md:w-[300px]' : 'w-0 md:w-[300px]'} 
      h-screen border-r border-grey-3 bg-white z-[2]`}
    >
      <div className='px-4 py-4 flex items-center gap-3'>
        <ContextMenu
          state={isMenuOpen}
          setState={setIsMenuOpen}
          items={menuOptions}
        >
          <Bars3Icon
            className='size-7 text-grey-5 hover:text-grey-1 transition duration-300 cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </ContextMenu>

        <div className='relative w-full'>
          <input
            type='text'
            className='pr-4 pl-10 py-2 bg-grey-3 rounded-xl w-full'
            placeholder='Search...'
          />
          <MagnifyingGlassIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
        </div>
      </div>
      
      <ul className='px-1 overflow-y-auto mt-5 scrollbar-md'>
        {getSidebarItems(dialogs).map(item => (
          <SidebarItem key={item.id} item={item} setIsSidebarOpen={setIsSidebarOpen} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
