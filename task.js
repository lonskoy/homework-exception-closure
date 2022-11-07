//Задание №1

function parseCount(count) {
	let countArg = Number.parseInt(count);
	if(Number.isNaN(countArg)) {
		throw new Error('Невалидное значение!');
	} 
	return countArg;
} 

function validateCount(count) {
	try {
		return parseCount(count);
	}
	catch(error) {                                
		return error;
	}
}

//Задание №2

class Triangle {
	constructor (side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	getPerimeter() {
		if(this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		let p = this.side1 + this.side2 + this.side3;
		return p;
	}

	getArea() {
		let halfP = this.getPerimeter() / 2;
		let temp = halfP * (halfP - this.side1) * (halfP - this.side2) * (halfP - this.side3);
		let s = Math.sqrt(temp);
		return Number(s.toFixed(3));
	}
}

function getTriangle(side1, side2, side3) {
		
		try {
			let object = new Triangle(side1, side2, side3);
			console.log('Объект создан');
		}
		catch(error) {
			console.log(error);
		}
		finally {
			return object.getArea();
			return object.getPerimeter();
		}
}

