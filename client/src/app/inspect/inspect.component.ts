import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  public showUserData: boolean = false;


  constructor(private userService: UserService) { }

  inspectedUser: {
    username?: string;
    name?: string;
    location?: string | null;
    bio?: string;
    avatar_url?: string;
    favorite_language?: string;
    followers?: number;
    following?: number;
    highest_starred?: number;
    perfect_repos?: number;
    public_repos?: number;
    titles?: Array<string>;
    total_stars?: number;
  } = {};

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    this.inspectedUser = await this.userService.inspectUser(this.username);
    this.showUserData = true;
  }



}
