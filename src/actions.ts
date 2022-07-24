import { Data, StoreObject, ItemType } from "./types"

//search feature logic
export const search = (input: string, data: Data): Data  => {
   const filteredData = data.filter((object: StoreObject) => object.name.toLowerCase().includes(input));
   return filteredData;
}

//order by price logic
export const toNumber = (str: string): number => +str.replace('$', ''); //transform from string price format  to number

export const orderByPrice = (ascendingPrice: boolean, data: Data): Data => {
  const clonedData = [...data]; // clone data to avoid mutating original data
   clonedData.sort((prevItem: StoreObject, currItem: StoreObject) =>
     ascendingPrice
       ? toNumber(prevItem.price) - toNumber(currItem.price)
       : toNumber(currItem.price) - toNumber(prevItem.price)
   );
   return clonedData;
 };

 //filter items by type logic
 export const eliminateDuplicates = (items: Array<any>): Array<any> => [...new Set<object>(items)]; //eliminate duplicates from any array

 export const filterByType = (type: ItemType, data: Data): Array<StoreObject> => { 
   const filteredData = data.filter((item: StoreObject) => type ? item.type.toLowerCase() === type : item);
   return filteredData;
}
