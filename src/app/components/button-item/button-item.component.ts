import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-item',
  imports: [],
  templateUrl: './button-item.component.html',
  styleUrl: './button-item.component.scss'
})
export class ButtonItemComponent  {

  @Input() disabled:boolean = true;
}
