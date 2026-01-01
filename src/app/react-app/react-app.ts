// src/app/react-app/react-app.component.ts
import { Component } from '@angular/core';
import { SafePipe } from '../safe-pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-react-app',
  imports: [CommonModule, RouterModule, SafePipe], 
  templateUrl: './react-app.html',
  styleUrls: ['./react-app.css']
})
export class ReactAppComponent {
  reactAppUrl = 'assets/external-apps/react-app/dist/index.html';
}