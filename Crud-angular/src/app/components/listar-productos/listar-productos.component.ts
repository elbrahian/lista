import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';
import {PageEvent} from '@angular/material/paginator'
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listproductos:Producto[]=[]
  constructor(private ProductoServices:ProductoService,private toasar:ToastrService){}
  ngOnInit(){
    this.obtenerproductos()
  }
  obtenerproductos():void{
    this.ProductoServices.getproductos().subscribe(data=>{
      this.listproductos=data.producto
      console.log(data)
    },error=>{
      console.log(error)
    })
  }
  eliminarproducto(id:any):void{
      this.ProductoServices.eliminarprocuducto(id).subscribe(data=>{
      this.toasar.error('El producto fue elimado con exito','Producto Eliminado');
      this.obtenerproductos();
    },error=>{
      console.log(error);
    });
  }
  refresh():void {
    window.location.reload();
  }
  paginacion(event:PageEvent):void{
    this.ProductoServices.paginador(event.pageIndex,event.pageSize).subscribe(data=>{
      this.listproductos=data.producto
    })
  }
}
