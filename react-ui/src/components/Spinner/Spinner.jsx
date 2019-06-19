// @flow

import React from 'react';

type Props = {
  id: string,
  className: string
};

const Spinner = ({ id, className }: Props) => (
  <div className={`spinner ${className}`} id={id} >
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);

Spinner.defaultProps = {
  className: '',
  id: ''
};

export default Spinner;
