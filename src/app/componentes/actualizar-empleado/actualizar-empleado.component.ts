import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { EmpleadoService } from '../../servicio/empleado.service'
import { Empleado } from '../../entity/empleado'

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css',
})
export class ActualizarEmpleadoComponent implements OnInit {
  id!: number
  empleado: Empleado = new Empleado()
  private readonly router = inject(Router)
  private readonly empleadoSVC = inject(EmpleadoService)
  private readonly route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empleadoSVC.obtenerEmpleadoPorId(this.id).subscribe({
      next: (dato) => {
        this.empleado = dato
      },
      error: (err) => {
        console.log('error al obtener el empleado')
      },
      complete: () => {
        console.log('Carga del empleado completada')
      },
    })
  }

  onSubmit(): void {
    if(this.empleado){
      this.empleadoSVC.actualizarEmpleado(this.id, this.empleado).subscribe({
        next: (dato) => {this.router.navigate(['/empleados'])},
        error: (err) =>{console.log(err)},
        complete: () => {console.log('actualizado completada')}
      })
    }
  }
}


//2024-09-21T11:58:50.927446

//01/01/2000