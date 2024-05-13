import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit{

  //datos de la llamda a la api
  users:any[]=[];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getAllusers();
  }

  getAllusers(){
    this.http.get('http://localhost:3008/users').subscribe((res:any)=>{
        this.users = res.data;
      }, error => {
        alert("error from API")
     })
    }
}
