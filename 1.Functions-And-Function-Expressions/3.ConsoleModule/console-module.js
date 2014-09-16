var specialConsole = (function () {
    //function writeLine() {
    //    console.log('Message: ' + stringFormat(arguments));
    //}

    //function writeError() {
    //    console.log('Error: ' + stringFormat(arguments));
    //}

    //function writeWarning() {
    //    console.log('Warning: ' + stringFormat(arguments));
    //}

    function stringFormat() {
        if (arguments === 0) {
            return undefined;
        }

        var text = arguments[0];
        var openBracket = '{';
        var closeBracket = '}';
        var indexOfOpenBracket = text.indexOf(openBracket);
        var indexOfCloseBracket = 0;
        var resultText = text.substring(0, indexOfOpenBracket);

        while (true) {
            indexOfCloseBracket = text.indexOf(closeBracket, indexOfOpenBracket);
            var placeHolder = parseInt(text.substring(indexOfOpenBracket + openBracket.length, indexOfCloseBracket));
            resultText += arguments[placeHolder + 1];
            indexOfOpenBracket = text.indexOf(openBracket, indexOfCloseBracket);

            if (indexOfOpenBracket >= 0) {
                resultText += text.substring(indexOfCloseBracket + closeBracket.length, indexOfOpenBracket);
            }
            else {
                resultText += text.substring(indexOfCloseBracket + closeBracket.length);
                break;
            }
        }

        console.log(resultText);
    }

    return {
        writeLine: stringFormat,
        writeError: stringFormat,
        writeWarning: stringFormat
    }
}());

specialConsole.writeLine("Message: hello");
//logs to the console "Message: hello"
specialConsole.writeLine("Message: {0}", "hello");
//logs to the console "Message: hello"
specialConsole.writeError("Error: {0}", "Something happened");
specialConsole.writeWarning("Warning: {0}", "A warning");

