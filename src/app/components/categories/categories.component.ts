import { Component, OnInit } from '@angular/core';
import { FakesoreService } from '../../services/fakesore.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categories: any[] = [];
  error :string|null = null;
  constructor(private fakeservice: FakesoreService){}

  ngOnInit(): void {
   this.searchcategories();   
  }

  searchcategories() {
    this.fakeservice.getcategories().subscribe(
      (data: any[]) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error: any) => {
        this.error = error;
        console.error("error detected", error);
      }
    );
  }
  

}
