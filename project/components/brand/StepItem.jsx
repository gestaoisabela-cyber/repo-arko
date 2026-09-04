import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function StepItem({ number, title, description, state = 'default', icon, className = '' }) {
  return (
    <div className={['ark-step', state !== 'default' ? 'ark-step--' + state : '', className].filter(Boolean).join(' ')}>
      <span className="ark-step__num">{state === 'done' ? <Icon name="check" size={18} /> : icon ? <Icon name={icon} size={18} /> : number}</span>
      <span>
        <h3 className="ark-step__title">{title}</h3>
        {description ? <p className="ark-step__desc">{description}</p> : null}
      </span>
    </div>
  );
}
