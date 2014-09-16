/// <reference path="../libs/requirejs/require.js" />
define(['courses/student'], function (Student) {
    var Course = (function () {
        function Course(title, formula) {
            this.title = title;
            this.formula = formula;
            this.students = [];
            this.results = [];
        }

        Course.prototype = {
            addStudent: function (student) {
                if (!(student instanceof Student)) {
                    throw {
                        message: 'Incorrect input type! Course can add only students!'
                    };
                }

                this.students.push(student);
            },
            calculateResults: function () {
                for (var i = 0, len = this.students.length; i < len; i++) {
                    var student = this.students[i];
                    var result = this.formula(student);

                    this.results.push({
                        result: result,
                        student: student
                    });
                }

                return this;
            },
            getTopStudentsByExam: function(top){
                top = top || this.students.length;
                var topStudents = this.students.slice(0, top);

                topStudents.sort(function (st1, st2) {
                    return st2.exam - st1.exam;
                });

                return topStudents;
            },
            getTopStudentsByTotalScore: function (top) {
                top = top || this.students.length;
                if (!this.results) {
                    this.calculateResults();
                }

                var topStudents = [];
                var copyOfResults = this.results.slice(0);
                copyOfResults.sort(function (result1, result2) {
                    return result2.result - result1.result;
                });

                for (var i = 0; i < top; i++) {
                    var student = copyOfResults[i].student;
                    topStudents.push(student);
                }

                return topStudents;
            },
        };

        return Course;
    }());

    return Course;
});