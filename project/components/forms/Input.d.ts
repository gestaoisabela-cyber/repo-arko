/**
 * Text input: 10px radius, 1px border, green focus ring.
 * @startingPoint section="Forms" subtitle="Inputs, selects, choices, switch" viewport="700x260"
 */
export interface InputProps {
  /** Leading icon name from assets/icons. */
  icon?: string;
  invalid?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  className?: string;
}
export function Input(props: InputProps): JSX.Element;
