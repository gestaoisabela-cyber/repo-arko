import React from 'react';

export function Radio({ label, description, className = '', ...rest }) {
  return (
    <label className={['ark-check', 'ark-check--radio', className].filter(Boolean).join(' ')}>
      <input type="radio" {...rest} />
      <span className="ark-check__text">
        {label}
        {description ? <span className="ark-check__desc">{description}</span> : null}
      </span>
    </label>
  );
}
