class DispositivoEletronico{
    constructor(name){
        this.name = name;
        this.isOn = false;
    }

    turnOn(){
        if(this.isOn) {
            console.log(this.name + ' já está ligado');
            return;
        }

        this.isOn = true;
    }

    turnOff(){
        if(!this.isOn) {
            console.log(this.name + ' já está desligado')
        }

        this.isOn = false;
    }

}

class Smartphone extends DispositivoEletronico{
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(name, hasWifi) {
        super();
        this.hasWifi = hasWifi;
    }

    turnOn(){
        console.log('Você alterou o método ligar');
    }
}

const s1 = new Smartphone('iPhone', 'Preto', 'iPhone 17 Pro Max');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.turnOff();
console.log(t1);