import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-group',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './buttons-group.component.html',
  styleUrl: './buttons-group.component.scss'
})
export class ButtonsGroupComponent {

}
