"use strict";
class xiandai {
    constructor(sound) {
        this.sound = sound;
        this.color = 'red';
        this.name = 'xiandai';
        this.age = 11;
        this.isFemale = true;
        this.sound = sound;
    }
}
class tesla extends xiandai {
    constructor(name, capacity) {
        super(name);
        this.capacity = capacity;
        this.capacity = capacity;
    }
}
let xiaocai = new tesla('hongkong', '90%');
console.log(xiaocai);
