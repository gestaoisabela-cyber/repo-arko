export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons, right-aligned. Primary last. */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** Overrides the 480px max width. */
  width?: number | string;
  className?: string;
}
export function Dialog(props: DialogProps): JSX.Element | null;
