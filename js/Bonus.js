import { domElements } from "./utilities";

export class Bonus {
    constructor(className, bonusCount, speedY) {
        this.x = this.randomTopPosition();
        this.y = window.innerHeight - 100;
        this.className = className;
        this.bonusCount = bonusCount;
        this.intervalMovement = null;
        this.speedY = speedY;
        this.htmlElement = null;
    
    }
    
    initialization() {
        this.buildBonus();
        this.moveDown();
    }

    randomTopPosition() {
        let randomX = Math.floor(Math.random() * window.innerWidth)

        if (randomX > window.innerWidth/2)
            randomX -= 96;
        
        return randomX
    }

    buildBonus() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add(this.className);
        this.htmlElement.style.bottom = `${this.y}px`;
        this.htmlElement.style.left = `${this.x}px`;
        domElements.container.appendChild(this.htmlElement)
    }

    moveDown() {
        this.intervalMovement = setInterval(() => {
            this.y -= this.speedY;
            this.htmlElement.style.bottom = `${this.y}px`;

        }, 1000);
    }
}