module.exports = function fizzBuzz() {

    for (var iuput = 0; iuput <= 120; iuput++) {
        var result = "";
        switch (true) {
            case (input % 5) == 0: result += 'Fizz';
            case (input % 5) == 0: result += 'Buzz';
            case (input % 7) == 0: result += 'Whizz';
            default: result += input.toString(); 
        }
        alert("result");
    }
}