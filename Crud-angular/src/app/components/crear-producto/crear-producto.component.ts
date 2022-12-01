import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoFrom: FormGroup;
  titulo = "Crear Producto"
  id: string | null
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private ProductoServices: ProductoService, private aRouter: ActivatedRoute) {
    this.productoFrom = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
      estado: ['', Validators.required],
      unidad: [0, Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.eseditar()
  }
  agregarproducto() {
    console.log(this.productoFrom)
    const PRODUCTO: Producto = {
      nombre: this.productoFrom.get('producto')?.value,
      categoria: this.productoFrom.get('categoria')?.value,
      ubicacion: this.productoFrom.get('ubicacion')?.value,
      precio: this.productoFrom.get('precio')?.value,
      estado: this.productoFrom.get('estado')?.value,
      unidad: this.productoFrom.get('unidad')?.value
    }
    if(this.id !==null){
      this.ProductoServices.editproducto(this.id,PRODUCTO).subscribe(data=>{
        this.toastr.success('El producto Atualizado con Exito', 'Producto Atualizado!', { timeOut: 6000 });
        this.router.navigate(['/'])
      },error => {
        console.log(error);
        this.productoFrom.reset();
      })


    }else{
      this.ProductoServices.guardarproducto(PRODUCTO).subscribe(data => {
        this.toastr.success('El producto esta registrado con EXITO!', 'Producto Registrado!', { timeOut: 6000 });
        this.router.navigate(['/'])
      }, error => {
        console.log(error);
        this.productoFrom.reset();
      });
    }

  }
  eseditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto'
      this.ProductoServices.obtenerproducto(this.id).subscribe(data => {
        this.productoFrom.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
          estado: data.estado,
          unidad: data.unidad
        })
      })
    }

  }
  validateInputProduct() {
    return (this.productoFrom.get('producto')?.hasError('required') && this.productoFrom.get('producto')?.touched);
  }
}
