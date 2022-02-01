// Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,city,state,education){
        this.name = name
        this.age = age
        this.gender=gender
        this.city = city
        this.state=state
        this.education = education
    }
    
}
var p1 = new Person("raju","25","male","banglore","karnataka","B.tech")
var p2 = new Person("mukesh","22","male","chenni","tamilnadu","MSC")
var p3 = new Person("pooja","24","female","mumbai","maharastra","MCA")
console.log(p1,p2,p3)