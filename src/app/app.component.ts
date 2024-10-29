import { Component, HostListener, Renderer2 } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, SidebarComponent, DashboardComponent, CommonModule, MatIconModule,RouterOutlet] 
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
      this.renderer.addClass(document.body, 'dark');
      this.renderer.removeClass(document.body, 'light');
    } else {
      this.renderer.addClass(document.body, 'light');
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
