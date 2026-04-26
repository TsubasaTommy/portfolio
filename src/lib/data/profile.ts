import { differenceInYears } from 'date-fns';

const birthDate = new Date(1998, 8, 25);

export const profile = {
  name: '山本 翼',
  nameRoman: 'Tsubasa Yamamoto',
  birthDate,
  birthYear: birthDate.getFullYear(),
  age: differenceInYears(new Date(), birthDate),
  role: 'TechLead',
  company: 'EustyleLaboratory',
  companyUrl: 'https://eustylelab.co.jp/',
  tagline: 'バックエンド設計と技術選定で、社内の標準をつくる。',
  heroSubtitle:
    'EustyleLaboratory の Aegis / Asgard チームで TechLead を務める。Go を中心に、信頼できる API とインフラを設計している。',
  about:
    'プロエンジニア歴は2年。中学時代に C 言語から始めたコーディング歴は10年を超える。技術提案が継続的に採用されるなかで技術選定を任され、TechLead に就任した。主領域はバックエンド設計と技術選定。得意フレームワークは Laravel、現在最も力を入れているのは Go。',
  links: {
    github: 'https://github.com/TsubasaTommy',
    email: 'jobtsubasayamamoto@gmail.com'
  }
} as const;

export type Profile = typeof profile;
