export interface IconButtonProps {
  /** Icon name from assets/icons. */
  icon: string;
  /** Required accessible label. */
  label: string;
  variant?: 'quiet' | 'solid' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export function IconButton(props: IconButtonProps): JSX.Element;
