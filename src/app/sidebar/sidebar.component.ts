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
  @Input() opened: boolean = false; 
  @Input() isMobile: boolean = false; 
  @Input() isDarkTheme: boolean = false; 
  @Output() close = new EventEmitter<void>(); 

  selected: string = ''; 

  toggleSidebar() {
    this.opened = !this.opened; 
  }

  closeSidebar() {
    this.opened = false; 
    this.close.emit(); 
  }

  toggleMenu(selectedMenu: string) {
    this.selected = this.selected === selectedMenu ? '' : selectedMenu; 
  }
}
