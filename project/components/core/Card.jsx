import React from 'react';

export function Card({ children, variant = 'default', interactive = false, padding, className = '', style, ...rest }) {
  const cls = ['ark-card', variant !== 'default' ? 'ark-card--' + variant : '', interactive ? 'ark-card--interactive' : '', className]
    .filter(Boolean).join(' ');
  return <div className={cls} style={{ padding, ...style }} {...rest}>{children}</div>;
}
