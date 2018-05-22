"use strict";
exports.__esModule = true;
var RunLengthEncoding = /** @class */ (function () {
    function RunLengthEncoding() {
    }
    RunLengthEncoding.encode = function (str) {
        if (!str) {
            return str;
        }
        var x = 0, arr = [];
        var counter = 1;
        var result = [];
        arr = str.split("");
        while (arr[x] !== undefined) {
            while (arr[x] === str[x + 1]) {
                counter++;
                x++;
            }
            counter > 1 ? result.push(counter, str[x]) : result.push(str[x]);
            counter = 1, x++;
        }
        return result.join("");
    };
    RunLengthEncoding.decode = function (str) {
        if (!str) {
            return str;
        }
        else if (!/\d/g.test(str)) {
            return str;
        }
        var x = 0, arr = [];
        var counter = 0;
        var result = [];
        arr = str.split("");
        while (arr[x] !== undefined) {
            if (arr[x] === " ") {
                result.push(str[x]);
                x++;
                continue;
            }
            var getNum = '';
            while (Number(arr[x])) {
                
                getNum += arr[x];
                counter = Number(getNum);
                x++;
            }
            counter > 1 ? result.push(str[x].repeat(counter)) : result.push(str[x]);
            counter = 0, x++;
        }
        return result.join("");
    };
    return RunLengthEncoding;
}());
exports["default"] = RunLengthEncoding;

RunLengthEncoding.decode('12WB12W3B24WB')