export const posts = [
  {
    slug: "impact-of-technology",
    category: "Technology",
    title: "The Impact of Technology on the Workplace",
    desc: "Remote tools, automation, and AI are redefining how we collaborate, build products, and manage time in the modern workplace.",
    author: "Sarah Drasner",
    date: "December 10, 2025",
    dateISO: "2025-12-10",
    image: "/Images/sea.jpg",
    content: `
Static site generation (SSG) has evolved significantly over the past few years. From simple HTML files to complex build processes involving modern JavaScript frameworks, the landscape is shifting rapidly.

## Why the shift?
The primary driver is performance. Pre-rendering pages at build time means there is no database to query when a user requests a page. The content is already there, ready to be served from a CDN edge node close to the user.

- Speed: TTFB (Time To First Byte) is minimized.
- Security: Fewer moving parts means fewer attack vectors.
- Scalability: CDNs can handle massive traffic spikes effortlessly.

## The Role of Hydration
Modern frameworks like Astro, Next.js, and Nuxt.js have introduced concepts like "Partial Hydration" or "Islands Architecture". This allows us to ship mostly static HTML and only load JavaScript for the interactive bits.

As we look forward, the line between static and dynamic continues to blur, offering the best of both worlds: the speed of static with the interactivity of dynamic apps.
`,
  },

  {
    slug: "walk-through-venice",
    category: "Travel",
    title: "A Calm Walk Through Venice: Moments Between Canals",
    desc: "Venice feels like a living painting—every corner holds a quiet story, and every bridge leads to a new mood.",
    author: "Josh Comeau",
    date: "November 10, 2025",
    dateISO: "2025-11-10",
    image: "/Images/venedik.jpg",
    content: `
Venice is one of those places where time feels suspended. The sound of water, the reflections on old stone, the little streets that open into quiet squares...

## Why Venice feels different
It is not just about the canals. It’s about the mood. Every bridge creates a new perspective, every alley feels like a hidden secret.

Travel isn’t always about "doing" — sometimes it’s about slowing down and observing.
`,
  },

  {
    slug: "retro-design-vintage",
    category: "Design",
    title: "Retro Design & Bold Color: Why Vintage Still Works",
    desc: "Vintage design isn't nostalgia—it's a masterclass in balance, contrast, and timeless visual storytelling.",
    author: "Josh Comeau",
    date: "November 10, 2025",
    dateISO: "2025-11-10",
    image: "/Images/bluecar.jpg",
    content: `
Retro design is not about going backward — it’s about borrowing the strongest visual principles from the past.

## Why vintage always comes back
- Strong contrast
- Clear hierarchy
- Emotional palettes
- Clean typography

Sometimes modern design feels too "flat." Retro gives depth and personality.
`,
  },

  {
    slug: "adventure-comfort-ends",
    category: "Adventure",
    title: "Adventure Starts Where Comfort Ends",
    desc: "Climbing higher teaches more than strength—it teaches patience, focus, and how small progress matters.",
    author: "Addy Osmani",
    date: "October 10, 2025",
    dateISO: "2025-10-10",
    image: "/Images/climbing.jpg",
    content: `
Adventure does not always mean danger. Sometimes adventure means discomfort.

## Why it matters
The moment you leave your comfort zone, you grow. Even small progress can reshape your mindset.

It is not the peak that changes you — it is the climb.
`,
  },

  {
    slug: "quiet-architecture",
    category: "Technology",
    title: "Minimalism and Space: The Beauty of Quiet Architecture",
    desc: "Sometimes the most powerful design choice is removing everything unnecessary and letting space speak.",
    author: "Rachel Andrew",
    date: "September 10, 2025",
    dateISO: "2025-09-10",
    image: "/Images/architecture.jpg",
    content: `
Minimalism is not about emptiness — it’s about clarity.

## Quiet spaces
Quiet architecture forces you to notice shape, light, and structure.

Sometimes the best design is what you *don’t* add.
`,
  },

  {
    slug: "bridges-at-sunset",
    category: "Travel",
    title: "Bridges at Sunset: A Travel Story of Stillness",
    desc: "When the sky turns violet, cities become softer. This is what it feels like to pause in the middle of life.",
    author: "Rachel Andrew",
    date: "September 10, 2025",
    dateISO: "2025-09-10",
    image: "/Images/bridge.jpg",
    content: `
There’s something magical about sunsets in cities.

## Stillness matters
The bridge becomes a pause-point — a place to stop thinking and just feel.

Travel is not always about movement. It’s also about stillness.
`,
  },

  {
    slug: "designing-with-emotion",
    category: "Design",
    title: "Color Swirls & Visual Identity: Designing With Emotion",
    desc: "Color isn't decoration—it's emotion. This post explores how palettes shape memory and meaning in UI.",
    author: "Dan Abramov",
    date: "December 12, 2024",
    dateISO: "2024-12-12",
    image: "/Images/color.jpg",
    content: `
Color is memory. Color is mood. Color is storytelling.

## Why it matters in UI
A palette can communicate:
- trust
- warmth
- excitement
- calm

Design systems aren’t only tokens. They’re emotional language.
`,
  },

  {
    slug: "street-style-confidence",
    category: "Fashion",
    title: "Street Style & Confidence: Fashion in Real Life",
    desc: "Fashion isn't about trends—it's about choosing what makes you feel like yourself, confidently and freely.",
    author: "Jennifer Lawrence",
    date: "April 11, 2024",
    dateISO: "2024-04-11",
    image: "/Images/redcar.jpg",
    content: `
Fashion is identity.

## What matters more than trends?
Confidence. Comfort. Expression.

The best outfit is the one that makes you feel like you.
`,
  },

  {
    slug: "house-in-nature",
    category: "Travel",
    title: "A House in Nature: How Environment Shapes the Mind",
    desc: "Nature has a way of slowing us down. Living surrounded by green can completely shift how we think and feel.",
    author: "Alex Chen",
    date: "February 7, 2024",
    dateISO: "2024-02-07",
    image: "/Images/nature.jpg",
    content: `
Nature changes the way we breathe.

## The psychology of green
Living near trees, water, and silence is like therapy.

Sometimes environment is the strongest designer of your life.
`,
  },
];
