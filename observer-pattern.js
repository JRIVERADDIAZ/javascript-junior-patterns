class Observer {
    constructor() {
        if (Observer.instance) {
            return Observer.instance;
        }

        this.observers = [];
        Observer.instance = this;

        return this;
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}

const observer = new Observer();

let data = {
    user: 'John',
    age: 25,
    darkMode: true,
    registered: false,
};

let data2 = {
    user: 'John',
    age: 25,
    darkMode: true,
    registered: false,
};

function logData(data) {
    console.log(data);
}

function logData2(data2) {
    console.log(data2);
}

observer.subscribe(logData);
observer.subscribe(logData2);

// observer.unsubscribe(logData);

console.log(observer.observers);