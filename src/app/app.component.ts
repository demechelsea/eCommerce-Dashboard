import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, DashboardComponent, SidebarComponent, CommonModule]
})
export class AppComponent {
  isDarkTheme: boolean = false; // Default to light theme
  isMobile: boolean = false; // Track mobile state
  sidebarOpened: boolean = false; // Default sidebar state

  toggleTheme(isDark: boolean) {
    this.isDarkTheme = isDark; // Set the theme state
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened; // Toggle sidebar visibility
  }

  // Handle window resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 1025; // Determine if mobile
    if (!this.isMobile) {
      this.sidebarOpened = true; // Always show sidebar on larger screens
    }
  }
}
