/**
 * Doctor testimonial: quote in Poppins, then initials avatar, name and tenure.
 * @startingPoint section="Brand" subtitle="Doctor testimonial with video action" viewport="700x230"
 */
export interface TestimonialCardProps {
  /** Quote text WITHOUT quote marks — the component adds curly quotes. */
  quote: React.ReactNode;
  /** Real name with the Dr./Dra. title, e.g. "Dr. Felipe Ferrari". */
  name: React.ReactNode;
  /** Tenure or context, e.g. "Cliente Arko há 6 meses". */
  meta?: React.ReactNode;
  /** Initials shown in the avatar disc (no photos are shipped). */
  initials?: string;
  /** Shows the green "Assistir" action. */
  video?: boolean;
  onPlay?: () => void;
  /** Navy card for dark bands. */
  inverse?: boolean;
  className?: string;
}
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
