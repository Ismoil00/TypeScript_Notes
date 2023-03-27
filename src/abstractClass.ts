// || Abstract Classes are like Tuples and Interfaces that are used to be inferited by child classes, but objects can not be created using them!
abstract class TakePhoto {
  constructor(
    public ratio: number,
    public filter: string,
    public photoSize: number,
  ){}
  getPhoto():void {
    console.log("this is getphoto() method!");
  }
  // || If a method is abstracted - then it must be implemented in child classes since it can not be implemented in the parent class!
  abstract takePhoto(): number | string;
}

class allPhotos extends TakePhoto {
  constructor(
    public ratio: number,
    public filter: string,
    public photoSize: number,
    public newFeature?: string,
  ){
    super(ratio, filter, photoSize);
  }
  takePhoto(): string | number {
    return 4;
  }
  getPhoto(): void {
    console.log("this method is overwriten!");
  }
}

const newPhoto = new allPhotos(1, 'clean', 100*200);

console.log(newPhoto.takePhoto());
newPhoto.getPhoto();