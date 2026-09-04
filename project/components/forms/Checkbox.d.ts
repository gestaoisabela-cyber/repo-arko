export interface CheckboxProps {
  label: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  className?: string;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
