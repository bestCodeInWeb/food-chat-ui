import React, { useRef, useEffect, ReactElement } from 'react';
import ReactDOM from 'react-dom';

export interface IContextMenuItem {
  text: string;
  onSelect(item: IContextMenuItem): void;
  color?: string;
  subItems?: IContextMenuItem[];
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
            className='absolute z-10 bg-white rounded-xl overflow-hidden shadow-soft w-72 border border-grey-3'
            style={getPositions(activatorRef.current!)}
          >
            {items.map(item => (
              <div
                key={item.text}
                className={
                  [
                    'px-[20px] py-[15px]',
                    'cursor-pointer hover:bg-grey-4 active:bg-grey-3 transition duration-300',
                    item.color ? `text-${item.color}`: '',
                  ].join(' ')
                }
                onClick={() => item.onSelect(item)}
              >
                {item.text}
              </div>
            ))}
          </div>,
          document.body
        )
      )}
    </>
  );
};

export default ContextMenu;
