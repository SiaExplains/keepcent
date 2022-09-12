import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { MenuItem } from '../../types/menu-item';
import { MenuItems } from './MenuItems';

const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      disableCloseOnEsc
      pageWrapId={'et-header'}
      outerContainerId={'et-body'}
      right={false}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}>
      {MenuItems.map((item: MenuItem) => {
        return (
          <Link id="category" className="menu-item" href={item.path} onClick={closeSideBar}>
            {item.title}
          </Link>
        );
      })}
    </Menu>
  );
};

export default MobileNavigation;
