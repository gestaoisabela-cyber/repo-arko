import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ options = [], placeholder, className = '', ...rest }) {
  return (
    <span className="ark-select-wrap">
      <select className={['ark-select', className].filter(Boolean).join(' ')} defaultValue={rest.value ? undefined : ''} {...rest}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span className="ark-select-wrap__chev"><Icon name="chevron-down" size={18} /></span>
    </span>
  );
}
