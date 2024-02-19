import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwind-practice02';
  isSidebarOpen = false; // Sidebar state
  showNavbar: boolean = true;
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.url;
      if(this.currentRoute === '/login'){
        this.showNavbar = false;
      }
      else{
        this.showNavbar = true;
      }
      console.log(event.url);
    });
  }




  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
