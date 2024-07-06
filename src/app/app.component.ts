import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TheToolbarContentComponent} from "./public/components/the-toolbar-content/the-toolbar-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheToolbarContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc2401si729eau20211a046';
}
