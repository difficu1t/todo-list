export interface CategoryState {
  categorys: ICategory[]
}

export interface ICategory {
  id: number;
  name: string;
  active: boolean;
}