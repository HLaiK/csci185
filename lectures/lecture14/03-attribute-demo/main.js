/* 
cat:  https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg
dog:  https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg
bird: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg
fish: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H7Yb30u3WF_hq9nJR5qV8kecf0mUhJoDnA&usqp=CAU
*/


function showCat() {
    // your code here...
    console.log('update the image to show a cat!');
};

function showDog() {
    // 1. go into the DOM and grab the img
    document.querySelector("#image-demo").src =" https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg";
    // 2. change it's source attr to point to the dog img url
    console.log('update the image to show a dog!');
};

function showBird() {
    // your code here...
    document.querySelector("#image-demo").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg" ;
    console.log('update the image to show a bird!');
};

function showFish() {
    // your code here...
    document.querySelector("#image-demo").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H7Yb30u3WF_hq9nJR5qV8kecf0mUhJoDnA&usqp=CAU";
    console.log('update the image to show a fish!');
};

