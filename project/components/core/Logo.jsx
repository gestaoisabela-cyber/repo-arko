import React from 'react';

export function Logo({ variant = 'horizontal', inverse = false, size = 32, style, ...rest }) {
  const cls = [
    'ark-logo',
    variant === 'stack' ? 'ark-logo--stack' : '',
    inverse ? 'ark-logo--inverse' : '',
  ].filter(Boolean).join(' ');
  const arkoSize = size;
  const gestaoSize = variant === 'stack' ? size * 0.75 : size * 1.15;
  if (variant === 'mark') {
    return (
      <span className={cls} style={{ fontSize: arkoSize, ...style }} aria-label="ARKO" role="img" {...rest}>
        <span className="ark-logo__arko">A</span>
      </span>
    );
  }
  return (
    <span className={cls} style={{ fontSize: arkoSize, ...style }} aria-label="gestão ARKO" role="img" {...rest}>
      <span className="ark-logo__gestao" style={{ fontSize: gestaoSize }}>gestão</span>
      <span className="ark-logo__arko">ARKO</span>
    </span>
  );
}
