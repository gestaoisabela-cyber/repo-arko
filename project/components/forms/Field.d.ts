export interface FieldProps {
  /** Label text, sentence case. */
  label?: string;
  /** Helper text below the control; hidden when `error` is set. */
  hint?: string;
  /** Error message; replaces the hint and turns it red. */
  error?: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}
export function Field(props: FieldProps): JSX.Element;
