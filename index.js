// Import stylesheets
import './style.css';

//Import the images file
import imagesLink from './images';

// Write Javascript code!
const appDiv = document.getElementById('app');

const msg = prompt("Enter your Name");

appDiv.innerHTML = `<h1>${msg}'s Favourate players</h1>`;

appDiv.className = 'header';


//Work with the imported file
imagesLink.map(imgs => {
  //image section
  const image = document.querySelector('.image');

  //h3 element for the title
  const h3 = document.createElement('h3');

  //h3 class
  h3.className = "character_names";

  //character_names info
  h3.innerHTML = `${imgs.name}`;

  //Creating an image tag
  const img = document.createElement('img');

  //set a className
  img.className = 'img_pic';

  //Add an image
  img.setAttribute(
    'src', `${imgs.url}`
  );

  //Append the image to the main div tag
  image.appendChild(img);

  //Append our names to the main div
  image.appendChild(h3);

});
