import type { CSSProperties } from 'react';

/** Logotipo tipográfico do Método ARKO — "gestão" em Pinyon Script + "ARKO" em Fraunces 700 (letter-spacing 0.14em). */
export interface LogoProps {
  /** horizontal = "gestão ARKO" lado a lado; stack = duas linhas; mark = só o A capital como monograma. */
  variant?: 'horizontal' | 'stack' | 'mark';
  /** Renderizado em fundo escuro — troca o petróleo pelo off-white e o terracota do "gestão" pelo bege. */
  inverse?: boolean;
  /** Tamanho da palavra "ARKO" em px (a "gestão" em Pinyon é dimensionada relativa a ela). Header 28–34, hero 56–80. */
  size?: number;
  style?: CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
