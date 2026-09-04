/**
 * The Arko section opener: green uppercase overline, Poppins title, grey lead.
 * @startingPoint section="Brand" subtitle="Overline + title + lead section opener" viewport="700x230"
 */
export interface SectionHeadingProps {
  /** Small green uppercase kicker, e.g. "Método Arko", "Depoimentos reais". */
  overline?: string;
  /** Title. Bold the payoff words with <strong>. */
  title: React.ReactNode;
  /** Supporting paragraph, 1–2 sentences. */
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  /** Inverts colors for navy sections. */
  onDark?: boolean;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
