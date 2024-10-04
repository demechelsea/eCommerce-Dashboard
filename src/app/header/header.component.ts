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
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() themeToggle = new EventEmitter<boolean>();
  @Output() sidebarToggle = new EventEmitter<void>();
  @Input() isMobile: boolean = false;
  @Input() opened: boolean = false;
  @Input() isDarkTheme: boolean = false;

  toggleTheme(event: any) {
    this.isDarkTheme = event.checked; // Toggle between light and dark theme
    this.themeToggle.emit(this.isDarkTheme);
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}
