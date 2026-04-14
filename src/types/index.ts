export interface Service {
  id: string;
  title: string;
  description: string;
  benefit: string;
  accent: string; // hex colour used as overlay tint
  icon: string;   // lucide icon name (resolved in ServiceCard)
  image: string;  // path relative to /public
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  text: string;
  service?: string;
}
