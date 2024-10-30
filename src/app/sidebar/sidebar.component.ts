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
  isSubmenuOpen: boolean = false;
  subMenuSelected:string = '';
  toggleSidebar() {
    this.opened = !this.opened;
  }

  closeSidebar() {
    this.opened = false;
    this.close.emit();
  }

  toggleMenu(selectedMenu: string) {
    this.selected = this.selected === selectedMenu ? '' : selectedMenu;
    this.isSubmenuOpen = !this.isSubmenuOpen; // Toggle submenu state

  }

  toggleSubMenu(selectedSubMenu: string) {

    this.subMenuSelected = selectedSubMenu;
    console.log(selectedSubMenu)
     

  }
  accordion() {
    this.subMenuSelected = "accordion"

    this.router.navigate(['/accordion'])

  }
  alerts() {
// this.toggleMenu("alert")
this.subMenuSelected = "alerts";
    this.router.navigate(['/alerts']);
  }
  avatars() {
    this.subMenuSelected = "avatars";
    this.router.navigate(['/avatars'])
  }
  badge() {
    this.subMenuSelected = "badge";
    this.router.navigate(['/badge'])
  }

breadcump() {
  this.subMenuSelected = "breadcrumb";
    this.router.navigate(['/breadcrumb'])
  }

  buttons() {
    this.subMenuSelected = "buttons";
    this.router.navigate(['/buttons'])
  }

  groupButtons() {
    this.subMenuSelected = "buttons-group";
    this.router.navigate(['/buttons-group'])
  }

  cards() {
    this.subMenuSelected = "cards";
    this.router.navigate(['/cards'])
  }
  carousel() {
    this.subMenuSelected = "carousel";
    this.router.navigate(['/carousel'])
  }

  dropdowns() {
    this.subMenuSelected = "dropdowns";
    this.router.navigate(['/dropdowns'])
  }

  images() {
    this.subMenuSelected = "images"
    this.router.navigate(['/images'])
  }
  list() {
    this.subMenuSelected = "list";
    this.router.navigate(['/list'])
  }
  modals() {
    this.subMenuSelected = "modals"
    this.router.navigate(['/modals'])
  }


  notifications() {
    this.subMenuSelected = "notifications"
    this.router.navigate(['/notifications'])
  }
  pagination() {
    this.subMenuSelected = "pagination"
    this.router.navigate(['/pagination'])
  }
  popovers() {
    this.subMenuSelected = "popovers"
    this.router.navigate(['/popovers'])
  }
  progress() {
    this.subMenuSelected = "progress"
    this.router.navigate(['/progress'])
  }
  spinners() {
    this.subMenuSelected = "spinners"
    this.router.navigate(['/spinners'])
  }
  tabs() {
    this.subMenuSelected = "tabs"
    this.router.navigate(['/tabs'])
  }
  tooltips() {
    this.subMenuSelected = "tooltips"
    this.router.navigate(['/tooltips'])
  }
  videos() {
    this.subMenuSelected = "videos"
    this.router.navigate(['/videos'])
  }




}
