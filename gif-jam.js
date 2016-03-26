'use strict';

function getStaticImageDataUrl(imageUrl) {
	return new Promise((resolve, reject) => {
		let image = new Image();

		image.crossOrigin = "Anonymous";
		image.src = imageUrl;

		image.onload = () => {
			let canvas = document.createElement('canvas');

			canvas.width = image.width;
			canvas.height = image.height;

			let context = canvas.getContext('2d');

			context.drawImage(image, 0, 0);

			let staticImageUrl = canvas.toDataURL();

			resolve(staticImageUrl);
		}

		image.onerror = (e) => {
			resolve(imageUrl);
		};
	})
	
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = getStaticImageDataUrl;
else
	window.getStaticImageDataUrl = getStaticImageDataUrl;
