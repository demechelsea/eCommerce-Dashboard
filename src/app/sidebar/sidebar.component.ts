import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() opened: boolean = false; // Accept sidebar state as input
  @Input() isMobile: boolean = false; // Accept mobile state as input
  @Input() isDarkTheme: boolean = false; // Accept theme state as input
  @Output() close = new EventEmitter<void>(); // Emit close event for sidebar

  selected: string = ''; // Track selected menu item

  toggleSidebar() {
    this.opened = !this.opened; // Toggle sidebar visibility
  }

  closeSidebar() {
    this.opened = false; // Close the sidebar
    this.close.emit(); // Emit the close event
  }

  toggleMenu(selectedMenu: string) {
    this.selected = this.selected === selectedMenu ? '' : selectedMenu; // Toggle menu selection
  }
}
