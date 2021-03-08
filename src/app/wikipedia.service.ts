import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})  
export class WikipediaService {

  constructor() { }

  public search(term: string) {
    return 'I am wikipedia search results'
  }
}
