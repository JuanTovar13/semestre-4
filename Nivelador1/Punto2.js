function computeGrades(grades) {
const gradeMap = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
};


const parsed = grades.map(grade => {
    if (grade >= 90) {
        gradeMap.A++;
        return 'A';
    } else if (grade >= 80) {
        gradeMap.B++;
        return 'B';
    } else if (grade >= 70) {
        gradeMap.C++;
        return 'C';
    } else if (grade >= 60) {
        gradeMap.D++;
        return 'D';
    } else {
        gradeMap.F++;
        return 'F';
    }
});

return {
    parsed: parsed,
    passed: gradeMap.A + gradeMap.B + gradeMap.C + gradeMap.D,
    lose: gradeMap.F
};
}

const studentGrades = [100, 50, 65, 70, 85, 96, 45];
const result = computeGrades(studentGrades);
console.log(result);