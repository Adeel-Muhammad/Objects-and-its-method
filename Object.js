// const myInfo={

//     name:"Adeel Muhammad",
//     id:1391-2020,
//     Program:"BS SE",
//     Semester:"6th"
// }

// for (x in myInfo){

//     console.log(x);

// }


// const Laptop={
    
// }

// const names="hp";
// const price="12000Rs";
// const storage="2 GB";
// const Geneartion="core I2";


// Laptop[names]="Hp is the most utilize and used laptop in the market";
// Laptop[price]="Tme most suitable price for it";
// Laptop[storage]="Mostly used for the resources like the Microsoft Office and the many others";
// Laptop[Geneartion]="Best Acurracy and the Efficent to used";

// console.log(Laptop.names);


// const Book={

//     author:"Alexander",
//     display(author){

//         console.log(this.author);
//     }
// }



// const bookauthor=Object.create(Book);

// bookauthor.display()


// const Comicsauthor=Object.create(Book);
// Comicsauthor.author="Anoynmous";
// Comicsauthor.display();

//for in

// const Apple={

//     color:"Red",
//     year:2019,
//     price:"250",
//     exp:2020
// }

// console.log(Object.keys(Apple));




function Dogs(names,id,color,price,country){

    this.names=names;
    this.id=id;
    this.color=color;
    this.price=price;
    this.country=country;

    

}


Dogs.prototype.status=function(){
    console.log("I am the Happy");


}

const Husky = new Dogs("Husky",15,"Grey","12000","German");
console.log(Husky);

const pitBall = new Dogs("Pitball",19,"Brown","15000","Luxumburg");
console.log(pitBall);


//in

console.log("price" in pitBall);

