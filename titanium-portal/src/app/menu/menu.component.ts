import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private router: Router) {}

  goToProfile() {
    // navigate to profile page
    console.log('Go to profile');
    this.router.navigate(['/profile']);
  }

  logout() {
    // clear auth + redirect
    console.log('Logout');
    this.router.navigate(['/login']);
  }

}

