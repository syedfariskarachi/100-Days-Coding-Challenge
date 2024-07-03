// Question 40: Album: Create objects for music albums.
function albums(artist:string, title:string, track?:number) {
    let album = { artist, title };
    if (track) {
          album[`track`] = track;
    }
    return album;
  }
  console.log(albums("artist 1","first album"))
  console.log(albums("artist 2","second album"))
  console.log(albums("artist 3","third album"))  
   
// Question 41: Magicians: Display magician names from an array.
 
  let magicians: string[] = ["Alice", "David", "Chris"];

  export function show_magicians(magicians: string[]) {
      magicians.forEach(magician => {
          console.log(magician);
      });
  }
  
  show_magicians(magicians);
// Question 42: Great Magicians: Add "the Great" to magician names.

function make_great(magicians:string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great"
        
    }

}
make_great(magicians)
show_magicians(magicians)
