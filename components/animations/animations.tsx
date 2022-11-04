export const Fade = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  },
  viewport: { once: true },
};
