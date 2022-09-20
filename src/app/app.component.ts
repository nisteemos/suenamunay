import { Component } from '@angular/core';
import { Tooltip, FloatingActionButton, Sidenav } from "materialize-css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Zueña Munay';
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  ngOnInit(): void {
    //M.toast({ html: 'Bienvenido...' });
    let elementNav = document.querySelectorAll(".sidenav");
    let elementFloatingActionButton = document.querySelectorAll(".fixed-action-btn");
    let elementTooltipped = document.querySelectorAll('.tooltipped');
    Tooltip.init(elementTooltipped);
    FloatingActionButton.init(elementFloatingActionButton);
    Sidenav.init(elementNav);
    if ("loading" in HTMLImageElement.prototype) {
        console.log("El navegador soporta `lazy-loading`...");
    } else {
        console.log("`lazy-loading` no soportado...");
    }
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }

    ngAfterContentInit(): void {
      //Called after ngOnInit when the component's or directive's content has been initialized.
      //Add 'implements AfterContentInit' to the class.

    }

    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.

    }

    ngAfterViewChecked(): void {
      //Called after every check of the component's view. Applies to components only.
      //Add 'implements AfterViewChecked' to the class.

    }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
