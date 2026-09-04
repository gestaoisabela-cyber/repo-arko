/**
 * One of the six Método Arko stages: numbered navy disc + title + description.
 * @startingPoint section="Brand" subtitle="Método Arko journey steps" viewport="700x260"
 */
export interface StepItemProps {
  /** Two-digit string, e.g. "01". */
  number?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** done = green disc with a check, pending = pale navy disc. */
  state?: 'default' | 'done' | 'pending';
  /** Replaces the number with an icon from assets/icons. */
  icon?: string;
  className?: string;
}
export function StepItem(props: StepItemProps): JSX.Element;
