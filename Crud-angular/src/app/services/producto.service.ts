import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url=`http://localhost:8080/api/productos/`
  constructor(private http:HttpClient){ }
  getproductos():Observable<any>{
     return this.http.get<any>(this.url)
  }
  eliminarprocuducto(id:string):Observable<any>{
    return this.http.delete(this.url + id)
  }
  guardarproducto(producto:Producto):Observable<any>{
    return this.http.post(this.url ,producto)
  }
  obtenerproducto(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }
  editproducto(id:string,producto:Producto):Observable<any>{
    return this.http.put(this.url+id ,producto)
  }
  paginador(page:number,size:number):Observable<any>{
    return this.http.get(`${this.url}?page=${page}&size=${size}`)
  }
}
