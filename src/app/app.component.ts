import { Component, HostListener } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, SidebarComponent, DashboardComponent, CommonModule]
})
export class AppComponent {
  isDarkTheme: boolean = false; // Track the theme
  isMobile: boolean = false; // Determine if the screen is mobile size
  sidebarOpened: boolean = false; // Sidebar state

  // Toggle the sidebar visibility
  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened; // Toggle sidebar state
  }

  // Close the sidebar
  closeSidebar() {
    this.sidebarOpened = false; // Set sidebar to closed state
  }

  // Handle window resize events
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 1025; // Check if the screen is mobile
    this.sidebarOpened = !this.isMobile; // Open sidebar on larger screens
  }

  // Initialize component
  ngOnInit() {
    this.onResize(); // Check screen size on component load
  }

  // Toggle theme
  toggleTheme(isDark: boolean) {
    this.isDarkTheme = isDark; // Update the theme state
  }
}
