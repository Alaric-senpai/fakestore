import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagemissing',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './pagemissing.component.html',
  styleUrl: './pagemissing.component.css'
})
export class PagemissingComponent {

}
