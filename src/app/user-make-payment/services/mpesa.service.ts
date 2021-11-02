import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpesaService {
  constructor(
    private http:HttpClient
  ) { }


  getDarajaDeveloperToken(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-urlencoded');
    headers = headers.append('Authorization', 'Basic ' + btoa('Azs2KejU1ARvIL5JdJsARbV2gDrWmpOB' + ':' + 'hipGvFJbOxri330c'));
    return this.http.get(
      '/oauth/v1/generate',
      {headers:headers,  params:{"grant_type":"client_credentials"}},
      )
  }
}

