export default class CalculatorStack {
    constructor() {
        this.items = []
    }

    push(item) {
       this.items.push(item)
    }

    pop() {
        return this.items.pop();
    }

    clear() {
        this.items = [];
    }
}