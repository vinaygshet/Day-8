/*Circle - Class
Convert the UML diagram to Typescript class. - use number for double



*/
class Circle {
    constructor(radius, color) {
      this.radius = radius
      this.color = color
    }
  
    getRadius () {
      return this.radius
    }
  
    setRadius (radius) {
      this.radius = radius
    }
  
    getColor () {
      return this.color
    }
    
  
    setColor (color) {
      this.color = color
    }
    toString(){
        return `Circle = [${this.radius,this.color}]`
    }
  

    getArea () {
      return Math.PI * this.radius * this.radius
    }
  

    getCircumference () {
      return 2 * Math.PI * this.radius;
    }
   }
  
   let myCircle = new Circle (1, 'RED',)
   console.log(myCircle.getRadius())
   console.log(myCircle.getColor())
   console.log(myCircle.getArea())
   console.log(myCircle.getCircumference())
   console.log(myCircle.toString())

  
   //  changing the values
   myCircle.setColor('Blue')
   myCircle.setRadius(2)
   console.log(myCircle.getRadius())
   console.log(myCircle.getColor())
   console.log(myCircle.getArea())
   console.log(myCircle.getCircumference())