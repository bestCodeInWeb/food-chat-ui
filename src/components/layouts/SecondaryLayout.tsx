import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const SecondaryLayout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex min-h-screen w-full bg-secondary'>
      <div className={`flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'w-[300px]' : 'w-0'} hidden md:block`}>
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>

      <div className='flex-grow transition-all duration-300'>
        <main>
          <div className='pl-0 md:pl-80'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SecondaryLayout;
