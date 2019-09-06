// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    get area(){
        return Math.PI * this.radius**2
    }

    set diameter(diam){
        return this.radius = diam / 2
    }

    set circumference(circ){
        return this.diameter = circ / Math.PI
    }

    set area(area){
        return this.radius = Math.sqrt(area / Math.PI)
    }
}