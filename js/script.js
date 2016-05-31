" use strict ";

class Pet {
  constructor(type,name){
      this.name = name;
      this.type = type;
}
  speak(){
    display.innerHTML += "Pet Overlord ";
    }
}
class Dog extends Pet{
   constructor(name){
    super(Dog,name);
   }

   speak(){
    display.innerHTML += "Bark..Bark WOOF! ";
   }
}

class Cat extends Pet{
  constructor(name){
    super(Cat, name);
  }

  speak(){
    display.innerHTML += "Meow..me..PRRRRR! ";
  }
}

class Bird extends Pet{
  constructor(name){
    super(Bird,name);
  }

  speak(){
    display.innerHTML += "Chirp chirp.. TWEET! ";
  }

}

class RickRoss extends Pet{
  constructor(name){
    super(RickRoss,name);
  }

  speak(){
    display.innerHTML += "ahyuhhhgghh... BOSSSSSSS! ";
  }
}


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird, rickross)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if(type.toLowerCase() == "dog"){
      var d =  new Dog(name,type).speak();
      }
      if(type.toLowerCase() == "cat"){
       var c = new Cat(name, type).speak();
      }
      if(type.toLowerCase() == "bird"){
       var b = new Bird(name,type).speak();
      }
      if(type.toLowerCase() == "rickross"){
       var r = new RickRoss(name,type).speak();
      }

      var textOut = " " + type + " " + name + " " +  "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};




var chat = new PetChat();
chat.init();
