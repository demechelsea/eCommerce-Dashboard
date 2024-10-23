import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';

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
  constructor(private router: Router) { }
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


  accordion() {

    this.router.navigate(['/accordion'])
  }
  alerts() {
// this.toggleMenu("alert")
    this.router.navigate(['/alerts'])
  }
  avatars() {

    this.router.navigate(['/avatars'])
  }
  badge() {
    this.router.navigate(['/badge'])
  }

breadcump() {
    this.router.navigate(['/breadcrumb'])
  }

  buttons() {

    this.router.navigate(['/buttons'])
  }

  groupButtons() {

    this.router.navigate(['/buttons-group'])
  }

  cards() {

    this.router.navigate(['/cards'])
  }
  carousel() {

    this.router.navigate(['/carousel'])
  }

  dropdowns() {

    this.router.navigate(['/dropdowns'])
  }

  images() {

    this.router.navigate(['/images'])
  }
  list() {

    this.router.navigate(['/list'])
  }
  modals() {

    this.router.navigate(['/modals'])
  }


  notifications() {

    this.router.navigate(['/notifications'])
  }
  pagination() {

    this.router.navigate(['/pagination'])
  }
  popovers() {

    this.router.navigate(['/popovers'])
  }
  progress() {

    this.router.navigate(['/progress'])
  }
  spinners() {

    this.router.navigate(['/spinners'])
  }
  tabs() {

    this.router.navigate(['/tabs'])
  }
  tooltips() {

    this.router.navigate(['/tooltips'])
  }
  videos() {

    this.router.navigate(['/videos'])
  }




}
