'use strict';

// get the uri of the image
function getImageSource(movie: Object, kind: ?string) : {uri: ?string} {
	var uri = movie && movie.posters ? movie.posters.thumbnail : null;
	if(uri && kind) {
		uri = uri.replace('tmb', kind);
	}
	return {uri};
}

module.exports = getImageSource;