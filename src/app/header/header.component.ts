import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSlideToggleModule, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() themeToggle = new EventEmitter<boolean>();
  @Output() sidebarToggle = new EventEmitter<void>(); // Emit to toggle sidebar
  @Input() isMobile: boolean = false; // Accept mobile state as input
  @Input() opened: boolean = false; // Accept sidebar opened state as input
  isDarkTheme: boolean = false; // Default to light theme

  toggleTheme(event: any) {
    this.isDarkTheme = event.checked; // Update theme based on the toggle state
    this.themeToggle.emit(this.isDarkTheme); // Emit the current theme state
  }

  toggleSidebar() {
    this.sidebarToggle.emit(); // Notify parent to toggle the sidebar
  }
}
