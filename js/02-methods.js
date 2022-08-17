
const playlist = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    changeName(newName) {
        console.log('this inside changeName: ', this);

        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);   
    },

    updateRating(newRating) {
        this.rating = newRating;
    },
    getTracCount() {
        return this.tracks.length;
    }
};
console.log(playlist.getTracCount());

playlist.changeName('New name');

playlist.addTrack('new track');
console.log(playlist.getTracCount());

playlist.updateRating(4);


console.log(playlist);