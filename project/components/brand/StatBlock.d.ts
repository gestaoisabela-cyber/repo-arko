/**
 * Proof number: big Poppins value over a short label. Used for +1000 médicos, NPS 91, 4× patrimônio.
 * @startingPoint section="Brand" subtitle="Proof stats: médicos, NPS, patrimônio" viewport="700x160"
 */
export interface StatBlockProps {
  /** Pre-formatted value: "+1000", "91", "4×". Keep the + and × signs. */
  value: React.ReactNode;
  /** Lowercase label, no period. */
  label: React.ReactNode;
  /** onDark = white value, accent = green value. */
  tone?: 'default' | 'onDark' | 'accent';
  /** Small attribution line, e.g. "Pesquisa RBC · 2020". */
  source?: string;
  className?: string;
}
export function StatBlock(props: StatBlockProps): JSX.Element;
