import React from 'react';
import { Icon } from './Icon.jsx';

export function Badge({ children, tone = 'neutral', icon, className = '', ...rest }) {
  return (
    <span className={['ark-badge', 'ark-badge--' + tone, className].filter(Boolean).join(' ')} {...rest}>
      {icon ? <Icon name={icon} size={13} /> : null}
      {children}
    </span>
  );
}
