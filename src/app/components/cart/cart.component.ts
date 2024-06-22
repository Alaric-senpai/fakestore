import { Component, OnInit } from '@angular/core';
import { FakesoreService } from '../../services/fakesore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  carts: any[] = [];

  error :string | null = null;

  constructor(private fakestore:FakesoreService){}

  ngOnInit(): void {
      this.getcarts();
  }

  async getcarts(): Promise<void>{
    try {
      this.carts =  await this.fakestore.getcarts();
    } catch (error:any) {
      this.error = error.message;
      console.error("error detected", error)
    }
  }
}
