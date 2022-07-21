import { DataType, StoreItemType } from "./types"

//search feature logic
export const search = (input: string, data: DataType): DataType  => {
   const filteredData = data?.filter((object: StoreItemType) => object.name.toLowerCase().includes(input));
   return filteredData;
}

//order by price logic
const toNumber = (str: string): number => +str.replace('$', ''); //transform from string price format  to number

export const orderByPrice = (ascendingPrice: boolean, data: DataType): void => {
   data.sort((prevItem: StoreItemType, currItem: StoreItemType) =>
     ascendingPrice
       ? toNumber(prevItem.price) - toNumber(currItem.price)
       : toNumber(currItem.price) - toNumber(prevItem.price)
   );
 };

 //filter items by type logic
 export const eliminateDuplicates = (items: Array<any>): Array<any> => [...new Set<object>(items)]; //eliminate type duplicates

 export const filterByType = (type: string, data: DataType): Array<StoreItemType> => { 
   const filteredData = data.filter((item: StoreItemType) => type ? item.type.toLowerCase() === type : item);
   return filteredData
}