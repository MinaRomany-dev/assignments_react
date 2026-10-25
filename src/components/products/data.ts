 
 type propstype={
  id:number
  name:string,
  price:number,
  products :Producttype[]
  setproducts:React.Dispatch<React.SetStateAction<Producttype[]>>
 }


const products:Producttype[]=[

      {
  id:1,
    name:"product 1",
    price:90
 },{
   id:2,
 name:"product 2",
    price:115
 },{
   id:3,
   name:"product 3",
    price:105
 },
 {
   id:4,
   name:"product 4",
    price:300
 }
];
type Producttype={
  id:number,
  name :string,
  price :number
}
export  {products};
export type {propstype};
 