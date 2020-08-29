import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent implements OnInit {
 public state: string = 'login';
 public goTo(state){
   this.state = state;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
