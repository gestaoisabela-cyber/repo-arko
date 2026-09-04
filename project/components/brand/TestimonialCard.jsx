import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TestimonialCard({ quote, name, meta, initials, video = false, onPlay, inverse = false, className = '' }) {
  return (
    <div className={['ark-testimonial', inverse ? 'ark-testimonial--inverse' : '', className].filter(Boolean).join(' ')}>
      <p className="ark-testimonial__quote">“{quote}”</p>
      <div className="ark-testimonial__who">
        <span className="ark-testimonial__avatar">{initials}</span>
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="ark-testimonial__name">{name}</span>
          <span className="ark-testimonial__meta">{meta}</span>
        </span>
        {video ? (
          <button
            onClick={onPlay}
            aria-label={'Assistir depoimento de ' + name}
            style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--green-500)', color: 'var(--navy-900)', border: 0, borderRadius: 'var(--radius-pill)', padding: '8px 14px', fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--size-caption)', cursor: 'pointer' }}
          >
            <Icon name="play" size={14} />Assistir
          </button>
        ) : null}
      </div>
    </div>
  );
}
