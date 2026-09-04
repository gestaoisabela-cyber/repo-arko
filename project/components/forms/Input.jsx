import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ icon, invalid = false, className = '', ...rest }) {
  const input = (
    <input
      className={['ark-input', icon ? 'ark-input--withIcon' : '', invalid ? 'ark-input--invalid' : '', className].filter(Boolean).join(' ')}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
  if (!icon) return input;
  return (
    <span className="ark-input-wrap">
      <span className="ark-input-wrap__icon"><Icon name={icon} size={18} /></span>
      {input}
    </span>
  );
}
