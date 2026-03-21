import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import { NgIf } from '@angular/common';
import { SideMenuComponent } from "./side-menu/side-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, NgIf, SideMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('titanium-portal');
   constructor(public router: Router) {}

  isLoginPage(): boolean {
    console.log('Current URL:', this.router.url);
    return this.router.url === '/login';
  }
}
