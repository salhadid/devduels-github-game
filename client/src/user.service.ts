import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async inspectUser(username: string): Promise<any> {
    let data: any = await this.http.get(inspectUserUrl + username).toPromise();
    console.log(data);
    if (!data) {
      return null;
    }
    return {
      ...data,
      favorite_language: data["favorite-language"],
      highest_starred: data["highest-starred"],
      perfect_repos: data["perfect-repos"],
      public_repos: data["public-repos"],
      total_stars: data["total-stars"]
    };
  }

  async duelUsers(user1: string, user2: string) {
    let data = await this.http.get(duelUsersUrl + `username=${user1}&username=${user2}`).toPromise();
    console.log(data);
    return data;
  }

}
