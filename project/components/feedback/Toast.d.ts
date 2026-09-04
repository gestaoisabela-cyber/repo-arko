export interface ToastProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: 'success' | 'danger' | 'info';
  onDismiss?: () => void;
  className?: string;
}
export function Toast(props: ToastProps): JSX.Element;
