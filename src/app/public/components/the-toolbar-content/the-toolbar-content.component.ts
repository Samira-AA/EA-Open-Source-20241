import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-the-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatButton,
    RouterLink,
    MatIconButton
  ],
  templateUrl: './the-toolbar-content.component.html',
  styleUrl: './the-toolbar-content.component.css'
})
export class TheToolbarContentComponent {

}
