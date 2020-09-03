const personalInfo = {
    name: "김..",
    age: 18,
    gender: "남",
    isStudent: true, // bool
    favColor: ["red", "white"], //array 
    favFood: [
        {
            name: "burger",
            fatty: true
        }, {
            name: "pizza",
            fatty: false
        }
    ]
};

console.log(personalInfo);
console.log(personalInfo.favFood[0].name);