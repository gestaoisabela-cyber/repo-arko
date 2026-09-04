import type { CSSProperties } from 'react';

/**
 * Surface container: 14px radius, hairline border, soft navy-tinted shadow.
 * @startingPoint section="Core" subtitle="Card surfaces: default, raised, inverse, accent" viewport="700x220"
 */
export interface CardProps {
  children: React.ReactNode;
  /** flat = no shadow, raised = md shadow, inverse = navy, accent = pale green. */
  variant?: 'default' | 'flat' | 'raised' | 'inverse' | 'accent';
  /** Adds hover lift + pointer. */
  interactive?: boolean;
  /** Overrides the default 24px padding. */
  padding?: number | string;
  className?: string;
  style?: CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
