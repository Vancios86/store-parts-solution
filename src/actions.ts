import { dataType, storeItemProps } from "./types"

export const search = (input: string, data: dataType )  => {
    data.filter((object: storeItemProps) => object.name.toLowerCase().includes(input));
}