import React from 'react';

export function SectionHeading({ overline, title, lead, align = 'left', onDark = false, as = 'h2', className = '' }) {
  const Title = as;
  return (
    <div className={['ark-sectionhead', align === 'center' ? 'ark-sectionhead--center' : '', onDark ? 'ark-sectionhead--onDark' : '', className].filter(Boolean).join(' ')}>
      {overline ? <span className="arko-overline">{overline}</span> : null}
      <Title className="ark-sectionhead__title">{title}</Title>
      {lead ? <p className="ark-sectionhead__lead">{lead}</p> : null}
    </div>
  );
}
