import {BaseModel} from "./base.model";

export class ProductModel implements BaseModel{
  created_at!: string;
  id!: string;
  updated_at!: string;
  price!: number;
  description! : string;
  name!: string
  colors!: any;
  tags! : any;
}
