import { useParams } from "react-router-dom";
import ChatLayout from "../components/layouts/MainLayout";
import { useAppSelector } from "../redux/hooks";
import MessageItem from "../components/chat/MessageItem";

const Chat = () => {
  const { chatId } = useParams();
  const dialogs = useAppSelector(state => state.dialogs.items);
  const chatDialogs = dialogs.filter(dialog => dialog.chatId === chatId);

  return (
    <ChatLayout>
      {chatDialogs.map(dialog => (
        <MessageItem key={dialog.id} dialog={dialog} />
      ))}
    </ChatLayout>
  )
}

export default Chat;