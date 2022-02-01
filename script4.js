//write a class to calculate uber price.


class Uber{

    constructor(basePrice = 25,trip){
        this.trip=trip
        this.basePrice =basePrice
    }
    
    

    getFare(){
        let fare
        return fare = `The fare is... ${(this.trip)*(this.basePrice)}/- Rs`
    }
}
var s1= new Uber(30,20)
console.log(s1.getFare())