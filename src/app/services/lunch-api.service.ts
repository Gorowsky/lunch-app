import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LunchSpot } from '../model/lunch-spots';
import { tap } from 'rxjs/operators';

/**
 * Cachable system. Storage can be changed in module import.
 */

@Injectable()
export class LunchApiService {

  private PORT: string = "8081"
  private HOST: string = "localhost"
  private LUNCH_API_ROOT: string = `http://${this.HOST}:${this.PORT}`
  private lunchSpots$: BehaviorSubject<LunchSpot.Model> = new BehaviorSubject(undefined);

  constructor(
    private http: HttpClient,
  ) {}

  getLunchSpots(): Observable<LunchSpot.Model> {
    const lunchSpots = this.lunchSpots$.getValue();

    if (!lunchSpots) {
      return this.http
        .get<LunchSpot.Model>(`${this.LUNCH_API_ROOT}/lunch-spots`)
        .pipe(
          tap(lunchSpots => this.lunchSpots$.next(lunchSpots))
        );
    }

    return of(lunchSpots);
  }
}
