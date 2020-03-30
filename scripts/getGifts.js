// Constants
const API_KEY = '15YzPXO2GExJazlRzmKee3rbsCfitw97';
const suggested = document.getElementById('suggested_container');
const gifBody = document.getElementById('body_container');

// Search Gifts

let searchGifts = (query, endpoint, qty) => {
  let req = fetch(
    `http://api.giphy.com/v1/gifs/${endpoint}?api_key=${API_KEY}&q=${query}&limit=${qty}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.data;
    })
    .catch(error => {
      return error;
    });

  return req;
};

// Class gif

class Gif {
  constructor(url, txt, title) {
    this.url = url;
    this.txt = txt;
    this.title = title;
  }
}

let getTrending = () => {
  // List of Gifs
  let trendingGifs = [];

  searchGifts(null, 'trending', 14)
    .then(gifs => {
      gifs.map(gif => {
        const url = gif.images.original.url;
        const gifTitle = gif.title;
        // Separate the title to assign keywords
        const title = gifTitle.split(' ').slice(0, 5);
        let keywords = '';
        title.map(word => {
          keywords += `#${word} `;
        });

        // Create an Object with the gif info
        let gipho = new Gif(url, keywords, gifTitle);
        // Push the gif into the array of Gifs
        trendingGifs.push(gipho);
      });

      // Create a suggested gifs array (4 gifs)
      let suggestedGifs = trendingGifs.slice(0, 4);
      let bodyGifs = trendingGifs.slice(4, 14);

      suggestedGifs.map(gif => {
        // Create element img
        let img = document.createElement('IMG');
        // Set the attributes
        img.setAttribute('src', `${gif.url}`);
        img.setAttribute('alt', `${gif.title.replace(/ /g, '_')}`);
        // Append the element to its father
        suggested.appendChild(img);
      });

      bodyGifs.map(gif => {
        // Create element img
        let img = document.createElement('IMG');
        // Set the attributes
        img.setAttribute('src', `${gif.url}`);
        img.setAttribute('alt', `${gif.title.replace(/ /g, '_')}`);
        // Append the element to its father
        gifBody.appendChild(img);
      });
    })
    .catch(error => {
      return error;
    });
};

getTrending();
