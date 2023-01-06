
// 1.리터럴 literal

console.log('hello')
console.log("hello")
console.log(2)
console.log('2')

// 따옴표를 붙이면 날짜(문자)가 되고 안붙이면 뺄셈이된다
console.log(2022-12-03)
console.log("2022-12-03")


// 2. 변수 종류 : var, let, const
var num = 123
var greeting = 'hi'

console.log(num)
console.log(greeting)

var x = 2
var y = '2'

 console.log(x+x)
 console.log(y+y)

//  3. javascript 이스케이프 시퀀스 (\역슬러쉬를 이용한 특수문자표현)
// 특수기호앞에 \하면 인식안함    
// /n 은 뛰어쓰기
 console.log('it\'s a book')
 console.log('hello\nworld')

//  4.변수 3가지 종류 비교 var let const
// Block scope 지역범위{} VS Global Scope 전역범위

// 4-1. var
// var: 과거에 사용, 현재는 let, const권함
// var hoisting(move declaration from bottom to top)
{age = 10
var age }
console.log(age)

// 4-2. let
let globalName = 'global' //let을 {}밖에서 변수선언할 경우 {}안과 밖 모두 출력 가능
{
    console.log(globalName);
    //block scope 지역범위{}
    let name = 'ana'; //변수 선언과 동시에 데이터를 할당=정의 
    console.log(name)

    // let name='lisa'; 오류발생
    // let을 붙이게되면 새로운 변수를 생성하는것인데, let은 변수명 중복을 허용하지 않는다.

    name = 'lisa';
    console.log(name)
}
console.log(globalName);
// console.log(name); 출력 안되는 현상 발생!!
//let{} 안에 변수선언하면 (예:let name)-->{}범위 Scope안에서만 출력가능!

// 4-3 const 상수 (constants)

const daysInWeek = 7;
console.log('일주일은 몇일인가? 답:'+daysInWeek+'일')
console.log(`일주일은 몇일인가? 답:${daysInWeek}일`)
// 역따옴표로 해야할 때도 있음 tab키 위(`)

const price = 6000;
// price = 7000; 오류발생 const는 let과 다르게 재정의가 불가하다.
// console.log(price)