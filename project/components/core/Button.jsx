import React from 'react';
import { Icon } from './Icon.jsx';

export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  block = false, disabled = false, href, className = '', ...rest
}) {
  const cls = ['ark-btn', 'ark-btn--' + variant, 'ark-btn--' + size, block ? 'ark-btn--block' : '', className]
    .filter(Boolean).join(' ');
  const inner = (
    <>
      {iconLeft ? <Icon name={iconLeft} size={size === 'sm' ? 15 : 18} /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} size={size === 'sm' ? 15 : 18} /> : null}
    </>
  );
  if (href && !disabled) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button className={cls} type="button" disabled={disabled} {...rest}>{inner}</button>;
}
