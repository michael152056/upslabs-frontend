import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { RouterModule, Route} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { TourVirtualComponent } from './tour-virtual/tour-virtual.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ComputacionAvanzadaComponent } from './computacion-avanzada/computacion-avanzada.component';
import { Networking1Component } from './networking1/networking1.component';
import { Networking2Component } from './networking2/networking2.component';
import { Networking3Component } from './networking3/networking3.component';
import { IhmAframeComponent } from './ihm-aframe/ihm-aframe.component';
import { CaAframeComponent } from './ca-aframe/ca-aframe.component';
import { N1AframeComponent } from './n1-aframe/n1-aframe.component';
import { N2AframeComponent } from './n2-aframe/n2-aframe.component';
import { N3AframeComponent } from './n3-aframe/n3-aframe.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { VerHorarioComponent } from './ver-horario/ver-horario.component';
import { AuthService } from './services/auth.service';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ActualizarDatosComponent } from './actualizar-datos/actualizar-datos.component';
import { ReservaLabComponent } from './reserva-lab/reserva-lab.component';
import { DashboardClienteComponent } from './dashboard-cliente/dashboard-cliente.component';
import { MenuDashComponent } from './menu-dash/menu-dash.component';
import { CalificarEventosComponent } from './calificar-eventos/calificar-eventos.component';
import { FilterPipe } from './pipes/filter.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CrudHorariosComponent } from './crud-horarios/crud-horarios.component';
import { CrearHorarioComponent } from './crear-horario/crear-horario.component';
import { CrudServiciosComponent } from './crud-servicios/crud-servicios.component';
import { CrearNoticiaComponent } from './crear-noticia/crear-noticia.component';
import { CrudNoticiasComponent } from './crud-noticias/crud-noticias.component';
import { CrudEventosComponent } from './crud-eventos/crud-eventos.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { CabezaUsuarioComponent } from './cabeza-usuario/cabeza-usuario.component';

import { ActualizarDatosClienteComponent } from './actualizar-datos-cliente/actualizar-datos-cliente.component';

import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { HorarioComponent } from './horario/horario.component';

import {FullCalendarModule} from 'primeng/fullcalendar';
import { CrearEquipoComponent } from './crear-equipo/crear-equipo.component';
import { CrudEquiposComponent } from './crud-equipos/crud-equipos.component';
import { ReservaEquipoComponent } from './reserva-equipo/reserva-equipo.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { TipoEventosPipe } from './pipes/tipo-eventos.pipe';
import { TipoPipe } from './pipes/tipo.pipe';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// If any issue using previous fonts import. you can try this:
// import pdfFonts from "pdfmake/build/vfs_fonts";

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

/* import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

 */


const rutas:Route[] = [
  {path: 'home', component:HomeComponent},
  {path: 'acerca', component:AcercaComponent},
  {path: 'docentes', component:DocentesComponent},
  {path: 'contactanos', component:ContactanosComponent},
  {path: 'laboratorios',  component:LaboratoriosComponent},
  {path: 'eventos',  component:EventosComponent},
  {path: 'computacion_avanzada', component:ComputacionAvanzadaComponent},
  {path: 'networking1', component:Networking1Component},
  {path: 'networking2', component:Networking2Component},
  {path: 'networking3', component:Networking3Component},
  {path: 'login', component:LoginComponent},
  {path: 'ihm_aframe', component:IhmAframeComponent},
  {path: 'productos', component:ListarProductosComponent},
  {path: 'crear-producto', component:CrearProductoComponent},
  {path: 'editar-producto/:id', component:CrearProductoComponent},
  {path: 'ca_aframe', component:CaAframeComponent},
  {path: 'n1_aframe', component:N1AframeComponent},
  {path: 'n2_aframe', component:N2AframeComponent},
  {path: 'n3_aframe', component:N3AframeComponent},
  {path: 'ver-horario', component:VerHorarioComponent},
  {path:'actDatos/:correo',component:ActualizarDatosComponent},
  {path:'actDatosCliente/:correo',component:ActualizarDatosClienteComponent},
  {path:'reservaLab',component:ReservaLabComponent},
  {path:'reservaEquipo',component:ReservaEquipoComponent},

  {path:'DashboardCliente',component:DashboardClienteComponent},
  {path:'DashboardAdmin',component:DashboardAdminComponent},

  {path:'crudUsuarios',component:CrudUsuariosComponent},
  {path:'crear-usuario',component:CrearUsuarioComponent},
  {path:'editar-usuario/:correo2',component:CrearUsuarioComponent},


  {path:'crudHorarios',component:CrudHorariosComponent},
  {path:'crear-horario',component:CrearHorarioComponent},
  {path:'editar-horario/:id',component:CrearHorarioComponent},



  
  {path:'crudEquipos',component:CrudEquiposComponent},
  {path:'crear-equipo',component:CrearEquipoComponent},
  {path:'editar-equipo/:id',component:CrearEquipoComponent},


  {path:'crudNoticias',component:CrudNoticiasComponent},
  {path:'crear-noticia',component:CrearNoticiaComponent},
  {path:'editar-noticia/:id',component:CrearNoticiaComponent},

  {path:'crudEventos',component:CrudEventosComponent},
  {path:'crear-evento',component:CrearEventoComponent},
  {path:'editar-evento/:id',component:CrearEventoComponent},

  {path:'verHorario',component:VerHorarioComponent},
  {path:'calificarEventos',component:CalificarEventosComponent},

  {path:'horario',component:HorarioComponent},
 

  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    HomeComponent,
    AcercaComponent,
    LaboratoriosComponent,
    LoginComponent,
    EncabezadoComponent,
    TourVirtualComponent,
    ComputacionAvanzadaComponent,
    Networking1Component,
    Networking2Component,
    Networking3Component,
    IhmAframeComponent,
    CaAframeComponent,
    N1AframeComponent,
    N2AframeComponent,
    N3AframeComponent,
    ContactanosComponent,
    DocentesComponent,
    EventosComponent,
    VerHorarioComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    ActualizarDatosComponent,
    ReservaLabComponent,
    DashboardClienteComponent,
    MenuDashComponent,
    CalificarEventosComponent,
    FilterPipe,
    DashboardAdminComponent,
    MenuAdminComponent,
    CrudUsuariosComponent,
    CrearUsuarioComponent,
    CrudHorariosComponent,
    CrearHorarioComponent,
    CrudServiciosComponent,
    CrearNoticiaComponent,
    CrudNoticiasComponent,
    CrudEventosComponent,
    CrearEventoComponent,
    CabezaUsuarioComponent,
    ActualizarDatosClienteComponent,
    HorarioComponent,
    CrearEquipoComponent,
    CrudEquiposComponent,
    ReservaEquipoComponent,
    FechaPipe,
    TipoEventosPipe,
    TipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FullCalendarModule,
    
/*     MatTableDataSource,
    MatPaginatorModule */
  ],
  providers: [CookieService, AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
