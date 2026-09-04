import React from 'react';

export function StatBlock({ value, label, tone = 'default', source, className = '' }) {
  return (
    <div className={['ark-stat', tone !== 'default' ? 'ark-stat--' + tone : '', className].filter(Boolean).join(' ')}>
      <span className="ark-stat__value">{value}</span>
      <span className="ark-stat__label">{label}</span>
      {source ? <span style={{ fontSize: 'var(--size-overline)', color: 'var(--text-muted)', marginTop: 4 }}>{source}</span> : null}
    </div>
  );
}
