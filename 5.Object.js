// let details1 = { name:"rahul" , add:"indore" , age:25 };""
// let details2 = { name:"yash" , add:"indore" , age:25 };

// console.log(details1);
// console.log(details1.name); 
// console.log(details1["age"]);

// let x = details2.name + details2.age;
// console.log(x);


function demo() {

}

let obj = {
    name1: "xyz",
    age: 25,
    demo: function () {
        return ("hello i am a function");
    },
    details: function () {
        //    return this.name1 +" "+this.age;
        console.log(this.age);
    }
}

// console.log(obj);
// console.log(obj.name1);
// console.log(obj.demo());
obj.details();

// console.log(this);




