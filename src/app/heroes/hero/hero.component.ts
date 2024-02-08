import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private _nombre: string = "ironman";
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public edad: number = 53;
  
  public get nombreEnMayusculas(): string {
    return this._nombre.toUpperCase();
  }

  public get dimeDescripcion(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre(): void {
    let nuevoNombre: string | null =prompt("Dime nuevo nombre");
    this.nombre = nuevoNombre+"";

  }

  public cambiarEdad(): void {
    let nuevaEdad: number | null = Number(prompt("Dime la nueva edad"));

    this.edad = nuevaEdad;

  }
  
  public reset(): void {
    this.nombre = "ironman"
    this.edad = 53;
  }

}
