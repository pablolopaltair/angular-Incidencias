import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';



//Importación del Servicio
import { IncidenciaService } from 'src/app/servicios/incidencia.service';

//Importación del Modelo
import { Incidencia } from '../../modelos/incidencia.model';





@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css'],
  
})
export class RevisionComponent implements OnInit {
  //Configuración de busqueda
  searchText:any;
  //Array de Incidencia
  Incidencias : Incidencia[]

  constructor(private incidenciaService : IncidenciaService) { }

  //Listará los datos de Incidencias
  ngOnInit(): void {
    this.incidenciaService.getIncidencias().subscribe((res) => {
        this.Incidencias = res.map((e)=>{
          return{
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Incidencia)
          }
        })
      }
    )
  }

  search(){

  }
  //Borrará el incidencia seleccionado (Se hace en este componente ya que no es necesario
  //crear un nuevo componente para el borrado)
  updateRow = (incidencia) => this.incidenciaService.checkIncidencia(incidencia);

}
