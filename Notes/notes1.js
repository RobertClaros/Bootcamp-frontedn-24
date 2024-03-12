let Rectangle = class{
    height;
    width;
    constructor(height, width){
        this.height = height;
        this.width = width;
}
    get area(){
        return this,calcArea();
}
calcArea(){
    return this.width*this.height;
}
};

console.log(Rectangle.name);
console.log(calcArea);

let Rectangle2 = class Rectangle{
    #height;
    #width;
    constructor(height, width){
        this.height = height;
        this.width = width;
}
};

console.log(Rectangle.name);

