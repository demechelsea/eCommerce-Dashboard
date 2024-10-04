import { Component, HostListener, Renderer2 } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Added for material theming

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, SidebarComponent, DashboardComponent, CommonModule, MatIconModule] // Removed unnecessary imports
})
export class AppComponent {
  isDarkTheme: boolean = false; // Track the theme
  isMobile: boolean = false; // Determine if the screen is mobile size
  sidebarOpened: boolean = false; // Sidebar state

  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeSidebar() {
    this.sidebarOpened = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 1025; // Check if the screen is mobile
    this.sidebarOpened = !this.isMobile; // Open sidebar on larger screens
  }

  ngOnInit() {
    this.onResize(); // Check screen size on component load
  }

  toggleTheme(isDark: boolean) {
    this.isDarkTheme = isDark; // Update the theme state
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'myapp-dark-theme');
      this.renderer.removeClass(document.body, 'myapp-light-theme');
    } else {
      this.renderer.addClass(document.body, 'myapp-light-theme');
      this.renderer.removeClass(document.body, 'myapp-dark-theme');
    }
  }
}
