import React from 'react';

export function Field({ label, hint, error, htmlFor, required, children, className = '', ...rest }) {
  return (
    <div className={['ark-field', className].filter(Boolean).join(' ')} {...rest}>
      {label ? (
        <label className="ark-field__label" htmlFor={htmlFor}>
          {label}{required ? <span style={{ color: 'var(--green-700)' }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? <span className="ark-field__error">{error}</span> : hint ? <span className="ark-field__hint">{hint}</span> : null}
    </div>
  );
}
