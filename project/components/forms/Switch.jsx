import React from 'react';

export function Switch({ checked = false, onChange, label, disabled = false, className = '', ...rest }) {
  return (
    <label
      className={['ark-switch', className].filter(Boolean).join(' ')}
      data-on={checked ? 'true' : 'false'}
      data-disabled={disabled ? 'true' : 'false'}
      {...rest}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span className="ark-switch__track"><span className="ark-switch__knob" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
