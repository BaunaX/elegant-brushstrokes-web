import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";

export type Product = {
  slug: string;
  title: string;
  series: string;
  price: number;
  image: string;
  description: string;
  medium: string;
  dimensions: string;
};

export const products: Product[] = [
  { slug: "horizon-i", title: "Horizon I", series: "Stillness Series", price: 480, image: art1, medium: "Mixed media on linen, framed in oak", dimensions: "60 × 80 cm",
    description: "A whisper of color across an open field. Horizon I captures the moment before dawn — the breath between night and morning, where the world begins again." },
  { slug: "terracotta-bloom", title: "Terracotta Bloom", series: "Earth Forms", price: 620, image: art2, medium: "Acrylic on canvas", dimensions: "70 × 90 cm",
    description: "Soft geometries in clay and bone, inspired by sun-warmed adobe walls and the slow geometry of Mediterranean afternoons." },
  { slug: "quiet-line", title: "Quiet Line", series: "Stillness Series", price: 390, image: art3, medium: "Ink and gesso on canvas", dimensions: "50 × 70 cm",
    description: "A meditation on restraint — single threads of pigment held within a sea of warm white." },
  { slug: "soft-shore", title: "Soft Shore", series: "Stillness Series", price: 540, image: art4, medium: "Oil on canvas", dimensions: "80 × 100 cm",
    description: "Where sand meets sky in the gentlest possible way. A piece for slow mornings and long, quiet rooms." },
  { slug: "ember-still-life", title: "Ember Still Life", series: "Earth Forms", price: 720, image: art5, medium: "Acrylic and charcoal on canvas", dimensions: "75 × 95 cm",
    description: "An intimate composition of warm umbers and a single dark stem — the quiet drama of a tabletop in afternoon light." },
  { slug: "moon-sage", title: "Moon, Sage", series: "Lunar Studies", price: 460, image: art6, medium: "Oil on canvas", dimensions: "60 × 75 cm",
    description: "A single sage moon held in cream. Part of the Lunar Studies — paintings that began as nightly observations from a small studio window." },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
