import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from '../../redux/hooks';
import ContextMenu from '../UI/ContextMenu';
import { useState } from 'react';

const Header = () => {
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
    <header className='fixed left-[20%] right-0 top-0 z-10 py-4 pr-12 pl-8 flex items-center justify-between bg-white'>
      <div className='flex gap-3 items-center'>
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