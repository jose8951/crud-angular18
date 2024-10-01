import { Component, inject } from '@angular/core'
import { EmpleadoService } from '../../servicio/empleado.service'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-lista-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css',
})
export class ListaEmpleadoComponent {
  /*private readonly productsSVC = inject(EmpleadoService)
  products$ = this.productsSVC.getAllProducts()*/

  private readonly router: Router = inject(Router)
  //inyectamos el servicio de los empleados
  private readonly empleadosSVC = inject(EmpleadoService)

  //observable que obtiene los empleados de la lista
  empleado$ = this.empleadosSVC.getAllElementos()

  verDetallesDeEmpleado(id: number): void {
    this.router.navigate(['detalles-empleado', id])
  }

  actualizarEmpleado(id:number): void {
this.router.navigate(['actualizar-empleado', id])
  }

  eliminarEmpleado(id:number): void {
    this.router.navigate(['eliminar-empleado',id])
  }
}
