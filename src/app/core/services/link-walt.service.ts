import { Injectable } from '@angular/core';
import { Link } from '../../shared/model/link.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkWaltService {

  public links: Array<Link> = [
    {
      icon: '/assets/icons/home.svg',
      name: 'News Feed'
    }, {
      icon: '/assets/icons/message.svg',
      name: 'Forums'
    }, {
      icon: '/assets/icons/messanger.svg',
      name: 'Trending'
    }, {
      icon: '/assets/icons/folder.svg',
      name: 'Saveds'
    }, {
      icon: '/assets/icons/start-speed.svg',
      name: 'Your Starts'
    }, {
      icon: '/assets/icons/scores.svg',
      name: 'Scores'
    }, {
      icon: '/assets/icons/dev.svg',
      name: 'Developments'
    },
    {
      icon: '/assets/icon/matches.svg',
      name: 'Matches'
    },
    {
      icon: '/assets/icons/general_rules',
      name: 'General Rules'
    }
  ]

  public get getLinks(): Observable<Link> {
    return from(this.links)
  }

  public get getTitle(): string {
    return 'Workspace Walt'
  }

}
