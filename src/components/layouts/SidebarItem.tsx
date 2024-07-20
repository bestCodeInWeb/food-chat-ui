import React from "react";
import TruncateText from "../UI/TruncateText";
import { useNavigate, useParams } from "react-router-dom";

interface ISidebarItem {
  item: any;
}

const SidebarItem: React.FC<ISidebarItem> = ({ item }) => {
  const { chatId } = useParams();
  const navigate = useNavigate();

  return (
    <li 
      className={`
        flex gap-3 items-center mb-3 px-2 py-1 rounded-xl cursor-pointer
        ${item.id === chatId ? 'bg-primary' : 'bg-white hover:bg-grey-4'} transition duration-300
      `}
      onClick={() => navigate(`/chat/${item.id}`)}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src={item.image}
          alt=''
          className='w-full h-full object-cover'
        />
      </div>

      <div  className={`${item.id === chatId ? 'text-white' : 'text-grey-6'}`}>
        <p className={`text-lg font-medium ${item.id === chatId ? 'text-white' : 'text-dark'} text-dark`}>
          {item.name}
        </p>
        <TruncateText maxLength={25}>{item.messages[item.messages.length - 1]}</TruncateText>
      </div>
    </li>
  )
}

export default SidebarItem;
