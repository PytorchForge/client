type Member = {
  imgURL: string,
  altText: string,
  name: string,
  description: string[]
}

export const members: Member[] = [
  {
    imgURL: '/members/mohammad-azeem.png',
    altText: 'Image of MohammadAzeem, a maintainer of MLPipelines',
    name: 'Mohammad Azeem',
    description: [
      'Engineering for the World Wide Web has driven me since 2023. I strive to make the web engaging and to give users the most native experience possible. My philosophy: being on a site constitutes an <em>experience</em> for the user. Every interaction, every scroll, every click should feel intuitive and purposeful. I maintain this client for PytorchForge, ensuring seamless functionality across all touchpoints. For any improvement, feature request, or bug you encounter while surfing, <a class="link" href="https://mohammadazeem.in/contact" target="__blank">contact</a> me.',
      'I work as a Software Developer, though I consider myself more Engineer than Developer. In my spare time, I write <a class="link" href="https://mohammadazeem.in/posts" target="__blank">posts</a>—mostly <i>opinionated</i> pieces on Software Engineering. Learn more <a class="link" href="https://www.linkedin.com/in/mohammadazeemwani/" target="__blank">about me</a>.'
    ]  
  },

  {
    imgURL: '/members/haroon.png',
    altText: 'Image of Haroon, a maintainer of MLPipelines',
    name: 'Haroon',
    description: [
      'I began by experimenting with code and data, driven by curiosity about how systems learn and decide. I built models that not only predicted outcomes but also revealed the underlying patterns, like survival odds during a disaster. I turned ML models into real tools, from mobile image classifiers to desktop trainers with saliency maps for explanations.',
      'I taught myself frameworks like PyTorch and TensorFlow, pushing models from notebooks into apps. I care about explainability and ethical AI, not just results. I see ML as systems to be dissected, not just black boxes to tune. Know more <a class="link" href="https://github.com/Haroon-64" target="__blank">about me</a>'
    ]
  },
  {
    imgURL: '/members/suhaib.png',
    altText: 'Image of Suhaib, a maintainer of MLPipelines',
    name: 'Suhaib',
    description: [
      'I explored various machine learning and deep learning models, focusing on understanding their architectures, functions, and key parameters. I worked extensively with PyTorch, analyzing how its models could be effectively used in practical applications. I worked on inference section and also the templates that get generated. Feel free to <a class="link" href="https://www.linkedin.com/in/suhaib-ahmad-759808223" target="__blank">reach-out</a>',
    ]
  },
]

export const vision: string[] = [
  'Our vision is to build a visual, modular platform for quickly creating ML/DL pipelines that allows handling preprocessing, training, evaluation, and export without repetition of same boilerplate.',
  'This project began as a personal solution to remove friction and speed up our workflow but we hope it will grow into a broader tool for the community. We hope it helps accelerate your work as much as it will ours.'
]