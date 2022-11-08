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
		if(side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() {
		return this.side1 + this.side2 + this.side3;
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
			return new Triangle(side1, side2, side3);

		}

		catch(error) {
			let objectError = {};
			objectError.getArea = () => 'Ошибка! Треугольник не существует';
			objectError.getPerimeter = () => 'Ошибка! Треугольник не существует';
			return objectError;
		}
}

