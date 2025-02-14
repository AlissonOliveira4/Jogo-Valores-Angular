import { Component, inject } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';


@Component({
  selector: 'app-nav-bar',
  imports: [ OverlayComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
}
