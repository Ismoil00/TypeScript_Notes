"use strict";
// || Abstract Classes are like Tuples and Interfaces that are used to be inferited by child classes, but objects can not be created using them!
class TakePhoto {
    constructor(ratio, filter, photoSize) {
        this.ratio = ratio;
        this.filter = filter;
        this.photoSize = photoSize;
    }
    getPhoto() {
        console.log("this is getphoto() method!");
    }
}
class allPhotos extends TakePhoto {
    constructor(ratio, filter, photoSize, newFeature) {
        super(ratio, filter, photoSize);
        this.ratio = ratio;
        this.filter = filter;
        this.photoSize = photoSize;
        this.newFeature = newFeature;
    }
    takePhoto() {
        return 4;
    }
    getPhoto() {
        console.log("this method is overwriten!");
    }
}
const newPhoto = new allPhotos(1, 'clean', 100 * 200);
console.log(newPhoto.takePhoto());
newPhoto.getPhoto();
