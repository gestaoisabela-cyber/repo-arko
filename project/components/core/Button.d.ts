/**
 * Arko action button. Primary (green pill) is the single conversion action per
 * view; secondary (navy) supports it; outline/ghost for tertiary; onDark on navy.
 * @startingPoint section="Core" subtitle="Pill buttons, all variants and sizes" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = green CTA, secondary = navy, outline/ghost = tertiary, onDark = white on navy. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'onDark';
  /** lg for hero/section CTAs, md default, sm for dense UI. */
  size?: 'lg' | 'md' | 'sm';
  /** Icon name from assets/icons rendered before the label. */
  iconLeft?: string;
  /** Icon name rendered after the label — use "arrow-right" on forward CTAs. */
  iconRight?: string;
  block?: boolean;
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export function Button(props: ButtonProps): JSX.Element;
