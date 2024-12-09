import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [MatCard,MatCardContent, MatIconModule],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {

}
