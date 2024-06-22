// src/app/dashboard/dashboard.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { FakesoreService } from '../../services/fakesore.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Pagination } from '../../interfaces/pagination';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() paginate: boolean = true;
  @Input() pagesize = 8;
  totalrecords: number = 0;

  products: any[] = [];
  paginatedProducts: any[] = [];
  error: string | null = null;

  pagination: Pagination = {
    page: 1,
    pagesize: 4,
    totalpages: 0
  };

  constructor(private fakestoreService: FakesoreService) {}

  ngOnInit(): void {
    this.initialPageination();
  }

  fetchproducts(): void {
    this.fakestoreService.getproducts().subscribe(
      (data: any[]) => {
        this.products = data;
        this.totalrecords = this.products.length;
        this.pagination.totalpages = Math.ceil(this.totalrecords / this.pagination.pagesize);
        this.refresh();
      },
      error => {
        this.error = 'Error fetching products';
        console.error('Error detected', error);
      }
    );
  }

  getStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return [
      ...Array(fullStars).fill(1),
      ...Array(halfStar).fill(0.5),
      ...Array(emptyStars).fill(0)
    ];
  }

  initialPageination(): void {
    this.fetchproducts();
  }

  refresh(): void {
    const start = (this.pagination.page - 1) * this.pagination.pagesize;
    const end = start + this.pagination.pagesize;
    this.paginatedProducts = this.products.slice(start, end);
  }

  previouspage(): void {
    if (this.pagination.page > 1) {
      this.pagination.page -= 1;
      this.refresh();
    }
  }

  nextpage(): void {
    if (this.pagination.page < this.pagination.totalpages) {
      this.pagination.page += 1;
      this.refresh();
    }
  }

  pagechange(page: number): void {
    this.pagination.page = page;
    this.refresh();
  }
}
