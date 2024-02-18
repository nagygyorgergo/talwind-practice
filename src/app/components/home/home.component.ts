import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isSidebarOpen = false; // Sidebar state

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
