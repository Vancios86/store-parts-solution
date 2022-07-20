import { dataType, storeItemProps } from "./types"

//search feature logic
export const search = (input: string, data: dataType): any  => {
   const filteredData = data?.filter((object: storeItemProps) => object.name.toLowerCase().includes(input));
   return filteredData;
}

//order by price logic
const toNumber = (str: string) => +str.replace('$', ''); //transform from price format to numbers

export const orderByPrice = (ascendingPrice: boolean, data: dataType) => {
   const clonedData = data; //make a copy of the original data to avoid side effects from sort array method
   clonedData.sort((prevItem: storeItemProps, currItem: storeItemProps) =>
     ascendingPrice
       ? toNumber(prevItem.price) - toNumber(currItem.price)
       : toNumber(currItem.price) - toNumber(prevItem.price)
   );
   return clonedData;
 };

 //filter items by type logic
 export const eliminateDuplicates = (items: any) => [...new Set<object>(items)]; //eliminate type duplicates

 export const filterByType = (type: string, data: dataType): any => { 
   const filteredData = data.filter((item) => type ? item.type.toLowerCase() === type : item);
   return filteredData
}