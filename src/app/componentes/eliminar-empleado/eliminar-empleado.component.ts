import { Component, inject, OnInit } from '@angular/core'
import { Empleado } from '../../entity/empleado'
import { ActivatedRoute, Router } from '@angular/router'
import { EmpleadoService } from '../../servicio/empleado.service'
import swal from 'sweetalert2'

@Component({
  selector: 'app-eliminar-empleado',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-empleado.component.html',
  styleUrl: './eliminar-empleado.component.css',
})
export class EliminarEmpleadoComponent implements OnInit {
  id!: number
  empleado: Empleado = new Empleado()
  private readonly route = inject(ActivatedRoute)
  private readonly empleadoSVC = inject(EmpleadoService)
  private readonly router = inject(Router)

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    //this.id= Number(this.route.snapshot.paramMap.get('id'))
    this.empleadoSVC.obtenerEmpleadoPorId(this.id).subscribe({
      next: (dato) => {
        this.empleado = dato
        swal.fire(`Detalles del empeado ${this.empleado.nombre}`)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('completado ok')
      },
    })
  }

  borrarEmpleado(id: number): void {
    this.empleadoSVC.eliminarEmpleadoPorId(this.id).subscribe({
      next: (dato) => {
        this.router.navigate(['/empleados'])
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('competado od')
      },
    })
  }
}
