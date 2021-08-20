///  함수의 파라미터에 타입을 정의하는 방식
function Sum (a:number, b:number){
    return a + b
}

Sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function Add(): number{
    return 10;
}


// 함수의 타입을 정의하는 방식
function Total (a:number, b:number):number{
    return a + b
}


// 함수의 옵셔널 파라미너 
function log(a: string, b?: string, c?: string){
    // 특정 파라미터의 선택적 사용을 위해서 ? 선언
}
log('hello ts', 'abc')
