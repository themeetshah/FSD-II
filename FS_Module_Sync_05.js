// write a node js script and name time by assigning hour, min and sec in form of members.
// create a fxn named add which returns third time's obj (added both)
// details of third time should be printed in console as well as in file.
var ps = require('fs')

class Time {
    constructor(hour, min, sec) {
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }

    add(other) {
        var hour3 = this.hour + other.hour;
        var min3 = this.min + other.min;
        var sec3 = this.sec + other.sec;

        if (sec3 >= 60) {
            sec3 -= 60;
            min3 += 1;
        }

        if (min3 >= 60) {
            min3 -= 60;
            hour3 += 1;
        }

        return new Time(hour3, min3, sec3)
    }

    display() {
        return ('Hour: ' + this.hour + ', Min: ' + this.min + ', Sec: ' + this.sec + "\n")
    }
}

var time1 = new Time(5, 59, 59)
var time2 = new Time(6, 59, 59)

var time3 = time1.add(time2)

console.log(time3.display())

ps.writeFileSync('Node/Time.txt', time1.display())
ps.appendFileSync('Node/Time.txt', time2.display())
ps.appendFileSync('Node/Time.txt', time3.display())