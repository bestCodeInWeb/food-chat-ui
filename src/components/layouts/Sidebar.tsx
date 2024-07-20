import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const dialogs = [
    { id: '1', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['Hello'] },
    { id: '2', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['how are you?'] },
    { id: '3', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['I wanna complain about the noise in the house'] },
    { id: '4', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['What are you doing?'] },
    { id: '5', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['Ho-ho-ho'] },
    { id: '6', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['Hello'] },
    { id: '7', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['how are you?'] },
    { id: '8', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['I wanna complain about the noise in the house'] },
    { id: '9', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['What are you doing?'] },
    { id: '10', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['Ho-ho-ho'] },
    { id: '11', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['Hello'] },
    { id: '12', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['how are you?'] },
    { id: '13', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['I wanna complain about the noise in the house'] },
    { id: '14', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['What are you doing?'] },
    { id: '15', name: 'Oleg Beliy', image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz', messages: ['Ho-ho-ho'] },
  ];

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
        {dialogs.map(item => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
