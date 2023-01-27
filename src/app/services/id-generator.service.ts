import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid'

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  constructor() { }

  public createId(): string {
    const newId = nanoid();
    return newId;
  }

}
