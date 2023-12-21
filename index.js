// Your code here
class Polygon{
    constructor(ary){
        this.ary = ary
    }
    get countSides(){
        let sides = this.ary.length
        return sides
    }

    get perimeter(){
        let sum = this.ary.reduce((ary,total)=> ary + total, 0 )
        return sum 
    }

    
}

class Triangle extends Polygon {
    get isValid(){
        if(this.countSides === 3){
            return this.ary[0] + this.ary[1] > this.ary[2] && this.ary[0] + this.ary[2] > this.ary[1] && this.ary[1] + this.ary[2] > this.ary[0]
        }
        return false

    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides === 4){
            return this.ary[0] === this.ary[1] && this.ary[2] === this.ary[3] && this.ary[2] === this.ary[1] 
        }
        return false

    }

    get area(){
        if(this.isValid){
            return this.ary[0]*this.ary[0]
        }
    }
}