import { Paginator } from './../models/paginator.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Irregularity } from '../models/irregularity.model';

@Injectable()
export class IrregularityService {
    constructor(private http: HttpClient) { }

    registerIrregularity(irregularity: Irregularity) {
        return this.http.post(`${environment.API_URL}/api/irregularity-reports`, irregularity);
    }
    public getIrregularities() {
        return this.http.get(`${environment.API_URL}/api/irregularity-reports`);
    }

    public getIrregularitiesPage(paginator: Paginator) {
      return this.http.get(`${environment.API_URL}/api/irregularity-reports?page=${paginator.current_page}`);
  }
}
