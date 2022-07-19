import { dataType, storeItemProps } from "./types"

//search feature logic
export const search = (input: string, data: dataType ): any  => {
   const filteredData = data.filter((object: storeItemProps) => object.name.toLowerCase().includes(input));
   return filteredData;
}

//order by price logic
const toNumber = (str: string) => +str.replace('$', ''); //transform price format to numbers

export const orderByPrice = (ascendingPrice: boolean, data: dataType) => {
   const clonedData = data; //make a copy of the original data to avoid side effects from sorting the array
   clonedData.sort((a: storeItemProps, b: storeItemProps) =>
     ascendingPrice
       ? toNumber(a.price) - toNumber(b.price)
       : toNumber(b.price) - toNumber(a.price)
   );
   return clonedData;
 };