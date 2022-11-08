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
    images: [
      "https://user-images.githubusercontent.com/47732101/187781342-80b2bf85-9319-4773-b324-c13c74bc7b9d.png",
      "https://user-images.githubusercontent.com/47732101/187781345-f1df9bf5-7ae1-445f-8771-e3ae55d1e3e7.png",
      "https://user-images.githubusercontent.com/47732101/187781340-5f2d72e4-5c33-40e2-a4e2-e749ff328ec6.png",
      "https://user-images.githubusercontent.com/47732101/187781333-3f7d3525-ced8-4303-a8b6-b6d64ca26a8c.png",
      "https://user-images.githubusercontent.com/47732101/187782084-3497109a-4bf1-47f2-afc3-e297217a74bd.png",
      "https://user-images.githubusercontent.com/47732101/187782165-27fd73a9-ce13-4342-a3b2-37813ad58908.png",
      "https://user-images.githubusercontent.com/47732101/187782246-9c26e153-7599-4d74-9d5a-e8da8dcbffb3.png",
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
    images: [
      "https://user-images.githubusercontent.com/47732101/200430819-5e3ddded-33a5-4aea-851c-78335a1243b2.png",
      "https://user-images.githubusercontent.com/47732101/200431065-0d1b1ec4-2a75-4277-83a2-fff8798a2d92.png",
      "https://user-images.githubusercontent.com/47732101/200431163-d39d76c4-5cbc-4742-9368-3076050da7e8.png",
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
    images: [
      "https://user-images.githubusercontent.com/47732101/200431261-8179e2bb-b046-440e-91f2-454754f0335a.png",
    ],
  },
  {
    title: "Edie Homepage",
    slug: "edie-homepage",
    goals:
      "This is a classical chanllenge to do so I gave it a try, I used all I knew back then, such as Grid, Flexbox, and a little bit of clamp to make it a fully responsive website.",
    description:
      "Its a landing page for Edie's small team showing their services.",
    github: "https://github.com/Alifend/edie-homepage",
    image:
      "https://user-images.githubusercontent.com/47732101/200000716-fadad40f-f975-48f6-949d-a3fb3db61246.png",
    link: "https://edie-homepage-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200431571-2dcbb346-1a84-4a89-8a80-9367f73db6d2.png",
      "https://user-images.githubusercontent.com/47732101/200431745-74b79bb2-afeb-4c78-88f9-7bddf3e311d4.png",
      "https://user-images.githubusercontent.com/47732101/200431784-01c0872a-ccbe-4fd0-955b-0b80f34d3439.png",
      "https://user-images.githubusercontent.com/47732101/200431827-abe60fa4-bd1c-4820-9733-ff27db86924c.png",
      "https://user-images.githubusercontent.com/47732101/200431862-222867c7-1079-41c1-a714-11ae557a9209.png",
    ],
  },
  {
    title: "Recipe Page",
    slug: "recipe",
    goals:
      "I wanted to do a reusable page where I could pass the data and then get a recipe page, I used Grid, Flexbox to build a fully responsive site.",
    description:
      "It't a recipe page where you can see Ingredients, Instructions and some details of the recipe.",
    github: "https://github.com/Alifend/recipe-page",
    image:
      "https://user-images.githubusercontent.com/47732101/200000936-e22ecb9f-79fe-42fb-8770-6d32eb00522c.png",
    link: "https://recipe-page-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200431955-c16bf6ce-0ae6-441f-9473-b1ba25f982e6.png",
      "https://user-images.githubusercontent.com/47732101/200432460-7ec51125-44f0-4173-841c-54a644a47016.png",
    ],
  },
  {
    title: "Checkout Page",
    slug: "checkout",
    goals:
      "I wanted to learn a global state managment tool like Redux and it's paradigm.",
    description:
      "It's a final checkout page where you can see a summary of your items, quantities and prices and also a shipping form.",
    github: "https://github.com/Alifend/checkout-page",
    image:
      "https://user-images.githubusercontent.com/47732101/200001104-84160c0f-65b6-4bce-baa3-11950e28ddc7.png",
    link: "https://checkout-page-alifend.netlify.app/",
    tools: ["React", "Redux", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200432565-ff73e0be-01c2-4d45-88b3-837d552edecd.png",
    ],
  },
  {
    title: "Interior Consultant",
    slug: "interior-consultant",
    goals: "Create a interior consultant page with a responsive navbar.",
    description: "Landing page for an interior consultant",
    github: "https://github.com/Alifend/interior-consultant",
    image:
      "https://user-images.githubusercontent.com/47732101/200001251-2395eb3e-5cae-47d0-a10b-cb1e90d19af1.png",
    link: "https://interior-consultant-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200432645-730d0779-8d57-479f-a76d-13e67e580453.png",
    ],
  },
  {
    title: "My Gallery",
    slug: "gallery",
    goals:
      "Create a gallery profile page, I thought it was a good idea to make de images layout with CSS Grid and it worked perfectly.",
    description:
      "Prototype of profile page where you can see images and some details about profile's user.",
    github: "https://github.com/Alifend/my-gallery",
    image:
      "https://user-images.githubusercontent.com/47732101/200001376-599a4f0f-206c-4290-9942-c9eff37420b2.png",
    link: "https://my-gallery-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200432771-f35d6dcf-5c5d-4fe8-93f8-94a1777f8ae6.png",
    ],
  },
  {
    title: "My Team",
    slug: "my-team",
    goals: "Learn responsive design",
    description: "Landing page showing a team",
    github: "https://github.com/Alifend/my-team-page",
    image:
      "https://user-images.githubusercontent.com/47732101/200001514-d4bfd2a6-d9e0-4897-b95a-8f19123ec560.png",
    link: "https://my-team-page-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200432862-b693d4ec-4128-49d1-bcab-e5a3ce8e8dc8.png",
    ],
  },
  {
    title: "Error page",
    slug: "error-page",
    goals: "Create a error 404 page",
    description: "404 page for a website",
    github: "https://github.com/Alifend/404-not-found",
    image:
      "https://user-images.githubusercontent.com/47732101/132941098-a77c7c6b-d274-4675-af79-c77c51365737.png",
    link: "https://404-not-found-alifend.netlify.app/",
    tools: ["React", "Responsive-design"],
    images: [
      "https://user-images.githubusercontent.com/47732101/200432964-4dccc648-f67e-4caf-92d6-b0dc7a8791c6.png",
    ],
  },
];
