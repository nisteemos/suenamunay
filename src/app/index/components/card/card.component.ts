import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  data: any = [{
    "edubot": {
      "title": "EDUBOT",
      "body": "Presentamos las tecnologías a niñas, niños y adolescentes de forma lúdica generando aprendizajes significativos a tráves del juego."
    },
    "sumaletiempo": {
      "title": "#SUMALETIEMPO",
      "body": "Fortalecer y promover los procesos de buen trato y convivencia en las instituciones educativas del país, con el fin de prevenir hechos de violencia."
    }
  }];
  
  
  
  
  constructor() { 
  }

  ngOnInit(): void {
  }
  
}
