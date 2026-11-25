export default class Calculatrice {
    static operate(operation) {
        let x = 0;
        const regexNum = /^\d+$/;
        const regexOperator = /^[+*\/-]$/;
        let operator = '';

        if(operation.length == 1){
            return operation[0];
        }

        for (let i = 0; i < operation.length; i++) {
            const element = operation[i];

            if (regexNum.test(element)) {
                const num = parseInt(element, 10);

                if (operator === '*') {
                    x = x * num;
                } else if (operator === '/') {
                    x = x / num;
                } else if (operator === '+') {
                    x = x + num;
                } else if (operator === '-') {
                    x = x - num;
                } else {
                    x = num + x*10;
                }
                operator = '';
            } else if (regexOperator.test(element)) {
                operator = element;
            }
        }
        return x;
    }

}
