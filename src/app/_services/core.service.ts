import {Observable} from 'rxjs';

export interface CoreService {
  prefix: string;

  where(params: {}): Observable<any[]> | undefined;

  add(query: {}): Observable<any> | undefined;

  update(query: {}): Observable<any> | undefined;

  find(id: string): Observable<any> | undefined;

  delete(id: string): Observable<boolean> | undefined;
}
