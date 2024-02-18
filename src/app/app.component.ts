import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwind-practice02';

  isSidebarOpen = false; // Sidebar state

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
