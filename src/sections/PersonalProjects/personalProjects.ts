import host from '../../images/host.png'
import drop from '../../images/drop.png'

export const personalProjectsData = [
  {
    id: '1',
    name: 'Host My Json',
    bio: 'Host My Json is an application application that offers individuals and businesses a secure and reliable platform to store their JSON data at no cost. Leveraging the power of Fly.io, our deployment utilizes a robust CI/CD pipeline to ensure seamless and efficient operations.',
    gitHub: 'https://github.com/Ricardonacif/host-my-json',
    url: 'https://hostmyjson.com/',
    img: host,
    stacks: [
      {
        id: '1',
        stack: 'NextJS',
      },
      {
        id: '2',
        stack: 'TypeScript',
      },
      {
        id: '3',
        stack: 'Redux',
      },
      {
        id: '4',
        stack: 'PostgreSQL',
      },
      {
        id: '5',
        stack: 'PrismaORM',
      },
      {
        id: '6',
        stack: 'TailwindCSS',
      },
      {
        id: '7',
        stack: 'Docker',
      },
    ],
  },
  {
    id: '2',
    name: 'Dropshipping Winning Products',
    bio: 'Dropshipping Winning Products is an application designed to cater to the needs of dropshipping business owners. Our platform offers a comprehensive solution for e-commerce entrepreneurs, enabling them to search for and discover new winning products for their online stores.',
    gitHub: 'https://github.com/Britosl1/dropshipping-hot-ones',
    url: 'https://dropshippingwinningproducts.onrender.com/',
    img: drop,
    stacks: [
      {
        id: '1',
        stack: 'NextJS',
      },
      {
        id: '2',
        stack: 'TypeScript',
      },
      {
        id: '3',
        stack: 'Redux',
      },
      {
        id: '4',
        stack: 'Redis',
      },
    ],
  },
]
