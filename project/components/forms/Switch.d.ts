export interface SwitchProps {
  checked?: boolean;
  /** Receives the next boolean value. */
  onChange?: (next: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
export function Switch(props: SwitchProps): JSX.Element;
