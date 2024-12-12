

class Person {

    constructor(age, name, lastname) {

        if (!lastname, !name, age < 0) {
            throw new Error('The fields cannot be empty');
        }

        this._age = age;
        this._name = name;
        this._lastname = lastname;


    }

    presentate() {
        console.log(`Hello my name is ${this._name}`);
    }

    get name() {
        return this._name;
    }

    get lastname() {
        return this._lastname;
    }

    get age() {

        return this._age;
    }
}





try {


    let myPerson = new Person(18, 'Julia', 'Rodriguez');

    myPerson.presentate();

} catch (error) {

    console.error(error);
}