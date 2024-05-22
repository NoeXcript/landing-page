import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-aside',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link-aside.component.html',
  styleUrl: './link-aside.component.scss'
})
export class LinkAsideComponent {

  @Input({ required: true }) icon: string = ''
  @Input({ required: true }) name: string = ''
  @Input() linkTo: any = null
}
