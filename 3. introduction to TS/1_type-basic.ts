// // Type annotation
// let  [Indentifier] : [type]  = [value] ;
// var  [Indentifier] : [type]  = [value] ;
// const [Indentifier] : [type]  = [value]; 

// 함수의 파라미터 그리고 리턴값에는 타입 annotation과 값이 필요합니다
var user: string = 'Bee'
function identity(user: string): string {
    return user
}



let num: number = 10;
let decimal: number = 100; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수 리터럴
let binnary: number = 0b1010; // 2진수 리터럴
let octal: number = 0o744; // 8진수 리터럴
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000_000;
