import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilterpipe'
})

export class MyfilterpipePipe implements PipeTransform {

  transform(items: any, breadType: string, pizzaType: string, pizzaCategory: string, ...args: any[]): any {

    // Returns empty if no items are found
    if (!items) return [];
    if (!breadType && !pizzaType && !pizzaCategory) return items;

    let newListItems = [];

    newListItems = items.filter((item) => {
      if (breadType !== "" && pizzaType === "" && pizzaCategory === "") {
        return item.base === breadType
      } else if (breadType !== "" && pizzaType !== "" && pizzaCategory === "") {
        return item.base === breadType && item.type === pizzaType
      } else if (breadType !== "" && pizzaType !== "" && pizzaCategory !== "") {
        return item.base === breadType && item.type === pizzaType && item.category === pizzaCategory
      }
    })

    return newListItems
  }

}
