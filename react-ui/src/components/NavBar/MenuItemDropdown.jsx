// @flow
import React, { type Node } from 'react';

type Props = {
  id?: string,
  className?: string,
  iconClass?: string,
  label: string,
  pulledRight?: boolean,
  children?: Node
}

const MenuItemDropdown = ({
  label,
  id = '',
  className = '',
  iconClass = '',
  pulledRight = false,
  children
}: Props) => (
  <li className={`dropdown ${pulledRight ? 'pulled-right' : ''} ${className}`}>
    <a
      type="button"
      data-toggle="dropdown"
      title={label}
      id={id}
    >
      {iconClass && <i className={`mg-r-sm fa ${iconClass}`} />}
      {label}
    </a>
    { children &&
      <ul className="dropdown-menu center-caret">
        { children }
      </ul>
    }
  </li>
);

export default MenuItemDropdown;
