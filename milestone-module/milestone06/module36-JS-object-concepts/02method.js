
// 36.2 Object method property review

// property of different data type stay together in Object
const student = {
    id: 101, 
    name: 'RJ Kibria', 
    money: 5000, 
    major: 'mathematics', 
    isRich: false,
    subjects: ['english', 'economics', 'linear algebra', 'calculus'], 
    bestFriend: {
        name: 'kundu', 
        major: 'mathematics'
    }, 
    // method (function) - access property, update value, return value
    takeExam: function(){ 
        console.log(this.name, 'taking exam');
    }, 
    treatDey: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }
};

// Accessing Object Properties = objectName.methodName()
student.takeExam(); // RJ Kibria taking exam
const remaining1 = student.treatDey(900, 100);
console.log(remaining1); // 4000

const remaining2 = student.treatDey(500, 50);
console.log(remaining2); // 3450

