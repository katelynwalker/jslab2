"use strict";

class AddressBook {
    constructor(contacts){
        this.contacts = [];
    }
    add(info) {
    this.contacts.push(info);
    }

    deleteAt(index){
    this.contacts.splice(index,1);
    }

    print(){
    for (let i=0; i < this.contacts.length; i++){
        console.log(this.contacts[i]);
    }
    }
   

    deleteByName(name){
      for (let i=0; i < this.contacts.length; i++){
          if (this.contacts[i].name === name) {
              this.contacts.splice(i,1);
          }
      } 

    }

//UN-COMMENT TO UNLEASH THE BEAST
//  update(index){
// let play = true
//      let promptUpdate = prompt("Which index would you like to update?")
//      let updateName = prompt("What is the updated name?")
//      let updateRelation = prompt("What is the updated relation")
//      let updateEmail = prompt("What is the updated email?")
//      let updatePhone = prompt("What is the updated phone number?")
//      let fullUpdate = `Contact {name: ${updateName}, relation: ${updateRelation}, email:${updateEmail}, phone: ${updatePhone}}`;
//        this.contacts.splice(promptUpdate,1, fullUpdate)
    
// }
//-----Update index not quite how I want it. I want to be able to update just name, or just email, etc. 
//TO ACCESS NAME: console.log(book.contacts[0].name)
// ^^^ can't figure out how to use this in my method^^^
// something like this...
//this.contacts[promptUpdate].name.splice(promptUpdate,1, namePrompt) 
}


class Contact{
    constructor(name, relation, email, phone){
        this.name = name;
        this.relation = relation;
        this.email = email;
        this.phone = phone;
    }
}
const book = new AddressBook();
book.add(new Contact("Katie", "myself", "94kwalker@gmail.com", "248-719-9721"))
console.log(book);

book.add(new Contact("Travis", "brother", "twalke@gmail.com", "248-719-9723"))
console.log(book);

// book.deleteAt(new Contact(0));
// console.log(book);

// book.update(0);
// console.log(book);

book.print(new AddressBook);
console.log(book);

// book.deleteByName ("Katie");
// console.log(book);

let start = true;
while (start === true) {

let promptQ = prompt("Would you like to add, delete, print or quit?")
    if (promptQ == "add") {
    let name = prompt("What is the name?");
    let relation = prompt("What is your relation?") 
    let email = prompt("What is the email?")
    let phone = prompt("What is the phone number?")
    book.add(new Contact(name, relation, email, phone))
    }
    else if (promptQ == "delete"){
    let who = prompt("Which index would you like to delete?");
    book.deleteAt(who);
    }
    else if (promptQ == "print"){
        book.print(new AddressBook);
        console.log(book);   
    }
    else if (promptQ == "quit"){
        console.log("You are leaving the address book");
        break;
    }
}



