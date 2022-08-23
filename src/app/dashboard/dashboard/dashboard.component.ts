import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  animals:any= [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAnimalFacts();
  }
  getAnimalFacts() {
    console.log("the function");


    this.http.get("http://universities.hipolabs.com/search?country=afghanistan").subscribe((data)=>{
      console.log("the data",data);
      this.animals = data;

    },);

  }

}


