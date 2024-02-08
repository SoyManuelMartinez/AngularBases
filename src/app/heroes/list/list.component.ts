import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Vegetta777", "ElRichMC", "alexelcapo", 
  "chincheto77", "willyrex"];
  public heroeBorrado?: string = "";
  public borrarElemento(): void {
    this.heroeBorrado = this.heroNames.pop();
  }


}
