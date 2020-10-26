function Shoe (color,brand,size,owner,price,weight) {
    this.color = color;
    this.brand = brand;
    this.size = size;
    this.owner = owner;
    this.price = price;
    this.weight = weight;
    year : function year () {
        console.log(2015);
    }
}
var shoe1 = new Shoe("red","Nike",42,"Travor","Shs60000","1kg");
var shoe2 = new Shoe("blue","Addidas",39,"Kimbugwe","Shs.78000","0.8kg");
console.log(shoe1)
console.log(shoe1.weight)

function Televsion (colortype,brand,inchSize,owner,price,size) {
    this.colortype = colortype;
    this.brand = brand;
    this.inchSize = inchSize;
    this.owner = owner;
    this.price = price;
    this.size = size;
    year : function year () {
        console.log(2015);
    }
}
var Televsion1 = new Televsion("black and white","L.G","32 inches","Ozzy","Shs1220000","Big");
var Televsion2 = new Televsion("colored","Hisense","72 inches","Kimbugwe","Shs.78000","Medium");
console.log(Televsion1)
console.log(Televsion2.owner)

function Phone (owner,brand,color,storage,price,make) {
    this.owner = owner;
    this.brand = brand;
    this.color = color;
    this.storage = storage;
    this.price = price;
    this.make = make;
    year : function year () {
        console.log(2019);
    }
}
var Phone1 = new Phone("John","Iphone5","Golden","32 GB","Shs100000","China");
var Phone2 = new Phone("Nansubuga","SIMI","Black","4 GB","Shs.78000","Uganda");
console.log(Phone1)
console.log(Phone2.storage)

function Goat (color,breed,Type,owner,price,weight) {
    this.color = color;
    this.brand = breed;
    this.Type = Type;
    this.owner = owner;
    this.price = price;
    this.weight = weight;
    year : function year () {
        console.log(2015);
    }
}
var Goat1 = new Goat("brown","Namibian","local","Travor","Shs46000","87kg")
var Goat2 = new Goat("Black and white","Mountain","Exotic","Sharif","Shs.140000","98kg")
console.log(Goat2)
console.log(Goat1.Type)

function Bag (color,brand,size,owner,price,Material) {
    this.color = color;
    this.brand = brand;
    this.size = size;
    this.owner = owner;
    this.price = price;
    this.Material = Material;
    year : function year () {
        console.log(2015);
    }
}
var Bag1 = new Bag("Brown","Duslang","Big","Paul","Shs60000","Leather")
var Bag2 = new Bag("Black","D.W","Medium","Jane","Shs.78000","cloth")
console.log(Bag2)
console.log(Bag1.brand)

function Book (Type,PageNo,Pagesize,owner,price,PageColor) {
    this.Type = Type;
    this.PageNo = PageNo;
    this.Pagesize = Pagesize;
    this.owner = owner;
    this.price = price;
    this.PageColor = PageColor;
    year : function year () {
        console.log(2015);
    }
}
var Book1 = new Book("Blackbook",200,"A4","Gloria","Shs10000","White")
var Book2 = new Book("Exercise BK","150","A2","Kimbugwe","Shs.18000","Yellow")
console.log(Book1)
console.log(Book2.Type)

function Pen (color,brand,length,Owner,make,Quality) {
    this.color = color;
    this.brand = brand;
    this.length = length;
    this.Owner = Owner;
    this.make = make;
    this.Quality = Quality;
    year : function year () {
        console.log(2017);
    }
}
var Pen1 = new Pen("black","BIC","10cm","Travor","Kenya","Standard")
var Pen2 = new Pen("blue","Fountain","12cm","Henry","Tanzania","Good")
console.log(Pen2)
console.log(Pen1.color)
