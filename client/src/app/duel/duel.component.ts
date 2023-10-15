import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = "";
  usernameTwo: string = "";

  userOneData: {
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

  userTwoData: {
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

  winner: string = "";

  public showUserData: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  async onSubmit() {

    this.userOneData = await this.userService.inspectUser(this.usernameOne);
    this.userTwoData = await this.userService.inspectUser(this.usernameTwo);

    if (this.userOneData && this.userTwoData) {
      if (this.userOneData.followers && this.userTwoData.followers) {
        if (this.userOneData.followers > this.userTwoData.followers) {
          this.winner = this.usernameOne;
        } else if (this.userTwoData.followers > this.userOneData.followers) {
          this.winner = this.usernameTwo;
        } else {
          this.winner = "It's a tie!";
        }
      }
    }

    this.showUserData = true;
  }
}
