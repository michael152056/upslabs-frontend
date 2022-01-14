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
import { HttpClientModule} from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { VerHorarioComponent } from './ver-horario/ver-horario.component';


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
  {path: 'ca_aframe', component:CaAframeComponent},
  {path: 'n1_aframe', component:N1AframeComponent},
  {path: 'n2_aframe', component:N2AframeComponent},
  {path: 'n3_aframe', component:N3AframeComponent},
  {path: 'ver-horario', component:VerHorarioComponent},
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
    VerHorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
