export const mockItems: Array<Items> = [
  { id: 'f827ab07-07af-445d-a008-8fc23338d60c', title: 'Postrazim deti', text: 'Ak mas deti a nechces ich nechat same', userId: 'e297073b-52ac-4444-a6c0-db59d980b09e'  }
]

export const mockUsers: Array<User> = [
  { id: 'e297073b-52ac-4444-a6c0-db59d980b09e', name: 'Jozefina', email: 'jozefina@sused.com', password: 'jozefina', phone: '+421 999 666 555' }
]



export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface Items {
  id: string;
  title: string;
  text: string;
  userId: string;
}
