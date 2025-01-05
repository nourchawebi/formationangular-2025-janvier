import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  buttonClass = 'red'; // Default class

  toggleColor() {
    this.buttonClass = this.buttonClass === 'red' ? 'blue' : 'red';
  }
  colors: string[] = ['red', 'blue', 'green', 'orange', 'purple']; // Array of colors
  currentColor: string = this.colors[0]; // Default color
  colorIndex: number = 0;

  changeColor() {
    // Incrémenter l'index pour passer à la couleur suivante
    // Le modulo (%) permet de revenir à 0 quand on atteint la fin du tableau
    this.colorIndex = (this.colorIndex + 1) % this.colors.length; // Cycle through colors
    this.currentColor = this.colors[this.colorIndex];
  }
}
