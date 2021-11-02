import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MpesaService {
  username:string ='Azs2KejU1ARvIL5JdJsARbV2gDrWmpOB'
  password:string ='hipGvFJbOxri330c'
  url='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
  constructor(
    private http:HttpClient
  ) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ=='); 
  }
  getToken(){
let headers = new Headers();
headers.append("Authorization", "Basic " + btoa(this.username+":"+this.password));
fetch(this.url,

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
}

// let headers = new Headers(
// {
//   'username':this.username,
//   'password':this.password
// }
// );
// return fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", { headers, mode:'no-cors' }, )
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log(error));