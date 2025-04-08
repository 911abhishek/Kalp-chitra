
import Your_text from "./Your_text.svg"
import eg1 from "./eg1.png"
import rating_star from "./rating_star.svg"
import facebook_icon from "./facebook_icon.svg"
import twitter_icon from "./twitter_icon.svg"
import email_icon from "./email_icon.svg"
import instagram_icon from "./instagram_icon.svg"
import webLogo from './webLogo.svg'
import profile_icon from "./profile_icon.png"
import lock_icon from "./lock_icon.svg"
import monkey from "./monkey.png"
import demo from "./demo.png"
import demo2 from "./demo2.png";
import demo3 from "./demo3.png";
import Logo from "./Logo.png"
import abhishek from "./abhishek.jpeg"
import amit from "./amit.jpeg"
import satyam from "./satyam.jpeg"
import demoUse from "./demoUse.png"
import result_image from "./result_image.png";
export const assets = {
  Logo,
  Your_text,
  eg1,
  rating_star,
  facebook_icon,
  twitter_icon,
  email_icon,
  instagram_icon,
  webLogo,
  profile_icon,
  lock_icon,
  monkey,
  demo,
  demo2,
  demo3,
  abhishek,
  amit,
  satyam,
  demoUse,
  result_image,
};

export const testimonialsData = [
  {
    image: abhishek,
    name: "Abhishek Kumar",
    role: "Graphic Designer",
    stars: 5,
    text: `I tried Text to Kalp Chitra, and it works like a charm. The process is smooth, and the images come out exactly as expected. Highly recommended!! `,
  },
  {
    image: eg1,
    name: "Amit Lohra",
    role: "Content Creator",
    stars: 4,
    text: `This website makes text-to-image conversion super easy. The quality of images is impressive, and the interface is very user-friendly. Perfect for quick creative work!`,
  },
  {
    image: satyam,
    name: "Satyam Kumar",
    role: " Graphic Designer",
    stars: 5,
    text: `I was looking for a good text-to-image tool, and this one did not disappoint. Quick processing, good results, and no complicated setup. Definitely worth using!`,
  },
];
export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },]
export const imageData = [
  {
    src: assets.demo,
    alt: "Sample 1",
    prompt:
      "A cozy wooden cabin in the middle of a snow-covered forest, smoke coming from the chimney, warm golden lights glowing through the windows, highly detailed, realistic.",
  },
  {
    src: assets.demo2,
    alt: "Sample 2",
    prompt:
      "A sleek AI-powered robot standing in a high-tech laboratory, neon blue holograms floating around, ultra-futuristic, sci-fi aesthetic, ultra-HD.",
  },
  {
    src: assets.demo3,
    alt: "Sample 3",
    prompt:
      "An anime girl standing on a rooftop at sunset, wind blowing through her hair, school uniform, warm and vibrant color palette, Studio Ghibli-inspired.",
  },
];