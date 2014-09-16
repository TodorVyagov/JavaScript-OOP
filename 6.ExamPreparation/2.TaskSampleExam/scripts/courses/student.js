define(function () {
    var Student = (function () {
        function Student(obj) {
            this.name = obj.name;
            this.exam = obj.exam;
            this.homework = obj.homework;
            this.attendance = obj.attendance;
            this.teamwork = obj.teamwork;
            this.bonus = obj.bonus;
        }

        return Student;
    }());

    return Student;
});