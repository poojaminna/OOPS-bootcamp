//using constructor function

// function Album(name, year, genre, artist, rating) {
//   this.AlbumName = name;
//   this.Year = year;
//   this.Genre = genre;
//   this.Artist = artist;
//   this.Rating = rating;
//   this.albumDesc = function () {
//     console.log(
//       `The album ${this.AlbumName} was released in ${this.Year} by ${this.Artist}`
//     );
//   };
// }

// let a1 = new Album("abcAlbum", 2021, "defGenre", "xyzArtist", 5);

// function Song(
//   name,
//   year,
//   genre,
//   artist,
//   rating,
//   duration,
//   featuring,
//   songName
// ) {
//   Album.call(this, name, year, genre, artist, rating);
//   this.Duration = duration;
//   this.Featuring = featuring;
//   this.SongName = songName;
//   this.songDesc = function () {
//     console.log(`The song ${this.songName} is ${this.Duration} minutes.`);
//   };
// }

// let s1 = new Song(
//   "abcAlbum",
//   2021,
//   "defGenre",
//   "xyzArtist",
//   5,
//   5,
//   "abcd",
//   "xyzxyz"
// );

// console.log(s1);

//---------------------------------------

//Using class syntax

// class Album {
//   constructor(name, year, genre, artist, rating) {
//     this.AlbumName = name;
//     this.Year = year;
//     this.Genre = genre;
//     this.Artist = artist;
//     this.Rating = rating;
//   }
//   albumDesc() {
//     console.log(
//       `The album ${this.AlbumName} was released in ${this.Year} by ${this.Artist}`
//     );
//   }
// }

// let a1 = new Album("abcAlbum", 2021, "defGenre", "xyzArtist", 5);

// class Song extends Album {
//   constructor(
//     name,
//     year,
//     genre,
//     artist,
//     rating,
//     duration,
//     featuring,
//     songName
//   ) {
//     super(name, year, genre, artist, rating);
//     this.Duration = duration;
//     this.Featuring = featuring;
//     this.SongName = songName;
//   }
//   SongDesc() {
//     console.log(`The song ${this.songName} is ${this.Duration} minutes.`);
//   }
// }

// let s1 = new Song(
//   "abcAlbum",
//   2021,
//   "defGenre",
//   "xyzArtist",
//   5,
//   5,
//   "abcd",
//   "xyzxyz"
// );

// console.log(s1);
