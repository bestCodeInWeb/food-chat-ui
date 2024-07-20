import { useParams } from "react-router-dom";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import ChatLayout from "../components/layouts/MainLayout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import MessageItem from "../components/chat/MessageItem";
import { useState } from "react";
import { Dialog } from "../components/layouts/Sidebar";
import { addMessage } from "../redux/dialogsReducer";

const Chat = () => {
  const [message, setMessage] = useState('');
  const { chatId } = useParams();
  const dialogs = useAppSelector(state => state.dialogs.items);
  const chatDialogs = dialogs.filter(dialog => dialog.chatId === chatId);
  const dispatch = useAppDispatch();

  const onMessageSendClick = () => {
    if (!message.trim()) return;
    
    const foundDialog = dialogs.find(d => d.chatId === chatId);

    if (!foundDialog) return;

    const newDialog: Dialog = {
      ...foundDialog,
      id: new Date().toISOString(),
      content: message,
      timestamp: new Date().toISOString(),
      status: 'DELIVERED',
      senderId: 'qmsgyxm1j',
      senderName: 'Fixed User', 
      recipientName: foundDialog.recipientName === 'Fixed User' ? foundDialog.senderName : foundDialog.recipientName,
      recipientId: foundDialog.recipientId === 'qmsgyxm1j' ? foundDialog.senderId : foundDialog.recipientId
    }

    setMessage('');
    dispatch(addMessage(newDialog));
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onMessageSendClick();
    }
  }

  return (
    <ChatLayout>
      <div className='w-3/5 mx-auto'>
        <div className='h-[550px] mb-3 overflow-y-auto scrollbar-md flex flex-col justify-end'>
          {chatDialogs.map(dialog => (
            <MessageItem key={dialog.id} dialog={dialog} />
          ))}
        </div>

        <div className='flex items-end'>
          <textarea 
            className='w-full h-20 resize-none rounded-xl px-4 py-2'
            placeholder='Send a message...'
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button 
            className='bg-primary text-white rounded-full ml-3 p-3 
            hover:bg-primary-2 active:bg-blue transition duration-300'
            onClick={onMessageSendClick}
          >
            <PaperAirplaneIcon className='size-5 text-white' />
          </button>
        </div>
      </div>
    </ChatLayout>
  )
}

export default Chat;