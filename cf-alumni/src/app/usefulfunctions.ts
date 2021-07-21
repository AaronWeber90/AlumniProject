export function SortDesc(a: any, b: any): number {
  let a_date: Date = new Date(a.date);
  let b_date: Date = new Date(b.date);
  return b_date.valueOf() - a_date.valueOf(); // desc
}

export function GetFirstElem(list: any, is_sort?: boolean): Object {
  // if (!is_sort) is_sort = false;
  if (is_sort) {
    list.sort(SortDesc);
  }
  return list[0];
}

export function GetGraduationYear(object: any): number {
  let date = new Date(object.date);
  return date.getFullYear();
}

export interface IPopular {
  name: string;
  date: Date;
  image: string;
  type: string
}