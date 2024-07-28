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
          'cursor-pointer hover:bg-grey-4 active:bg-grey-3 transition duration-300',
          item.color ? `text-${item.color}` : '',
        ].join(' ')
      }
      onClick={() => item.onSelect(item)}
    >
      {!!Icon && (
        <Icon className='size-6 text-grey-1 mr-3' />
      )}
      
      {item.text}
    </div>
  )
}

export default ContextMenuItem;
