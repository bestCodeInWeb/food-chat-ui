import { Dialog } from "../components/layouts/Sidebar";

export const getSidebarItems = (dialogs: Dialog[]) => {
  const chatIdx: string[] = [];
  const sidebarItems: Dialog[] = [];

  dialogs.map(dialog => {
    if (!chatIdx.includes(dialog.chatId)) {
      chatIdx.push(dialog.chatId);
    }
  })

  chatIdx.map(chatId => {
    sidebarItems.push(dialogs.slice().reverse().find(item => item.chatId === chatId)!);
  })

  return sidebarItems;
}
