import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TOAST_ICON = { success: 'circle-check', danger: 'triangle-alert', info: 'info' };

export function Toast({ title, description, tone = 'success', onDismiss, className = '' }) {
  return (
    <div className={['ark-toast', 'ark-toast--' + tone, className].filter(Boolean).join(' ')} role="status">
      <span className="ark-toast__icon"><Icon name={TOAST_ICON[tone] || 'info'} size={18} /></span>
      <span style={{ flex: 1 }}>
        <span className="ark-toast__title">{title}</span>
        {description ? <span className="ark-toast__desc">{description}</span> : null}
      </span>
      {onDismiss ? (
        <button onClick={onDismiss} aria-label="Fechar" style={{ background: 'none', border: 0, color: 'inherit', cursor: 'pointer', opacity: .6, padding: 0 }}>
          <Icon name="x" size={16} />
        </button>
      ) : null}
    </div>
  );
}
