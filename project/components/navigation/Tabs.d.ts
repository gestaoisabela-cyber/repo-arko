export interface TabItem { id: string; label: React.ReactNode }
/**
 * Section switcher. Underline (green rule) for page sections, pill for compact filters.
 * @startingPoint section="Navigation" subtitle="Underline and pill tab sets" viewport="700x150"
 */
export interface TabsProps {
  /** Strings or {id,label} pairs. */
  items?: Array<string | TabItem>;
  /** Active id; uncontrolled falls back to the first item. */
  value?: string;
  onChange?: (id: string) => void;
  variant?: 'underline' | 'pill';
  className?: string;
}
export function Tabs(props: TabsProps): JSX.Element;
