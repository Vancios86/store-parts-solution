import { dataType, storeItemProps } from "./types"

export const search = (input: string, data: dataType ): any  => {
   const filteredData = data.filter((object: storeItemProps) => object.name.toLowerCase().includes(input));
   return filteredData;
}