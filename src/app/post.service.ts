import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.interface';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    getPost(subredditId: string, postId: string): Observable<HttpResponse<Post>> {
        return this.http.get<Post>("https://www.reddit.com/r/" + subredditId + "/comments/" + postId + ".json", { observe: 'response'});
    }

}