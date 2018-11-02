export enum Category {
  GARDEN,
  KIDS,
  HOUSE,
  IT,
  EVENTS,
  PLUMBER
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  photo: string;
}

export interface Item {
  id: string;
  category: Category;
  title: string;
  text: string;
  userId: string;
  photo: string;
  region: string;
}

export const mockItems: Array<Item> = [
  {
    id: 'f827ab07-07af-445d-a008-8fc23338d60c',
    category: Category.KIDS,
    title: 'Postrazim deti',
    text: 'Ak mas deti a nechces ich nechat same',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: '9a2f77e3-bba1-42c1-847a-33bb41d62e65',
    category: Category.HOUSE,
    title: 'Upeciem kolac',
    text: 'Ak potrebujes kolacik rada upeciem hocico',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'trencin'
  },
  {
    id: '66b739dc-71eb-47d6-a182-56c2e8dbdafc',
    category: Category.IT,
    title: 'Oprava osobnych pocitacov',
    text: 'Seruste mam 30 rokov skusenosti s opravovanim strojov, preinstalovat , vyfukat prach, neni problem',
    userId: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    photo: '../../assets/users/monika.jpg',
    region: 'kosice'
  }
];

export const mockUsers: Array<User> = [
  {
    id: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    name: 'Jozefina',
    email: 'jozefina@sused.com',
    password: 'jozefina',
    phone: '+421 999 666 555',
    photo: '../../assets/users/jozefina.jpg',
  },
  {
    id: '63cad2f2-4138-4763-9783-aaff6a53b586',
    name: 'Maros',
    email: 'maro555@gmail.com',
    password: 'jozefina',
    phone: '+421 999 666 555',
    photo: '../../assets/users/maros.jpg',
  },
  {
    id: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    name: 'Monika',
    email: 'jozefina@sused.com',
    password: 'jozefina',
    phone: '+421 999 666 555',
    photo: '../../assets/users/monika.jpg',
  },
  {
    id: '16ea0108-84aa-4693-afe6-da850ea61d86',
    name: 'Pavol',
    email: 'jozefina@sused.com',
    password: 'jozefina',
    phone: '+421 999 666 555',
    photo: '../../assets/users/pavol.jpg',
  },
  
];
