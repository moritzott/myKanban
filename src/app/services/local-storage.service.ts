import { Injectable } from '@angular/core';
import { MyKanban } from '../interfaces/my-kanban';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public writeToLocalStorage(data: MyKanban): void {
    localStorage.setItem('myKanban', JSON.stringify(data));
  }

  public getDataFromLocalStorage(): MyKanban | undefined {
    const data: string | null = localStorage.getItem('myKanban');
    if (data !== null) {
      const parsedData: MyKanban = JSON.parse(data);
      return parsedData;
    } else {
      return undefined;
    }
  }
}
