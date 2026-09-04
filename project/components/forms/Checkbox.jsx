import React from 'react';

export function Checkbox({ label, description, className = '', ...rest }) {
  return (
    <label className={['ark-check', 'ark-check--box', className].filter(Boolean).join(' ')}>
      <input type="checkbox" {...rest} />
      <span className="ark-check__text">
        {label}
        {description ? <span className="ark-check__desc">{description}</span> : null}
      </span>
    </label>
  );
}
