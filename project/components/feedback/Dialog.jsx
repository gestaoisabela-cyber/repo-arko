import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = true, title, children, actions, onClose, width, className = '' }) {
  if (!open) return null;
  return (
    <div className="ark-dialog__scrim" role="presentation" onClick={onClose}>
      <div
        className={['ark-dialog', className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        style={{ maxWidth: width }}
        onClick={(e) => e.stopPropagation()}
      >
        {onClose ? <span className="ark-dialog__close"><IconButton icon="x" label="Fechar" onClick={onClose} size="sm" /></span> : null}
        {title ? <h2 className="ark-dialog__title">{title}</h2> : null}
        <div className="ark-dialog__body">{children}</div>
        {actions ? <div className="ark-dialog__actions">{actions}</div> : null}
      </div>
    </div>
  );
}
