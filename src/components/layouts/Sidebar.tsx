import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SidebarItem from './SidebarItem';
import { getSidebarItems } from '../../utils/helpers';
import { useAppSelector } from '../../redux/hooks';

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

const Sidebar = () => {
  const dialogs = useAppSelector(state => state.dialogs.items);

  return (
    <div 
      className='fixed flex flex-col left-0 top-0 w-1/5 
      h-screen border-r border-grey-3 bg-white z-[2]'
    >
      <div className='px-4 py-4 flex items-center gap-3'>
        <Bars3Icon className='size-7 text-grey-5 hover:text-grey-1 transition duration-300 cursor-pointer' />

        <div className='relative'>
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
          <SidebarItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;