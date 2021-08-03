function Item(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.viewFullDescription = function () {
    console.log(
      `The product ${this.name} is ${this.description} and the price is ${this.price}`
    );
  };
  this.addToShoppingBasket = function (x) {
    console.log(`Item ${x} added to shopping basket successfully`);
  };
  this.removeFromShoppingBasket = function (x) {
    console.log(`tem ${x} removed from shopping basket successfully`);
  };
}

function Mp3(name, description, price, artist, duration) {
  Item.call(this, name, description, price);
  this.artist = artist;
  this.duration = duration;
  this.play = function () {
    console.log("Playing");
  };
  this.download = function () {
    console.log("Downloaded Successfully");
  };
}

function DVD(name, description, price, certification, duration, actors) {
  Item.call(this, name, description, price);
  this.certification = certification;
  this.duration = duration;
  this.actors = actors;
  this.viewTrailer = function () {
    console.log("Playing Trailer");
  };
}

function Book(name, description, price, author, noOfPages, genre) {
  Item.call(this, name, description, price);
  this.author = author;
  this.noOfPages = noOfPages;
  this.genre = genre;
  this.previewContent = function () {
    console.log("Showing preview Content: Ipsum Lorem");
  };
}

let Mp3instance = new Mp3("song file", "very useful", 500, "arjith", 5);
let dvdinstance = new DVD(
  "DVD",
  "having smooth user experience",
  1000,
  "A",
  2,
  "ABC"
);
let bookinstance = new Book(
  "book",
  "knowledgeable",
  1500,
  "Rick Riordan",
  200,
  "Fiction"
);

console.log(Mp3instance);
Mp3instance.viewFullDescription();
