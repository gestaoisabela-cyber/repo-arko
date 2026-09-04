export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'brand';
  /** Optional leading icon name. */
  icon?: string;
  className?: string;
}
export function Badge(props: BadgeProps): JSX.Element;
