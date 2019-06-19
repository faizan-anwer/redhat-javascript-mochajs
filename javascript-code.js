module.export = function () {
    "use-strict";
    function callOneService(cb) {
        setTimeout(() => cb(undefined, 1), 1000);
    }
    function callTwoService(cb) {
        setTimeout(() => cb(undefined, 2), 1500);
    }
    function remoteMathService(cb) {
        let one, two;
        callOneService((err, num) => {
            if (err) console.log("error", err);
            one = num;
        });
        callTwoService((err, num) => {
            if (err) console.log("error", err);
            two = num;
        });
        return cb(undefined, one + two);
    }

    remoteMathService((err, answer) => {
        if (err) console.log("error", err);
        if (answer !== 3) {
            console.log("wrong answer", answer);
        } else {
            console.log("correct");
        }
    });
};

