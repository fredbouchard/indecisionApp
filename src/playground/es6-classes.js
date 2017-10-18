class Person {
    constructor (
        name = 'Anonymous',
        age = 0
    ) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year${this.age > 1 ? 's' : ''} old.`
    }
}

class Student extends Person {
    constructor (
        name,
        age,
        major
    ) {
        super(name, age);
        this.major = major;
    }

    get hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()){
             description += ` His major is ${this.major}`;
        }

        return description;
        
    }
}

class Traveler extends Person {
    constructor (
        name,
        age,
        homeLocation
    ) {
        super(name, age);
        this.homeLocation = homeLocation
    }

    get hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}


const me = new Traveler('Fred Bouchard', '32', 'Carignan');
console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler('Jonh Doe', '32');
console.log(other.getDescription());
console.log(other.getGreeting());