import { Component, inject } from '@angular/core'
import { Empleado } from '../../entity/empleado'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { EmpleadoService } from '../../servicio/empleado.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css',
})
export class RegistrarEmpleadoComponent {
  empleado: Empleado = new Empleado()
  private readonly router: Router = inject(Router)
  private readonly productsSVC = inject(EmpleadoService)

  onSubmit(): void {
    this.productsSVC.registrarEmpleado(this.empleado).subscribe({
      next: (dato) => {
        this.router.navigate(['/empleados'])
      },
      error: (error) => console.log(error),
      complete: () => console.log('registro de empleo completado'),
    })
  }
}
