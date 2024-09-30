import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() opened: boolean = true; // Sidebar opened by default on larger screens
  isMobile = false; // Track mobile state
  selected: string = ''; // Track the selected menu item

  ngOnInit() {
    this.adjustSidebarOnLoad(); // Adjust sidebar on page load
  }

  // Handle window resize to determine if it's mobile view
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 1025;
    if (this.isMobile) {
      this.opened = false; // Hide sidebar on mobile by default
    } else {
      this.opened = true; // Show sidebar on larger screens
    }
  }

  // Adjust sidebar on initial page load
  adjustSidebarOnLoad() {
    this.isMobile = window.innerWidth <= 1025;
    if (this.isMobile) {
      this.opened = false; // Hide sidebar if on mobile
    } else {
      this.opened = true; // Show sidebar on larger screens
    }
  }

  // Toggle the sidebar state
  toggleSidebar() {
    this.opened = !this.opened;
  }

  // Toggle the selected menu item
  toggleMenu(menu: string) {
    this.selected = this.selected === menu ? '' : menu;
  }
}
