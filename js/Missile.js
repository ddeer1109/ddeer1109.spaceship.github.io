import {domElements, htmlClasses, missilesSpeeds,} from './utilities.js' 

export class Missile {
    x = null;
    y = null;
    damage = 0;
    className = null;
    htmlElement = null;
    isEnemyMissile = null;
    intrevalIndex = null;

    constructor(x, y, className, isEnemyMissile, damage) {
        this.isEnemyMissile = isEnemyMissile;
        this.x = x;
        this.y = y;
        this.damage = damage;
        this.className = className;
        this.initialization();

    }

    initialization(){
        this.createMissile();
    }

    createMissile() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add(this.className);
        
        
        
        if (!this.isEnemyMissile) {
            this.htmlElement.style.left = `${this.x}px`;
            this.htmlElement.style.bottom = `${this.y}px`;
            this.moveUp();
        }
        else {
            this.htmlElement.style.left = `${this.x}px`;
            this.htmlElement.style.top = `${this.y}px`;
        }
        
        domElements.container.appendChild(this.htmlElement);
    }


    moveUp() {
        let speed = 0;
        if (this.className == htmlClasses.missile) {
            speed = missilesSpeeds.missile;
        } else if (this.className == htmlClasses.missileRocket) {
            speed = missilesSpeeds.missileRocket;
        } else {
            speed = missilesSpeeds.tripleMissile;
        }
        
        this.intrevalIndex = setInterval(() => {
            this.y += speed;
            this.htmlElement.style.bottom = `${this.y}px`;

            // if(this.y >= window.innerHeight) {
            //     this.remove();                
            // }

        }, 10);
    }

    moveDown() {

    }

    remove() {
        this.htmlElement.remove()
        this.htmlElement = null;
        clearInterval(this.intrevalIndex);
    }

    explode() {

    }
}