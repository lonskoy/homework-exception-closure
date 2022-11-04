//Задание №1

function parseCount(count) {
	if(Number.parseInt(count) === NaN) {
		throw new Error('Невалидное значение!');
		} 
	return Number.parseInt(count);
}

function validateCount(count) {
	try {
		console.log('Внутри try');
		return parseCount(count);
	}
	catch(error) {                                 //По чему не выводится сообщение из блока catch?
		console.log(error);
		console.log('Ошибка перехвачена!');
	}
	finally {
		console.log('Внутри finally');
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
		let object = new Triangle(side1, side2, side3);
		try {
			if(side1 + side2 < side3) {
				throw new Error('Треугольник с такими сторонами не существует');
			}
		}
		catch(error) {
			console.log(error);
		}
		finally {
			return object.getArea();
			return object.getPerimeter();
		}
}

