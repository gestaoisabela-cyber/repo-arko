import React from 'react';

export function Icon({ name, size = 20, color, style, title, ...rest }) {
  const base = (typeof window !== 'undefined' && window.ARKO_ICON_BASE) || 'assets/icons';
  const url = 'url("' + base + '/' + name + '.svg")';
  return (
    <span
      className="ark-icon"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : 'true'}
      style={{ width: size, height: size, color, WebkitMaskImage: url, maskImage: url, ...style }}
      {...rest}
    />
  );
}
