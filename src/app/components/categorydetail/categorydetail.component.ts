import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FakesoreService } from '../../services/fakesore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorydetail',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './categorydetail.component.html',
  styleUrl: './categorydetail.component.css'
})
export class CategorydetailComponent implements OnInit {
  category: any;
  error:string|null = null;
  products: any[] = [];
  constructor(private route:ActivatedRoute,
    private fakestore: FakesoreService
  ){}

  ngOnInit(): void {
      this.category = this.route.snapshot.paramMap.get('cat');
      if(this.category){
        this.getcategoryproducts(this.category);
      }
  }

  getcategoryproducts(category:string): void{
    this.fakestore.getcategory(category).subscribe(
      (data:any[])=>{
        this.products = data;
        console.log(this.products);
      },
      error =>{
        this.error = error.message;
        console.error("error detected", error);
      }
    )
  }

}
