function solve(examPoints, homeworkCompleted, totalHomework) {

    let maxPoints = 100;
    let maxExamPoints = 400;

    let studentExamPoints = examPoints / 0.9;
    let rounded = Math.ceil(studentExamPoints);
    let studentExamPointsRounded = maxExamPoints - rounded;



    console.log(studentExamPointsRounded)
}
solve('300', '10', '10');