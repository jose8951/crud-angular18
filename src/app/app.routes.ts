import { Routes } from '@angular/router'
import { ListaEmpleadoComponent } from './componentes/lista-empleado/lista-empleado.component'
import { RegistrarEmpleadoComponent } from './componentes/registrar-empleado/registrar-empleado.component'
import { DetallesEmpleadoComponent } from './componentes/detalles-empleado/detalles-empleado.component'
import { ActualizarEmpleadoComponent } from './componentes/actualizar-empleado/actualizar-empleado.component'
import { EliminarEmpleadoComponent } from './componentes/eliminar-empleado/eliminar-empleado.component'

export const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadoComponent },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'detalles-empleado/:id', component: DetallesEmpleadoComponent },
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
  { path: 'eliminar-empleado/:id', component: EliminarEmpleadoComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
]
