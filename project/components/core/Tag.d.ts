export interface TagProps {
  children: React.ReactNode;
  /** selected = navy fill, soft = pale navy, default = white with border. */
  variant?: 'default' | 'selected' | 'soft';
  icon?: string;
  onRemove?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export function Tag(props: TagProps): JSX.Element;
