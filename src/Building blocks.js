/* 
Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`
*/

class Block{

  constructor(data){
    // ...
    this.data = data
  }
  
  getWidth() { return this.data[0] }
   getLength() { return this.data[1]}
   getHeight() {return this.data[2]}
    getVolume () {return  this.data.reduce((acc,cur)=>acc*cur,1)}
   getSurfaceArea ()  {return 2*( this.data[0]*this.data[1] + (this.data[1]*this.data[2])+ (this.data[0]*this.data[2]))}
}

