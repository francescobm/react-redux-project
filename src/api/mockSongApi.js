import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const songs = [
  {
    id: "mb",
    title: "Mannish Boy",
    watchHref: "https://www.youtube.com/watch?v=bSfqNEvykv0",
    authorId: "muddy-waters",
    length: "5:25",
    category: "Blues"
  },
  {
    id: "mfn",
    title: "Money For Nothing",
    watchHref: "https://www.youtube.com/watch?v=qVRcjmgxJEQ",
    authorId: "dire-straits",
    length: "6:56",
    category: "Rock & Roll"
  },
  {
    id: "sos",
    title: "Sultans of Swing",
    watchHref: "https://www.youtube.com/watch?v=xo-J1wf2KHc",
    authorId: "dire-straits",
    length: "5:46",
    category: "Rock & Roll"
  },
  {
    id: "ialw",
    title: "It's a long way to the top",
    watchHref: "https://www.youtube.com/watch?v=-sUXMzkh-jI",
    authorId: "acdc",
    length: "2:30",
    category: "Rock & Roll"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (song) => {
  return replaceAll(song.title, ' ', '-');
};

class songApi {
  static getAllSongs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], songs));
      }, delay);
    });
  }

  static saveSong(song) {
    song = Object.assign({}, song); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSongTitleLength = 1;
        if (song.title.length < minSongTitleLength) {
          reject(`Title must be at least ${minSongTitleLength} characters.`);
        }

        if (song.id) {
          const existingSongIndex = songs.findIndex(a => a.id == song.id);
          songs.splice(existingSongIndex, 1, song);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new songs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          song.id = generateId(song);
          song.watchHref = `http://www.pluralsight.com/songs/${song.id}`;
          songs.push(song);
        }

        resolve(song);
      }, delay);
    });
  }

  static deleteSong(songId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSongToDelete = songs.findIndex(song => {
          song.id == songId;
        });
        songs.splice(indexOfSongToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default songApi;
