import { Component, HostListener, Renderer2 } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, SidebarComponent, DashboardComponent, CommonModule, MatIconModule] 
})
export class AppComponent {
  isDarkTheme: boolean = false; 
  isMobile: boolean = false;
  sidebarOpened: boolean = false; 

  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeSidebar() {
    this.sidebarOpened = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 1025; 
    this.sidebarOpened = !this.isMobile; 
  }

  ngOnInit() {
    this.onResize(); 
  }

  toggleTheme(isDark: boolean) {
    this.isDarkTheme = isDark; 
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'myapp-dark-theme');
      this.renderer.removeClass(document.body, 'myapp-light-theme');
    } else {
      this.renderer.addClass(document.body, 'myapp-light-theme');
      this.renderer.removeClass(document.body, 'myapp-dark-theme');
    }
  }
}
