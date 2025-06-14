import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sturcture-block',
  templateUrl: './sturcture-block.component.html',
  styleUrl: './sturcture-block.component.css'
})
export class SturctureBlockComponent {
  @Input() header!: string;
  @Input() text!: string;
  @Input() imageLink!: string | undefined;
}
