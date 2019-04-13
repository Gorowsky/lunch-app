import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LunchSpot } from '../model/lunch-spots';
import { LocalStorageService } from 'angular-2-local-storage';
import { tap } from 'rxjs/operators';

/**
 * Cachable system. Storage can be changed in module import.
 */

@Injectable()
export class LunchApiService {

  private STORAGE_PREFIX = "lunch-api"
  private PORT: string = "8081"
  private HOST: string = "localhost"
  private LUNCH_API_ROOT: string = `http://${this.HOST}:${this.PORT}`

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {}

  private fromStorage(caller: string, stream: Observable<any>): Observable<any> {
    const data = this.storageService.get(`${this.STORAGE_PREFIX}-${caller}`);

    if (!data) {
      return stream
        .pipe(tap(data => this.storageService.set(`${this.STORAGE_PREFIX}-${caller}`, data)));
    }

    return of(data);
  }

  getLunchSpots(): Observable<LunchSpot.Model> {
    return this.fromStorage(
      "getLunchSpots",
      this.http.get<LunchSpot.Model>(`${this.LUNCH_API_ROOT}/lunch-spots`)
    );
  }

}