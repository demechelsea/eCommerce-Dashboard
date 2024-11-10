import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-avatars',
  standalone: true,
  imports: [MatCard,MatCardContent],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {

}
