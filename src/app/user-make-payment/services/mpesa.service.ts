import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpesaService {
 private username ='Azs2KejU1ARvIL5JdJsARbV2gDrWmpOB'
private password ='hipGvFJbOxri330c'
  constructor(
    private http:HttpClient
  ) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append("Authorization", "Basic " + btoa(this.username+":"+this.password).toString()); 
  }
  getToken(){
let headers = new Headers();
headers.append("Authorization", "Basic " + btoa(this.username+":"+this.password).toString());
fetch("/oauth/v1/generate?grant_type=client_credentials",

{headers, mode:'no-cors', })
  .then(result => console.log(result))
  .catch(error => console.log(error));
  // return this.http.get(
  //   this.url, {headers: new HttpHeaders({
  //     'username':this.username,
  //     'password':this.password
  //   })}
  // )
  
  }
  getDarajaDeveloperToken(){
    let headers =new HttpHeaders()
    this.createAuthorizationHeader(headers)
    return this.http.get<{}>(
      '/oauth/v1/generate',
      {headers:headers, withCredentials:true, params:{'grant_type':'client_credentials'}},
      )
  }
}

