import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})  
export class WikipediaService {

  constructor(private html: HttpClient) { }

  public search(term: string) {
    return this.html.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
