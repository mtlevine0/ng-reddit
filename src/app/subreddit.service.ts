import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subreddit } from './subreddit.interface';

@Injectable()
export class SubredditService {

    constructor(private http: HttpClient) { }

    getPosts(subreddit: string): Observable<HttpResponse<Subreddit>> {
        return this.http.get<Subreddit>("https://www.reddit.com/r/" + subreddit + ".json", { observe: 'response'});
    }

}