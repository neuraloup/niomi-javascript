function StudentGrades() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentGrades = new StudentGrades();

console.log("Your overall GPA is " + myStudentGrades.getGPA());