import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies=[
    {
      id:1,
      name:"bahubali",
      description:"hf ay",
      release_date:'07/11/2022',
      rating:4.9,
      ticket_price:450.2365,
      image:"assets/img/action1.webp",
      movie_code:"BH-1"

    },
    {
      id:1,
      name:"khaubali",
      description:"hf aytfhb iygsdkffb liysatkhb igseyi iytsufjbafb iuyuifa ",
      release_date:'07/11/2022',
      rating:4.9,
      ticket_price:450,
      image:"assets/img/action2.webp",
      movie_code:"KH-1"

    },
    {
      id:1,
      name:"bahubali",
      description:"hf aytfhb iygsdkffb liysatkhb igseyi iytsufjbafb iuyuifa ",
      release_date:'07/11/2022',
      rating:4.9,
      ticket_price:450,
      image:"assets/img/comedy1.jpg",
      movie_code:"BH-1"

    },
    {
      id:1,
      name:"bahubali",
      description:"hf aytfhb iygsdkffb liysatkhb igseyi iytsufjbafb iuyuifa ",
      release_date:'07/11/2022',
      rating:4.9,
      ticket_price:450,
      image:"assets/img/horror1.png",
      movie_code:"BH-1"

    },
    {
      id:1,
      name:"bahubali",
      description:"hf aytfhb iygsdkffb liysatkhb igseyi iytsufjbafb iuyuifa ",
      release_date:'07/11/2022',
      rating:4.9,
      ticket_price:450,
      image:"assets/img/horror2.jpg",
      movie_code:"BH-1"

    }
  ]

  item_per_page=3
  start=0
  end=3
  changePage(page_number:number)
  {
    this.start = (page_number-1)*this.item_per_page
    this.end = page_number*this.item_per_page

  }
}
