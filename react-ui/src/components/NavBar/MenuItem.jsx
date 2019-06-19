// @flow
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export type Props = {
  id?: string,
  className?: string,
  href: string,
  isExternalUrl?: boolean,
  iconClass?: string,
  label: string,
  pulledRight?: boolean
}

const link = (href: string, id: string, label: string, iconClass: string) => (
  <a
    href={href}
    id={id}
  >
    {iconClass && <i className={`mg-r-sm fa ${iconClass}`} />}
    {label}
  </a>
);

const MenuItem = ({
  href, label,
  id = '',
  className = '',
  isExternalUrl = false,
  iconClass = '',
  pulledRight = false
}: Props) => (
  <li className={`${className} ${pulledRight ? 'pulled-right' : ''}`}>
    {isExternalUrl
      ? link(href, id, label, iconClass)
      : (
        <LinkContainer to={href}>
          { link(href, id, label, iconClass) }
        </LinkContainer>
      )
    }
  </li>
);

export default MenuItem;

