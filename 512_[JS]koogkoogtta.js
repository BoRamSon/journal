// 📕 koogkoogtta.js


let howManyPeople = document.querySelector('.howManyPeople');

let whoIsTurn = document.querySelector('.whoIsTurn');

let presentWord = document.querySelector('.presentWord');

let userInput = document.querySelector('#userInput');

let confirmWord; //🆘 참 이 2개를 사용해서 한다는게.. 상식적으로 생각할 수 없는 부분이다.
let typingWord;  //🆘 참 이 2개를 사용해서 한다는게.. 상식적으로 생각할 수 없는 부분이다.

let inputOkBtn = document.querySelector('.inputOkBtn');

let reStartBtn = document.querySelector('.reStartBtn');
let allReSetBtn = document.querySelector('.allReSetBtn');




// 🟩 prompt에 숫자만 입력하게 하는 방법은??
// 🆘 뭔가 function으로 만들어보려다가... 그냥 for문 잔머리를 굴려서 해봤습니다. 대단하다...
const numInputPromFc = () => {    
    for(let i = 0; i<=100; i++) {
        const inputPromptText = window.prompt("참여할 인원은 몇 명입니까? (1~10의 숫자만 입력해주세요)");
        const inputPrompt = Number(inputPromptText);
        console.log(inputPrompt);
        if(inputPromptText !== null){  //🔴대단하다... 근데 왜 prompt 취소버튼을 별도로 구분하는게 없을까... ㅠㅠ
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



const inputThreeTextFc = (event) => {
    // 🆘 이 event가 제일 이해안되고 어려운 것 같습니다... 
    // 원래는 이벤트 행들러 함수는 자동으로 이벤트 객체를 매개변수로 받기는 하는데.
    // 대충은 뭐 함수가 event를 받아서 그 event의 target의 value를 가져와서 그걸 typingWord에 넣는다는 것 같은데
    typingWord = event.target.value;


    // 🆘 input에 3글자 이상 입력하지 못하게 하는 방법은??? (🆘copliot의 힘을 빌림)
    // 🆘 [응용] 한글만 입력될 수 있게 하는 방법
    if (userInput.value.length > 3) {
        userInput.value = userInput.value.slice(0, 3);
    }

}



const nextTurnFc = () => { 
    confirmWord = typingWord.slice(0, 3);
    presentWord.textContent = confirmWord.slice(0, 3);
    console.log("\""+presentWord.textContent+"\"가 정상적으로 입력되었습니다.");
    userInput.value = "";
    userInput.focus();
    if (Number(whoIsTurn.textContent) < Number(howManyPeople.textContent)) {
        whoIsTurn.textContent = Number(whoIsTurn.textContent) + 1;
    } else {
        whoIsTurn.textContent = 1;
    }

}



const reSetFc = () => { 
    let sadPerson = whoIsTurn.textContent;
    alert("이 전 제시된 단어의 끝자리와 맞지 않아 게임이 종료되었습니다.\n벌칙을 수행할 사람은 "+sadPerson+"번째 참가자 입니다.");
    confirmWord = "";
    whoIsTurn.textContent = "1";
    presentWord.textContent = "";
    userInput.value = "";
    userInput.focus();
    // 🔥 게임을 더 이상 진행할 수 없어야 합니다!!!
}


const reStartFc = () => { 
    confirmWord = "";
    whoIsTurn.textContent = "1";
    presentWord.textContent = "";
    userInput.value = "";
    userInput.focus();
}


const allReSetFc = () => { 
    howManyPeople.textContent = "";
    confirmWord = "";
    whoIsTurn.textContent = "1";
    presentWord.textContent = "";
    userInput.value = "";
    userInput.focus();
    // 🔥 새로고침을 줘버려야겠다.
    location.reload();
}


const inputOkBtnFc = () => { 

    console.log(confirmWord);

    if (!confirmWord || confirmWord[confirmWord.length - 1] === typingWord[0]) {
        nextTurnFc();
    } else {
        reSetFc();
    }
    
}


numInputPromFc(); // 이건 언제나 그냥 실행되면 되지만,

userInput.addEventListener('input', inputThreeTextFc); // 이건 input에 작성되는 이벤트가 있을 때 실행되는거야.

// 🆘 enter키를 통한 입력을 가능하게 하는 코드입니다. 
// (🆘copliot의 힘을 빌림) 근데 이거 틀렸음... 무조건 enter쳐버리니까 안되네
// userInput.addEventListener('keyup', (e) => {
//     if(e.keyCode === 13) {
//         inputOkBtn.click();
//     }
// }
// );

inputOkBtn.addEventListener('click', inputOkBtnFc); // 이건 버튼클릭 이벤트가 있을 때 실행되는거야.

reStartBtn.addEventListener('click', reStartFc); // 이건 버튼클릭 이벤트가 있을 때 실행되는거야.

allReSetBtn.addEventListener('click', allReSetFc); // 이건 버튼클릭 이벤트가 있을 때 실행되는거야.






