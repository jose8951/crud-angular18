import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Empleado } from '../entity/empleado'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private readonly _http = inject(HttpClient)
  private readonly router: Router = inject(Router)
  private static readonly baseUrl = 'http://localhost:8081/api/v1'

  getAllElementos(): Observable<Empleado[]> {
    return this._http.get<Empleado[]>(`${EmpleadoService.baseUrl}`)
  }

  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this._http.get<Empleado>(`${EmpleadoService.baseUrl}/${id}`)
  }

  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this._http.post(`${EmpleadoService.baseUrl}`, empleado)
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this._http.put(`${EmpleadoService.baseUrl}/${id}`, empleado)
  }

  eliminarEmpleadoPorId(id: number): Observable<Object> {
    return this._http.delete(`${EmpleadoService.baseUrl}/${id}`)
  }

  /* getAllProducts(): Observable<any> {
    return this._http.get('https://fakestoreapi.com/products')
  }*/
}
