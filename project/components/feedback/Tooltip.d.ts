export interface TooltipProps {
  /** Short single-line text. */
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
export function Tooltip(props: TooltipProps): JSX.Element;
