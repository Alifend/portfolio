import { CardProjectProps } from "../components/home/projects/card-project/CardProject";

export const ProjectsData: CardProjectProps[] = [
  {
    title: "Shoppingify",
    slug: "shoppingify",
    goals:
      "I wanted to learn how to use react-query, since I had heard it was a awesome tool to manage cache . I gave it a try and I loved, using custom hooks I was able to re use the same logic in different parts of the app to make API calls and have cached data. Also I wanted to re learn Redux because it was changed a lot since a was working with it last time.",
    description:
      "It's a project made to keep track of all your ingredients and items on a shopping. Allows you to create new items, add them to a cart and save them in a list to use later. Also has a statistics page where you can see the items you buy the most.",
    image:
      "https://user-images.githubusercontent.com/47732101/187781342-80b2bf85-9319-4773-b324-c13c74bc7b9d.png",
    link: "https://shoppingify-alifend.netlify.app/home",
    github: "https://github.com/Alifend/shoppinglist-frontend",
    tools: [
      "React",
      "redux",
      "styled-components",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "react-query",
      "yup",
      "formik",
    ],
  },
  {
    title: "Cat Wiki",
    slug: "cat-wiki",
    goals:
      "I wanted to try Incremetal Static Regeneration to build different static sites with Nextjs, there is a prop called revalidate that allows you to have dynamic content with static performance, I used to generate a page that had dynamic data to show the top most searched cats",
    description:
      "Cat wiki allows you to search among 67 breeds and see the details of each one",
    image:
      "https://user-images.githubusercontent.com/47732101/198864631-6010bc48-94df-4870-8bfb-d6a1952e2f97.png",
    link: "https://cat-wiki-frontend-i52m.vercel.app/",
    github: "https://github.com/Alifend/cat-wiki-frontend",
    tools: [
      "Nextjs",
      "CSS-modules",
      "Nestjs",
      "Mongoose",
      "Incremental Static Regeneration",
    ],
  },
  {
    title: "TypeRacer",
    slug: "typeracer",
    goals:
      "I wanted to replicate an interested mechanic from a game from typeracer.com. I was learning reactive programming and it was a challenge but satisfactory project to make.",
    github: "https://github.com/Alifend/typeracer",
    description:
      "You can practice your typing skills with this game, you can use your own text or get one random quote from an API.",
    image:
      "https://user-images.githubusercontent.com/47732101/199999339-b9e091cd-a2e7-4344-b42e-dff80052309b.png",
    link: "https://alifend-typeracer.netlify.app/",
    tools: ["React", "react-router"],
  },
  {
    title: "Edie Homepage",
    slug: "edie-homepage",
    goals: "Create a homepage",
    description: "Landing page for an generic company",
    github: "https://github.com/Alifend/edie-homepage",
    image:
      "https://user-images.githubusercontent.com/47732101/200000716-fadad40f-f975-48f6-949d-a3fb3db61246.png",
    link: "https://edie-homepage-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
  },
  {
    title: "Recipe Page",
    slug: "recipe",
    goals: "Create a recipe page",
    description: "Page for a recipe",
    github: "https://github.com/Alifend/recipe-page",
    image:
      "https://user-images.githubusercontent.com/47732101/200000936-e22ecb9f-79fe-42fb-8770-6d32eb00522c.png",
    link: "https://recipe-page-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
  },
  {
    title: "Checkout Page",
    slug: "checkout",
    goals: "Create a checkout page",
    description: "Final checkout page for a purchase",
    github: "https://github.com/Alifend/checkout-page",
    image:
      "https://user-images.githubusercontent.com/47732101/200001104-84160c0f-65b6-4bce-baa3-11950e28ddc7.png",
    link: "https://checkout-page-alifend.netlify.app/",
    tools: ["React", "Redux", "Responsive-design"],
  },
  {
    title: "Interior Consultant",
    slug: "interior-consultant",
    goals: "Create a interior consultant page",
    description: "Landing page for an interior consultant",
    github: "https://github.com/Alifend/interior-consultant",
    image:
      "https://user-images.githubusercontent.com/47732101/200001251-2395eb3e-5cae-47d0-a10b-cb1e90d19af1.png",
    link: "https://interior-consultant-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
  },
  {
    title: "My Gallery",
    slug: "gallery",
    goals: "Create a gallery",
    description: "Prototype of profile page ",
    github: "https://github.com/Alifend/my-gallery",
    image:
      "https://user-images.githubusercontent.com/47732101/200001376-599a4f0f-206c-4290-9942-c9eff37420b2.png",
    link: "https://my-gallery-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
  },
  {
    title: "My Team",
    slug: "my-team",
    goals: "Create a team page",
    description: "Page to show your team",
    github: "https://github.com/Alifend/my-team-page",
    image:
      "https://user-images.githubusercontent.com/47732101/200001514-d4bfd2a6-d9e0-4897-b95a-8f19123ec560.png",
    link: "https://my-team-page-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
  },
  {
    title: "Error page",
    slug: "error-page",
    goals: "Create a error page",
    description: "404 page for a website",
    github: "https://github.com/Alifend/404-not-found",
    image:
      "https://user-images.githubusercontent.com/47732101/132941098-a77c7c6b-d274-4675-af79-c77c51365737.png",
    link: "https://404-not-found-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
  },
];
