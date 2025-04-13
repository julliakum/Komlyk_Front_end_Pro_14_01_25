class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
        this.attendanceIndex = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const totalSum = this.grades.reduce((sum, grade) => sum + grade, 0);
        const averageGrade = totalSum / this.grades.length;
        return averageGrade;
    }

    present() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex] = true;
            this.attendanceIndex++;
        } else {
            console.warn(`${this.firstName} ${this.lastName}: Вже пройдено 25 занять`);
        }
    }

    absent() {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex] = false;
            this.attendanceIndex++;
        } else {
            console.warn(`${this.firstName} ${this.lastName}: Вже пройдено 25 занять`);
        }
    }

    summary() {
        const markedAttendance = this.attendance.filter(entry => entry !== null);
        const presentCount = markedAttendance.filter(entry => entry === true).length;
        const attendanceRate = markedAttendance.length > 0 ? presentCount / markedAttendance.length : 0;

        const averageGrade = this.getAverageGrade();

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


// Example of usage
const student1 = new Student("Юлія", "Комлик", 1999, [95, 98, 100, 99, 100, 97, 100]);
const student2 = new Student("Андрій", "Біловал", 1997, [70, 65, 75, 55, 80]);
const student3 = new Student("Анна", "Решетнікова", 1998, [88, 92, 85, 100, 100, 90]);

// Attendance
for (let i = 0; i < 23; i++) student1.present();
student1.absent();
student1.present();


for (let i = 0; i < 24; i++) student2.present();
student2.absent();
student2.absent();

for (let i = 0; i < 12; i++) student3.present();
for (let i = 13; i < 25; i++) student3.absent();


// Results
console.log(`${student1.firstName} ${student1.lastName}, (${student1.getAge()} років): ${student1.summary()}`);
console.log(`${student2.firstName} ${student2.lastName}, (${student2.getAge()} років): ${student2.summary()}`);
console.log(`${student3.firstName} ${student3.lastName}, (${student3.getAge()} років): ${student3.summary()}`);


