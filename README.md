# GIF jam

A simple package for converting animated gif into static image represented by data URL.

## Instalation

	npm install gif-jam
    
## Example

	import getStaticImageDataUrl from 'gif-jam'
    
    ...
    
    var myGifUrl = 'http://www.example.com/my.gif';
    
    getStaticImageDataUrl(myGifUrl)
   		.then((staticImageUrl) => {
        	document.getElementsByTagName('img')[0].src = staticImageUrl;
        })
    

