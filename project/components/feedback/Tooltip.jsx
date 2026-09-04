import React from 'react';

export function Tooltip({ label, children, className = '' }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span
      className={['ark-tooltip', className].filter(Boolean).join(' ')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <span className="ark-tooltip__bubble" data-open={open ? 'true' : 'false'} role="tooltip">{label}</span>
    </span>
  );
}
