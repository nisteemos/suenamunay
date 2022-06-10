import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { CampoCreativoComponent } from './components/campo-creativo/campo-creativo.component';
import { CardComponent } from './components/card/card.component';
import { HablemosComponent } from './components/hablemos/hablemos.component';
import { MediaSliderComponent } from './components/media-slider/media-slider.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    IndexComponent,
    MediaSliderComponent,
    CardComponent,
    ProyectosComponent,
    CampoCreativoComponent,
    HablemosComponent,
    AliadosComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
