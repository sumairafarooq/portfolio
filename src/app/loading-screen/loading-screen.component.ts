import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent  implements OnInit {
  loadingPercentage: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startLoading();
  }

  startLoading(): void {
    const interval = setInterval(() => {
      if (this.loadingPercentage < 100) {
        this.loadingPercentage += 1;
      } else {
        clearInterval(interval);
        this.router.navigate(['/dashboard']);
      }
    }, 50); // Adjust the interval speed as needed
  }
}