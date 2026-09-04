import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, variant = 'default', icon, onRemove, onClick, className = '', ...rest }) {
  const cls = ['ark-tag', variant !== 'default' ? 'ark-tag--' + variant : '', onClick ? 'ark-tag--clickable' : '', className]
    .filter(Boolean).join(' ');
  const Comp = onClick ? 'button' : 'span';
  return (
    <Comp className={cls} onClick={onClick} type={onClick ? 'button' : undefined} {...rest}>
      {icon ? <Icon name={icon} size={15} /> : null}
      {children}
      {onRemove ? (
        <span className="ark-tag__remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }} role="button" aria-label="Remover">
          <Icon name="x" size={13} />
        </span>
      ) : null}
    </Comp>
  );
}
