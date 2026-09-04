import React from 'react';

export function Tabs({ items = [], value, onChange, variant = 'underline', className = '' }) {
  const active = value != null ? value : (items[0] && (items[0].id || items[0]));
  return (
    <div className={['ark-tabs', variant === 'pill' ? 'ark-tabs--pill' : '', className].filter(Boolean).join(' ')} role="tablist">
      {items.map((item) => {
        const id = item.id || item;
        const label = item.label || item;
        return (
          <button
            key={id}
            role="tab"
            type="button"
            className="ark-tabs__tab"
            aria-selected={id === active}
            onClick={() => onChange && onChange(id)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
