



let howManyPeople = document.querySelector('.howManyPeople');
let whoIsTurn = document.querySelector('.whoIsTurn');
let presentWord = document.querySelector('.presentWord');
let inputOkBtn = document.querySelector('.inputOkBtn');

let reStartBtn = document.querySelector('.reStartBtn');
let editPeopleBtn = document.querySelector('.editPeopleBtn');



// 🟩 prompt에 숫자만 입력하게 하는 방법은??
// const possOnlyNumber = (n) => {
// }
// 🆘 뭔가 function으로 만들어보려다가... 그냥 for문 잔머리를 굴려서 해봤습니다. 대단하다...
const numInputPromFc = () => {    
    for(let i = 0; i<=100; i++) {
        const inputPromptText = window.prompt("참여할 인원은 몇 명입니까? (1~10의 숫자만 입력해주세요)");
        const inputPrompt = Number(inputPromptText);
        console.log(inputPrompt);
        if(inputPromptText !== null){ //🔴대단하다... 근데 왜 prompt 취소버튼을 별도로 구분하는게 없을까... ㅠㅠ
            if(Number.isNaN(inputPrompt) || inputPrompt == "" || inputPrompt === 0 || inputPrompt > 10) {
                console.log("ㄴ 숫자가 아니거나, 10보다 높은 숫자를 입력되었습니다.");
                alert("숫자를 입력하지 않았거나, 10보다 높은 숫자를 입력했습니다. 다시 입력해주세요.");
            }else {
                console.log("ㄴ "+typeof(inputPrompt) + "가 입력되었습니다.");
                howManyPeople.textContent = inputPrompt;
                break;
            }
        } else {
            alert(" 👋 취소하셨습니다.");
            break;
        }
    }
}

numInputPromFc();






