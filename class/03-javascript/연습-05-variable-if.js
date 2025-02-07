// 데이터타입, 연산자 실습
1 - "만원"
// NaN
1 + "만원"
// '1만원'
!false
// true
!true
// false
true && true
// true
true && false
// false
false || true
// true


// 조건문 실습 1

if(1+1 == 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM502:2 정답입니다

if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM521:2 정답입니다

if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM538:4 틀렸습니다

if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM548:4 틀렸습니다

if (profile.age >= 20) {
    console.log("성인입니다")
} else if (profile.age >= 8) {
    console.log("학생입니다")
} else if(profile.age > 0) {
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다")
}