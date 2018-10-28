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
}

export interface Item {
  id: string;
  category: Category;
  title: string;
  text: string;
  userId: string;
  photo: string;
}

export const mockItems: Array<Item> = [
  {
    id: 'f827ab07-07af-445d-a008-8fc23338d60c',
    category: Category.KIDS,
    title: 'Postrazim deti',
    text: 'Ak mas deti a nechces ich nechat same',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg'
  },
  {
    id: '9a2f77e3-bba1-42c1-847a-33bb41d62e65',
    category: Category.HOUSE,
    title: 'Upeciem kolac',
    text: 'Ak potrebujes kolacik rada upeciem hocico',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg'
  }
];

export const mockUsers: Array<User> = [
  {
    id: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    name: 'Jozefina',
    email: 'jozefina@sused.com',
    password: 'jozefina',
    phone: '+421 999 666 555'
  }
];
