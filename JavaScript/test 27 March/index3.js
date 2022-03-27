var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];

 function displayReadingStatus(arr) {
     for(let i=0; i<arr.length; i++) {
         let books= "'" + arr[i].title + "'" + ' by ' + arr[i].author + ".";
         if(arr[i].readingStatus == true){
             console.log("Read " + books);
         } else {
             console.log("not read yet " + books);
         }
    }
 }
displayReadingStatus(library);