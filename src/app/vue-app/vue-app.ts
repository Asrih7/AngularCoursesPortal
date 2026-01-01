// src/app/vue-app/vue-app.component.ts
import { Component } from '@angular/core';
import { SafePipe } from '../safe-pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vue-app',
    imports: [CommonModule, RouterModule, SafePipe], 
  templateUrl: './vue-app.html',
  styleUrls: ['./vue-app.css']
})
export class VueAppComponent {
  vueAppUrl = 'assets/external-apps/vue-app/dist/index.html';
}