import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'IssueFilter'
})
export class IssuePipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toString().toLowerCase();
      return items.filter((it:any) => {
        return it.issueName.toString().toLowerCase().includes(searchText)
    });
  }
}
