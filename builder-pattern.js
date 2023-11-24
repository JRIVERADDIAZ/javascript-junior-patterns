class Burger {
    constructor(builder) {
        this.size = builder.size;
        this.cheese = builder.cheese || false;
        this.pepperoni = builder.pepperoni || false;
        this.lettuce = builder.lettuce || false;
        this.tomato = builder.tomato || false;
    }

    toString() {
        let burger = `Size: ${this.size}`;
        if (this.cheese) burger += '\nWith cheese';
        if (this.pepperoni) burger += '\nWith pepperoni';
        if (this.lettuce) burger += '\nWith lettuce';
        if (this.tomato) burger += '\nWith tomato';
        return burger;
    }
}

class BurgerBuilder {
    constructor(size) {
        this.size = size;
    }

    addCheese() {
        this.cheese = true;
        return this;
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addLettuce() {
        this.lettuce = true;
        return this;
    }

    addTomato() {
        this.tomato = true;
        return this;
    }

    build() {
        return new Burger(this);
    }
}

const burger = new BurgerBuilder(14)
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .addCheese()
    .build();

console.log(burger.toString());