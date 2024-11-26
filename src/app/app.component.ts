import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle = "monitor-crypto"
  isMinimized = true; 

  toggleSidebar() {
    this.isMinimized = !this.isMinimized; 
  }
}