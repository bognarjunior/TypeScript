/**
 * Tipo String
 */
var text = 'Valor da string';
text = 'Mudei o valor';
// Indicará erro
//text = 3;
/**
 * Tipo Number
 */
var num;
num = 4;
num = 5 + 8;
var anotherNum = 5.8;
var hexNum = 0xf00d;
var binaryNum = 10;
var octalNum = 484;
/**
 * Boolean
 */
var isValid = true;
isValid = false;
/**
 * Tipo de Array
 */
var arr = ['Arroz', 'Feijão', 'Couve', 'Bisteca de Porco'];
var arrGeneric = ['Arroz', 'Feijão', 'Couve', 'Bisteca de Porco'];
/**
 * Tupla
 */
var tuple;
tuple = ['hello', 1, 'world', 2];
console.log(tuple[0]);
console.log(tuple[1]);
// Indicará erro
//tuple = [1, 'hello', 2, 'world'];
/**
 * Enum
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
;
var AnotherColor;
(function (AnotherColor) {
    AnotherColor[AnotherColor["Red"] = 1] = "Red";
    AnotherColor[AnotherColor["Green"] = 2] = "Green";
    AnotherColor[AnotherColor["Blue"] = 4] = "Blue";
    AnotherColor[AnotherColor["Yellow"] = 5] = "Yellow";
})(AnotherColor || (AnotherColor = {}));
;
console.log(Color);
/**
 * Any
 */
var qualquer;
qualquer = 'String';
qualquer = 4;
qualquer = true;
/**
 * Void
 */
function printt(msg) {
    console.log("Fun\u00E7\u00E3o sem retorno: " + msg);
}
printt('Escreve algo na tela');
//# sourceMappingURL=types.js.map