import React from 'react';
import { Icon } from './Icon.jsx';

export function IconButton({ icon, label, variant = 'quiet', size = 'md', className = '', ...rest }) {
  const cls = ['ark-iconbtn', 'ark-iconbtn--' + variant, 'ark-iconbtn--' + size, className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} aria-label={label} {...rest}>
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
}
