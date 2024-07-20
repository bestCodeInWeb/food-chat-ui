import React from "react";
import { Dialog } from "../layouts/Sidebar";

interface IMessageItem {
  dialog: Dialog;
}

const MessageItem: React.FC<IMessageItem> = ({ dialog }) => {
  return (
    <div>
      {dialog.content}
    </div>
  )
}

export default MessageItem;
