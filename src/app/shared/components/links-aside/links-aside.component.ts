import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links-aside',
  standalone: true,
  imports: [],
  templateUrl: './links-aside.component.html',
  styleUrl: './links-aside.component.scss'
})
export class LinksAsideComponent {

  @Input({ required: true }) public title: string = ''
}
