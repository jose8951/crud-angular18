import { Component, inject, OnInit } from '@angular/core'
import { Empleado } from '../../entity/empleado'
import { EmpleadoService } from '../../servicio/empleado.service'
import { ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-detalles-empleado',
  standalone: true,
  imports: [],
  templateUrl: './detalles-empleado.component.html',
  styleUrl: './detalles-empleado.component.css',
})
export class DetallesEmpleadoComponent implements OnInit {
  id!: number
  empleado: Empleado = new Empleado()
  private readonly empleadoSVC = inject(EmpleadoService)
  private readonly route = inject(ActivatedRoute)

  ngOnInit(): void {
    //obtiene el id que se le pasa por parametro
    //this.id=this.route.snapshot.params['id']
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.empleadoSVC.obtenerEmpleadoPorId(this.id).subscribe({
      next: (dato) => {
        this.empleado = dato
        swal.fire(`Detalles del empleado ${this.empleado.nombre}`)
      },
      error:(err) => {console.log(err)},
    })
  }
}
