import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FakesoreService } from '../../services/fakesore.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  
  product: any ;

  error: string| null = null;

   constructor(private router:ActivatedRoute, private fakestoreservice: FakesoreService ){}
  
   ngOnInit(): void {
       const productId= this.router.snapshot.paramMap.get('id');
        this.getProductInfo(productId);

   }

   getProductInfo(productId: any){
    this.fakestoreservice.getProduct(productId).subscribe(
      (data)=>{
        this.product = data;
        console.log(this.product)
      },
      (error) =>{
        console.error("error occured when fetching", error)
      }
    )

   }

}
