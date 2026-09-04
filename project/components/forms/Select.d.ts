export interface SelectOption { value: string; label: string }
export interface SelectProps {
  /** Strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  /** Disabled first option shown when nothing is chosen. */
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  name?: string;
  className?: string;
}
export function Select(props: SelectProps): JSX.Element;
