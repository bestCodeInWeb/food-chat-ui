import React, { useRef, useEffect, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import ContextMenuItem from './ContextMenuItem';

export interface IContextMenuItem {
  text: string;
  onSelect(item: IContextMenuItem): void;
  color?: string;
  subItems?: IContextMenuItem[];
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface IContextMenu {
  state: boolean;
  setState(state: boolean): void;
  children: ReactElement;
  items: IContextMenuItem[];
}

const ContextMenu: React.FC<IContextMenu> = ({ state, setState, children, items }) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const activatorRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsRef, setState]);

  function getPositions(activator: HTMLElement) {
    const activatorRect = activator.getBoundingClientRect();
    const menuWidth = 280;
    const screenPadding = 12;

    let top = activatorRect.bottom + window.scrollY + screenPadding;
    let left = activatorRect.right + window.scrollX - menuWidth;

    if (left < screenPadding) {
      left = screenPadding;
    }

    if (left + menuWidth > window.innerWidth - screenPadding) {
      left = window.innerWidth - screenPadding - menuWidth;
    }

    return { top: `${top}px`, left: `${left}px` };
  }

  return (
    <>
      {React.cloneElement(children, { ref: activatorRef })}

      {state && (
        ReactDOM.createPortal(
          <div
            ref={optionsRef}
            className='absolute z-10 backdrop-blur-sm bg-gray-900/80 rounded-xl overflow-hidden 
            shadow-md w-72 border border-grey-3'
            style={getPositions(activatorRef.current!)}
          >
            {items.map(item => (
              <ContextMenuItem key={item.text} item={item} />
            ))}
          </div>,
          document.body
        )
      )}
    </>
  );
};

export default ContextMenu;
