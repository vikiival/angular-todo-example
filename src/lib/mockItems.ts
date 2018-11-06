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
    id: 'ef42304d-8f91-4553-9283-cdfa9767b4a6',
    category: Category.GARDEN,
    title: 'Kosenie zahrady',
    text: 'Seruste,keby niekto potreboval pokosit travnik som k dispozicii.',
    userId: '16ea0108-84aa-4693-afe6-da850ea61d86',
    photo: '../../assets/users/pavol.jpg',
    region: 'trencin'
  },
  {
    id: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    category: Category.GARDEN,
    title: 'Strihanie stromov',
    text: 'Ahojte, je tu niekto kto by mi vedel ostrihať stromy a zivy plot? Najlepsie uz tuto sobotu.',
    userId: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: '15a5724b-1942-4ad8-a9f1-89d37fd31da1',
    category: Category.GARDEN,
    title: 'Kompost na hnojenie',
    text: 'Mam na zvys kompost. Keby niekto potreboval pohnojit zahradku, kludne sa ozvite.',
    userId: '63cad2f2-4138-4763-9783-aaff6a53b586',
    photo: '../../assets/users/maros.jpg',
    region: 'trencin'
  },
  {
    id: '19246743-bd20-43d4-847e-a0fec55eb277',
    category: Category.GARDEN,
    title: '',
    text: 'Ahojte. Potrebovala by som poradit, ktore kvetinky dlho vydrzia a ako ich spravne sadit. Keby mal niekto cas bola by som velmi povdacna.',
    userId: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    photo: '../../assets/users/monika.jpg',
    region: 'pezinok'
  },
  {
    id: '99483867-e91f-43a2-b9e7-5f5573749b4d',
    category: Category.KIDS,
    title: 'Kam s detmi',
    text: 'Poradte prosim, som zufaly. Kam s detmi takto na jesen?',
    userId: '63cad2f2-4138-4763-9783-aaff6a53b586',
    photo: '../../assets/users/maros.jpg',
    region: 'trencin'
  },
  {
    id: '64376b85-ddda-4aa3-9507-f046461afe2a',
    category: Category.KIDS,
    title: 'Strazenie deti',
    text: 'Zdravim, potrebovali by sme postrazit v piatok 20.10. dve male dievcatka. Su uplne bezproblemove. Nasiel by sa niekto?',
    userId: '63cad2f2-4138-4763-9783-aaff6a53b586',
    photo: '../../assets/users/maros.jpg',
    region: 'trencin'
  },
  {
    id: 'f827ab07-07af-445d-a008-8fc23338d60c',
    category: Category.KIDS,
    title: 'Postrazim deti',
    text: 'Ak mate deticky a nechcete ich nechat same kludne pozstrazim. Mam cas skoro stale.',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: '9a2f77e3-bba1-42c1-847a-33bb41d62e65',
    category: Category.HOUSE,
    title: 'Upeciem kolac',
    text: 'Ak by si si dal kolacik rada upeciem, rozne druhy',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: 'd3fd71ce-ced2-44af-9f50-507df82b50f4',
    category: Category.HOUSE,
    title: 'Upratovanie',
    text: 'Pekny den prajem. Potrebovala by som pomoct s upratovanim v dome, lebo uz nevladzem. Hlavne okna by som potrebovala umyt.',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: 'ab618bc5-b970-40d4-9def-f82df4ecfa4f',
    category: Category.HOUSE,
    title: 'Pranie',
    text: 'Ahojte, pokazila sa mi pracka a potrebovala by som si oprat veci. Mohla by som si k niekomu prist oprat? Velmi by mi to pomohlo.',
    userId: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    photo: '../../assets/users/monika.jpg',
    region: 'pezinok'
  },
  {
    id: '0ea5bfee-feb9-409f-ba44-c9f913d3b3e5',
    category: Category.HOUSE,
    title: 'Darujem taniere',
    text: 'Mam nazvys taniere. Ak by niekto potreboval ozvite sa, darujem.',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: '16e21604-f755-40d6-8b4c-7b277f1062ac',
    category: Category.HOUSE,
    title: 'Pozicia niekto dvojplatnicku?',
    text: 'Ahojte, potreboval by som pozicat na dva tyzdne dvojplatnicku. Ma niekto?',
    userId: '16ea0108-84aa-4693-afe6-da850ea61d86',
    photo: '../../assets/users/pavol.jpg',
    region: 'bratislava'
  },
  {
    id: '66b739dc-71eb-47d6-a182-56c2e8dbdafc',
    category: Category.IT,
    title: 'Oprava osobnych pocitacov',
    text: 'Ahojte mam niekolko rokov skusenosti s opravovanim pocitacov. Preinstalovat , vyfukat prach, nie je problem.',
    userId: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    photo: '../../assets/users/monika.jpg',
    region: 'pezinok'
  },
  {
    id: 'a21085a2-32dd-4a9f-93d9-6180ba0834f4',
    category: Category.IT,
    title: 'Novy pocitac',
    text: 'Ahojte susedia, kupila som si novy pocitac a neviem ho zapnut. Vedel by mi s tym niekto pomoct?',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: 'a21085a2-32dd-4a9f-93d9-6180ba0834f4',
    category: Category.IT,
    title: 'Domaca uloha z programovania',
    text: 'Zdravim vsetkych. Zhanam niekoho kto by pomohol mojim detom s domacou ulohou z programovania.',
    userId: '63cad2f2-4138-4763-9783-aaff6a53b586',
    photo: '../../assets/users/maros.jpg',
    region: 'trencin'
  },
  {
    id: 'fa1590e8-29ef-4329-98e0-af3c4e50d055',
    category: Category.EVENTS,
    title: 'Grilovacka',
    text: 'Zajtra hlasia krasne pocasie. Co takto si spravit susedsku grilovacku. Kto sa prida?',
    userId: '16ea0108-84aa-4693-afe6-da850ea61d86',
    photo: '../..pezinok/users/pavol.jpg',
    region: 'trencin'
  },
  {
    id: 'fa1590e8-29ef-4329-98e0-af3c4e50d055',
    category: Category.EVENTS,
    title: 'Detska party',
    text: 'Zdravim vsetkych rodicov, tento vikend organizujeme detsku party pri bazene. Kto ma male deti kludne pridte, vsetci su vitani.',
    userId: '63cad2f2-4138-4763-9783-aaff6a53b586',
    photo: '../../assets/users/maros.jpg',
    region: 'trencin'
  },
  {
    id: '66fde54b-d048-4b7e-ad6a-50f7dc4dc315',
    category: Category.EVENTS,
    title: 'Cyklisticka tura',
    text: 'Co poviete na cyklisticku turu? Tuto sobotu. Islo by sa k priehrade a mohli by sme si spravit aj piknik.',
    userId: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    photo: '../../assets/users/monika.jpg',
    region: 'pezinok'
  },
  {
    id: 'f10ac53a-9575-44fe-bb27-27741f828f8d',
    category: Category.PLUMBER,
    title: 'Oprava strechy',
    text: 'Surne. Potrebovala by som opravit strechu. Strasne mi zateka do domu. Ak by mal niekto cas, prosim kontaktujte ma.',
    userId: 'e297073b-52ac-4444-a6c0-db59d980b09e',
    photo: '../../assets/users/jozefina.jpg',
    region: 'bratislava'
  },
  {
    id: '161e4178-3dd7-41f0-bcae-e2628bbcfea3',
    category: Category.PLUMBER,
    title: 'Opravim cokolvek',
    text: 'Ahojte susedia. Ak by potreboval ktokolvek cokolvek opravit ozvite sa.',
    userId: '16ea0108-84aa-4693-afe6-da850ea61d86',
    photo: '../../assets/users/pavol.jpg',
    region: 'trencin'
  },
  {
    id: '3bf46c05-7ccc-417b-a68f-266004b97f31',
    category: Category.PLUMBER,
    title: 'Stavebne prace',
    text: 'Zdravim, som vyuceny murar a rad by som pomohol tomu kto bude potrebovat. Pomozem predovsetkym so stavebnymi pracami.',
    userId: '63cad2f2-4138-4763-9783-aaff6a53b586',
    photo: '../../assets/users/maros.jpg',
    region: 'trencin'
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
    password: 'maros',
    phone: '+421 567 349 122',
    photo: '../../assets/users/maros.jpg',
  },
  {
    id: '4a4fd8d2-1b36-415d-804d-a980e6973336',
    name: 'Monika',
    email: 'monika@sused.com',
    password: 'monika',
    phone: '+421 876 998 256',
    photo: '../../assets/users/monika.jpg',
  },
  {
    id: '16ea0108-84aa-4693-afe6-da850ea61d86',
    name: 'Pavol',
    email: 'palo@sused.com',
    password: 'palo',
    phone: '+421 934 447 891',
    photo: '../../assets/users/pavol.jpg',
  },

];
