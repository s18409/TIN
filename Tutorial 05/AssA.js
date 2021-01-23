//initializer
let triangle = {
    sideA: 2,
    sideB: 3,
    sideC: 4,
    perimeter: function () {
        return this.sideA + this.sideB + this.sideC;
    },
    area: function () {
        let p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }
}

function printProperties(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(triangle);
