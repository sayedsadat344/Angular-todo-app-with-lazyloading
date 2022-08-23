import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

   imageUrl = 'https://user-images.githubusercontent.com/12563266/158284050-c354944e-66ff-491d-baac-26a29f961082.png';


  constructor() { }

  ngOnInit(): void {
  }

}
