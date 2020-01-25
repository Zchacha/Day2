import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  hello() {
    console.log('Hello from service');
  }
  getEmployee(condition: any) {
    const params = new HttpParams({ fromObject: condition });
    return this.http
      .get<any[]>('/workshop-api/api/employee/queryEmployeeByCondition', {
        params
      });
  }
}
