export interface Product {
  id: number,
  img:string ,
  name: string,
  description:string ,
  price: number,
  rating:number,
  category:Category ,
  bgchanger: boolean,
  release_date: Date,
  code: string,
}

export enum Category {
  ALL='all',
  MOBILE= 'mobile',
  TV = 'tv',
  WATCH = 'watch'
}
