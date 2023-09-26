export interface CategoryState {
  categorys: ICategory[]
}

export interface ICategory {
  id: number;
  name: string;
  active: boolean;
}

export enum Category {
  ALL = "all",
  ACTIVE = "active",
  COMPLITED = "complited"
}