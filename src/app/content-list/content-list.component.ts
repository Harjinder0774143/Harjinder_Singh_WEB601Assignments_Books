import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  movieCard = "movieCard";
  genres = ["Biography", "Mindset", "Fantasy"];
  enteredValueExist = false;
  enteredValueNotExist = false;
  

  // list of books with details
  gadgets = [{
    id: 1,
    Name: "A Burning in My Bones",
    Genre: "Biography",
    Price: "$16.99",
    imgURL:  '../../assets/img/book-A-Burning-in-My-Bones.png',
    writer: "Winn Collier",
  },
{
  id: 2,
    Name: "Steve Jobs",
    Genre: "Biography",
    Price: "$24.99",
    imgURL:  '../../assets/img/steve-jobs.jpg',
    writer: "Walter Isaacson",
},
{
    id: 3,
    Name: "The Subtle Art of Not Giving a F*ck",
    Genre: "Mindset",
    Price: "$19.99",
    imgURL:  '../../assets/img/The Subtle Art of Not Giving a Fck.jpg',
    writer: "Mark Manson"
},
{
  id: 4,
    Name: "The Monk Who Sold His Ferrari",
    Genre: "Mindset",
    Price: "$19.99",
    imgURL:  '../../assets/img/The Monk Who Sold His Ferrari.jpg',
    writer: "Robin Sharma"
},
{
  id: 5,
    Name: "The Power of Now",
    Genre: "Mindset",
    Price: "$19.99",
    imgURL:  '../../assets/img/The Power of Now.jpg',
    writer: "Eckhart Tolle"
},
{
  id: 6,
    Name: "The Last Wish: Introducing the Witcher",
    Genre: "Fantasy",
    Price: "$9.99",
    imgURL:  '../../assets/img/The Last Wish-Introducing the Witcher.jpg',
    writer: "Andrzej Sapkowski"
},
{
  id: 7,
    Name: "The Two Towers: The Lord of the Rings",
    Genre: "Fantasy",
    Price: "$34.99",
    imgURL:  '../../assets/img/The Two Towers- The Lord of the Rings.jpg',
    writer: "J. R. R. Tolkien"
},
{
  id: 8,
    Name: "Julian Assange: Founder of WikiLeaks",
    Genre: "Biography",
    Price: "$39.99",
    imgURL:  '../../assets/img/39019099.jpg',
    writer: "Kristin Thiel"
}]

  constructor() { }

  ngOnInit(): void {
  }

  searchAvailability(text:any){
    this.enteredValueExist = false;
    this.enteredValueNotExist = false;
    console.log("input value", text);
    let value = this.gadgets.filter((a:any)=>{
      return a.Name.toLowerCase().includes(text.toLowerCase());  
    })
    console.log("value", value.length);
    value.length ? this.enteredValueExist = true : this.enteredValueNotExist = true;
  }
 
}
