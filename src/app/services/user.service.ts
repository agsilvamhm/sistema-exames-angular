import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpCliente: HttpClient) { }

  public salvarUsuario(user: any){
    return this.httpCliente.post(`${baserUrl}/usuarios`, user);
  }
}
