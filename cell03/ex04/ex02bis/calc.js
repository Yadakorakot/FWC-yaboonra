$(document).ready(function () {

    $("#calculate").click(function () {

        const left = Number($("#left").val());
        const right = Number($("#right").val());
        const operator = $("#operator").val();


        if (
            !Number.isInteger(left) ||
            !Number.isInteger(right) ||
            left < 0 ||
            right < 0
        ) {
            alert("Error :(");
            return;
        }


        if ((operator === "/" || operator === "%") && right === 0) {

            alert("It's over 9000!");

            console.log("It's over 9000!");

            return;
        }


        let result;


        if (operator === "+") {

            result = left + right;

        } else if (operator === "-") {

            result = left - right;

        } else if (operator === "*") {

            result = left * right;

        } else if (operator === "/") {

            result = left / right;

        } else if (operator === "%") {

            result = left % right;

        }


        alert(result);

        console.log(result);

    });


    setInterval(function () {

        alert("Please, use me...");

    }, 30000);

});
