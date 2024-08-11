import React from "react";
import { IContextMenuItem } from "./ContextMenu";

interface IContextMenu {
  item: IContextMenuItem;
}

const ContextMenuItem: React.FC<IContextMenu> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className={
        [
          'px-[20px] py-[15px] flex items-center',
          'cursor-pointer hover:bg-gray-500/20 active:bg-black/10 transition duration-300',
          item.color ? `text-${item.color}` : 'text-white',
        ].join(' ')
      }
      onClick={() => item.onSelect(item)}
    >
      {!!Icon && (
        <Icon className='size-6 text-white mr-3' />
      )}
      
      {item.text}
    </div>
  )
}

export default ContextMenuItem;
