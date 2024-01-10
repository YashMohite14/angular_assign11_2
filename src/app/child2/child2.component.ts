import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';


@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component {

  CountCa : number;

 constructor(private obj : StringService){
  this.CountCa = this.obj.CountCapital('This is a String with Capitals');
}

}
