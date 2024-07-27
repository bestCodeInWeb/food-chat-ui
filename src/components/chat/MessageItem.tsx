import React from "react";
import { Dialog } from "../layouts/Sidebar";

interface IMessageItem {
  dialog: Dialog;
}

const MessageItem: React.FC<IMessageItem> = ({ dialog }) => {
  return (
    <div
      className={`flex ${dialog.senderId === 'qmsgyxm1j' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-xl py-1 px-3 rounded-xl mb-1 ${dialog.senderId === 'qmsgyxm1j'
            ? 'bg-white text-right'
            : 'bg-gray-200 text-left'
          }`}
      >
        {dialog.content}
      </div>
    </div>
  )
}

export default MessageItem;
