const person = {
    firstName2: "Ajama",
    lastName2: "Samson",
    age2: 20,
    country2: "Nigeria",
    skills: ["html" , "css" , "bootstrap" , "javascript", "React"],
    // isMarried: false,
    // status: this.isMarried ? "I am married" : "I'm single",
    getDetail: function (){
        return `My name is ${this.firstName2} ${this.lastName2}, i'm ${this.age2}. I am from ${this.country2}. My skills are ${this.skills}.\n${this.status}`
}
}
let otherData = ["Amala", "Agbado", "Corn"]

export {person, otherData }