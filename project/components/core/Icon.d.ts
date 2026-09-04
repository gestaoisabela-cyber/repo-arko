import type { CSSProperties } from 'react';

/**
 * Lucide glyph rendered as a CSS mask so it inherits currentColor.
 * Icon files live in assets/icons/. Set window.ARKO_ICON_BASE to the
 * relative path of that folder before mounting (default "assets/icons").
 */
export interface IconProps {
  /** File stem in assets/icons, e.g. "arrow-right", "shield-check". */
  name: string;
  /** Square size in px. 16 inline, 20 default, 24 in buttons, 28+ feature blocks. */
  size?: number;
  /** Overrides currentColor. */
  color?: string;
  /** Accessible label; omit for decorative icons (renders aria-hidden). */
  title?: string;
  style?: CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
