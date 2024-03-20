
// =================================================
// 🟡 1. 자바스크립트로 화면에 보이게 할 수 있네
//
document.write('손보람 짱짱');



// =================================================
// 🟡 2. 숫자로 만들다 parseInt
// 

// 숫자 int(정수), float(실수)
// typeof : 데이터의 타입을 알려주는 명령어

var name = '손보람';
document.write(typeof name); // string
// var를 왜 쓰는지 모르겠고, name이 왜 저렇게 -표시가 되는지 모르겠습니다.



// =================================================
// 🟡 3. Math.random 사용해보기!!!
// - MDN document 에 Math 검보해서 보는 것이 좋겠습니다.

// var num = Math.random(); // 0~1 사이의 랜덤한 숫자를 뽑아줌

// 그런데 우리는 지금 실수를 출력해내는 것이 아니라, 정수를 출력해내야합니다.
// Math.random(parseInt()*45); // 0~45 사이의 랜덤한 숫자를 뽑아줌


// 그래서 고친 것이 아래와 같습니다.
// var ball1 = parseInt(num*45)+1; // 1~45 사이의 랜덤한 숫자를 뽑아줌

// document.write(ball1);




// =================================================
// 🟡 4. 지금까지 1자리를 숫자를 가져와봤다면 이제 6자리를 가져와보겠습니다. 
// 당연히 배열을 써야겠죠?!

// var lottoNumber = [1,2,3,4,5,6];

// lottoNumber.push(7);
// document.write(lottoNumber);

// 방법을 설명하자면 = 배열을 비워두고, 
//      push해주는 값이 random 값이면 되는 것이다.

// var lottoNumber = [];
// 빈배열이 있습니다.

// lottoNumber.push(parseInt(Math.random()*45+1)); 
// lottoNumber.push(parseInt(Math.random()*45+1)); 
// lottoNumber.push(parseInt(Math.random()*45+1)); 
// lottoNumber.push(parseInt(Math.random()*45+1)); 
// lottoNumber.push(parseInt(Math.random()*45+1)); 
// lottoNumber.push(parseInt(Math.random()*45+1)); 

// 1~45 사이의 랜덤한 숫자를 뽑아준 것을 push 해줄것입니다.
// document.write(lottoNumber);




// =================================================
// 🟡 5. DRY : don't repeat yourdelf
// for문의 사용하여 중복 제거하기

// var lottoNumber = [];

// for (let i=0; i<6; i++) {
//     lottoNumber.push(parseInt(Math.random()*45+1));
// }

// document.write(lottoNumber);




// =================================================
// 🟡 6. 로또번호는.. 출력되는 중복값이 있으면 안됩니다.
// - if문을 사용하여 중복값을 제거하기 (어떻게 구현해야할지 잘 모르겠습니다.)
// 🔥 이런 경험이 중요한 것 같습니다. 경험 중요... 어떻게 써야하는지 참 생각해도 답이 잘 안나오네요.
// indexOf, 


// var lottoNumber = [];

// for (let i=0; i<6; i++) {
//     var num = lottoNumber.push(parseInt(Math.random()*45+1));

//     if (lottoNumber.indexOf(num) == -1) {
//         lottoNumber.push(num);
//     }
//     // 🆘 해당 if문 설명
//     // 이 코드는 JavaScript에서 배열에 특정 값이 없는 경우에만 그 값을 배열에 추가하는 로직을 구현한 것입니다.
//     // lottoNumber.indexOf(num)은 lottoNumber 배열에서 num 값의 인덱스를 찾습니다. 만약 num 값이 배열에 없다면, -1을 반환합니다.
//     // 따라서 lottoNumber.indexOf(num) == -1는 num 값이 lottoNumber 배열에 없는지 확인하는 조건입니다.
//     // 만약 num 값이 lottoNumber 배열에 없다면, lottoNumber.push(num); 코드를 실행하여 num 값을 lottoNumber 배열에 추가합니다.
// }

// document.write(lottoNumber);




// =================================================
// 🟡 7. while문으로 변경해주기
// - 가능한 문제!!!!! : 하지만 또 문제가 있을 수 있습니다.. 
//             마지막에 중복으로 인하여 실행을 안하고 끝내버리면 
//              5자리의 숫자만 나오고 끝날 수 있습니다.
// 🔥 이런 경험이 중요한 것 같습니다. 경험 중요... 어떻게 써야하는지 참 생각해도 답이 잘 안나오네요.
// indexOf, 

// var lottoNumber = [];

// while (lottoNumber.length < 6) {
//     var num = lottoNumber.push(parseInt(Math.random()*45+1));
//     if (lottoNumber.indexOf(num) == -1) {
//         lottoNumber.push(num);
//     }

// }
// document.write(lottoNumber);





// =================================================
// 🟡 8.  .sort로 배열값 정렬 / 오름차순, 내림차이같이 정렬해보기
// 🔥 이런 경험이 중요한 것 같습니다. 경험 중요... 어떻게 써야하는지 참 생각해도 답이 잘 안나오네요.
// ✏️ 공부해야할 것 : indexOf,  .sort

// var lotto = [1,2,3,33,22,11];
// lotto.sort((a,b)=>a-b); // 오름차순 정렬
// document.write(lotto);


// =======================

// var lottoNumber = [];

// while (lottoNumber.length < 6) {
//     var num = lottoNumber.push(parseInt(Math.random()*45+1));
//     if (lottoNumber.indexOf(num) == -1) {
//         lottoNumber.push(num);
//     }

// }
// lottoNumber.sort((a,b)=>a-b); // 오름차순 정렬
// document.write(lottoNumber);






// =================================================
// 🟡 9. 마무리 정리하기
// 🔥 이런 경험이 중요한 것 같습니다. 경험 중요... 어떻게 써야하는지 참 생각해도 답이 잘 안나오네요.
// ✏️ 공부해야할 것 : indexOf,  .sort

var lottoNumber = [];

while (lottoNumber.length < 6) {
    var num = lottoNumber.push(parseInt(Math.random()*45+1));
    if (lottoNumber.indexOf(num) == -1) {
        lottoNumber.push(num);
    }

}
lottoNumber.sort((a,b)=>a-b); // 오름차순 정렬
// document.write(lottoNumber);

document.write('<div class="ball ball1">' + lottoNumber[0] + '</div>');
document.write('<div class="ball ball2">' + lottoNumber[1] + '</div>');
document.write('<div class="ball ball3">' + lottoNumber[2] + '</div>');
document.write('<div class="ball ball4">' + lottoNumber[3] + '</div>');
document.write('<div class="ball ball5">' + lottoNumber[4] + '</div>');
document.write('<div class="ball ball6">' + lottoNumber[5] + '</div>');
// 🔥 이런식으로 js 파일 내에 html을 작성할 수 있다는 것을 처음 알았습니다.


// CSS를 알아서 잘 가공하면 이쁘게 나올 수 있을 것 같습니다.









