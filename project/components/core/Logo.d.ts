import type { CSSProperties } from 'react';

/** Official Arko lockup. Files live in assets/; set window.ARKO_ASSET_BASE to that folder's relative path. */
export interface LogoProps {
  /** horizontal = green logotype + "CONSULTORIA FINANCEIRA"; mark = navy square with the bow glyph. */
  variant?: 'horizontal' | 'mark';
  /** Rendered height in px. Header 28–34, footer 32–40, mark 40–56. */
  height?: number;
  alt?: string;
  style?: CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
