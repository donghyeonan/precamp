const fruits = [
    {number: 1 , title: "레드향" },
    {number: 2 , title: "샤인머스켓" },
    {number: 3 , title: "산청딸기" },
    {number: 4 , title: "한라봉" },
    {number: 5 , title: "사과" },
    {number: 6 , title: "애플망고" },
    {number: 7 , title: "딸기" },
    {number: 8 , title: "천혜향" },
    {number: 9 , title: "과일선물세트" },
    {number: 10 , title: "귤" },
];

for (let i = 0; i<fruits.length ; i++) {
    console.log(fruits[i].number + fruits[i].title)
}
// # VM2091:2 1레드향
// # VM2091:2 2샤인머스켓
// # VM2091:2 3산청딸기
// # VM2091:2 4한라봉
// # VM2091:2 5사과
// # VM2091:2 6애플망고
// # VM2091:2 7딸기
// # VM2091:2 8천혜향
// # VM2091:2 9과일선물세트
// # VM2091:2 10귤

for (let i = 0; i<fruits.length ; i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}