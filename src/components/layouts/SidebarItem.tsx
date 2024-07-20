import React from "react";
import TruncateText from "../UI/TruncateText";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { selectName } from "../../redux/dialogsReducer";

interface ISidebarItem {
  item: Dialog;
}

const SidebarItem: React.FC<ISidebarItem> = ({ item }) => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goToChat = () => {
    navigate(`/chat/${item.chatId}`);
    const name = item.recipientId === 'qmsgyxm1j' ? item.senderName : item.recipientName
    dispatch(selectName(name));
  }

  return (
    <li 
      className={`
        flex gap-3 items-center mb-3 px-2 py-1 rounded-xl cursor-pointer
        ${item.chatId === chatId ? 'bg-primary' : 'bg-white hover:bg-grey-4'} transition duration-300
      `}
      onClick={goToChat}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src='https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1447,w_2572,x_178,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1657047557/Screen_Shot_2022-07-05_at_2.39.01_PM_gf8abz'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>

      <div  className={`${item.chatId === chatId ? 'text-white' : 'text-grey-6'}`}>
        <p className={`text-lg font-medium ${item.chatId === chatId ? 'text-white' : 'text-dark'} text-dark`}>
          {item.recipientId === 'qmsgyxm1j' ? item.senderName : item.recipientName}
        </p>
        <TruncateText maxLength={25}>{item.content}</TruncateText>
      </div>
    </li>
  )
}

export default SidebarItem;
