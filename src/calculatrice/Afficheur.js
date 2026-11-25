import Calculatrice from "./Calculatrice.js";

export default class Afficheur {

    static afficherCalculatrice(prompt, container) {
        Afficheur.afficherResult("Type something :", container);
        
        for (let i = 0; i < 10; i++) {
            const bouton = document.createElement("button");
            bouton.textContent = i.toString();
            bouton.type = "button";

            bouton.addEventListener("click", () => {
                prompt.push(i);
                Afficheur.afficherResult(prompt.join(""), container);
            });

            container.appendChild(bouton);
        }

        Afficheur.createOperatorButton('+', prompt, container);
        Afficheur.createOperatorButton('-', prompt, container);
        Afficheur.createOperatorButton('*', prompt, container);
        Afficheur.createOperatorButton('/', prompt, container);

        Afficheur.createResultButton(prompt, container);
        Afficheur.createResetButton(prompt, container);
    }

    static afficherResult(value = "Type something :", container) {
        let currentDiv = container.querySelector("#result");
        if (currentDiv) {
            currentDiv.textContent = value;
        }
    }

    static createOperatorButton(operation, prompt, container) {
        const bouton = document.createElement("button");
        bouton.textContent = operation;
        bouton.type = "button";

        bouton.addEventListener("click", () => {
            prompt.push(operation);
            Afficheur.afficherResult(prompt.join(""), container);
        });

        container.appendChild(bouton);
    }

    static createResultButton(prompt, container) {
        const bouton = document.createElement("button");
        bouton.textContent = '=';
        bouton.type = "button";

        bouton.addEventListener("click", () => {
            Afficheur.afficherResult(Calculatrice.operate(prompt), container);
        });

        container.appendChild(bouton);
    }

    static createResetButton(prompt, container) {
        const bouton = document.createElement("button");
        bouton.textContent = "AC";
        bouton.type = "button";

        bouton.addEventListener("click", () => {
            prompt.length = 0;
            Afficheur.afficherResult("Type something :", container);
        });

        container.appendChild(bouton);
    }
}
