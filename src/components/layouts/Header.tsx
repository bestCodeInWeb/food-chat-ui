import { EllipsisVerticalIcon, MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from '../../redux/hooks';
import ContextMenu from '../UI/ContextMenu';
import { useState } from 'react';

interface IHeader {
  setIsSidebarOpen: (value: boolean) => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<IHeader> = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedName } = useAppSelector(state => state.dialogs);

  const menuOptions = [
    { text: 'Option 1', onSelect: () => {} },
    { text: 'Option 2', onSelect: () => {} },
    { text: 'Option 3', onSelect: () => {} },
    { text: 'Option 4', onSelect: () => {} },
    { text: 'Option 5', onSelect: () => {} },
  ];

  return (
    <header className={
      `${isSidebarOpen 
        ? 'w-0 md:w-[calc(100%-300px)] md:fixed md:left-[300px] md:right-0 md:top-0 md:z-10 md:py-4 md:pr-12 md:pl-8 md:flex md:items-center md:justify-between md:bg-white' 
        : 'fixed left-0 md:left-[300px] right-0 top-0 z-10 py-4 pr-12 pl-8 flex items-center justify-between bg-white'}`
    }>
      <div className='flex gap-3 items-center'>
        <ArrowLeftIcon 
          className={`
            ${!isSidebarOpen ? 'md:hidden' : 'hidden'} size-5 cursor-pointer 
            text-grey-6 hover:text-grey-1 transition font-semibold
          `} 
          onClick={() => setIsSidebarOpen(true)} 
        />

        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img
            src='https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>

        <div>
          <p className='text-lg font-medium text-dark'>{selectedName}</p>
          <span className='text-primary'>Online</span>
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <div className='relative'>
          <input
            type='text'
            className='pr-4 pl-10 py-2 bg-grey-3 rounded-xl'
            placeholder='Search message'
          />
          <MagnifyingGlassIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
        </div>

        <ContextMenu
          state={isMenuOpen}
          setState={setIsMenuOpen}
          items={menuOptions}
        >
          <EllipsisVerticalIcon
            className='size-6 text-grey-5 hover:text-grey-1 transition duration-300 cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </ContextMenu>
      </div>
    </header>
  )
}

export default Header;