import React from 'react';

export function Logo({ variant = 'horizontal', height = 32, alt = 'Arko', style, ...rest }) {
  const base = (typeof window !== 'undefined' && window.ARKO_ASSET_BASE) || 'assets';
  const src = variant === 'mark' ? base + '/logo-mark-blue.png' : base + '/logo-horizontal.png';
  return (
    <span className="ark-logo" style={style} {...rest}>
      <img src={src} alt={alt} style={{ height, width: 'auto', borderRadius: variant === 'mark' ? 'var(--radius-md)' : 0 }} />
    </span>
  );
}
