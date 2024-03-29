
document.addEventListener('DOMContentLoaded', function() {

//==========================================================
    // HTML - 헤더 생성
    var headerBox = document.createElement('div');
    headerBox.id = 'headerBox';
    document.body.insertBefore(headerBox, document.body.firstChild);

    var header = document.createElement('header');
    header.textContent = 'Welcome to My site~ I just Learn everything!';
    headerBox.appendChild(header);



    // HTML - 목차 생성
    var menu = document.createElement('div');
    menu.id = 'menu';

    var menuButton = document.createElement('button');
    menuButton.id = 'menuButton';
    menuButton.textContent = '목 차';
    menu.appendChild(menuButton);

        var menuItems = document.createElement('div');
        menuItems.id = 'menuItems';
        menuItems.className = 'hidden';
        menu.appendChild(menuItems);

        // [기능] 목차버튼에 클릭 이벤트 리스너 추가
        //  ㄴ 목차버튼을 클릭했을 때, 목차가 표시되거나 사라지도록 합니다!!!
        menuButton.addEventListener('click', function() {
            // 목차가 현재 표시되고 있는지 확인하고, 그 상태를 토글
            if (menuItems.style.display === 'none' || menuItems.style.display === '') {
                menuItems.style.display = 'block';
            } else {
                menuItems.style.display = 'none';
            }
        });


        
                // 대목차 생성 ----------------------------------------
                var mainItem = document.createElement('li');
                mainItem.id = 'highContents-li';

                var mainButton = document.createElement('button');
                mainButton.textContent = '👉';
                mainItem.appendChild(mainButton);

                var mainLink = document.createElement('a');
                mainLink.href = '#';
                mainLink.textContent = '◼︎ 대목차';
                mainItem.appendChild(mainLink);

                mainButton.addEventListener('click', function() {
                    subItems.style.display = subItems.style.display === 'none' ? 'block' : 'none';
                    mainButton.textContent = subItems.style.display === 'none' ? '👉' : '👇';
                });

                menuItems.appendChild(mainItem);

                // 중목차 생성 ----------------------------------------
                var subItems = document.createElement('ul');
                subItems.id = 'middleContents-ui';
                subItems.style.display = 'none';
                mainItem.appendChild(subItems);

                var subItem1 = document.createElement('li');
                subItem1.id = 'middleContents-li';

                var subButton1 = document.createElement('button');
                subButton1.textContent = '👉';
                subItem1.appendChild(subButton1);

                var subLink1 = document.createElement('a');
                subLink1.href = '#';
                subLink1.textContent = 'ㄴ 중목차 1';
                subItem1.appendChild(subLink1);

                subButton1.addEventListener('click', function() {
                    subSubItems1.style.display = subSubItems1.style.display === 'none' ? 'block' : 'none';
                    subButton1.textContent = subSubItems1.style.display === 'none' ? '👉' : '👇';
                });

                subItems.appendChild(subItem1);

                // 소목차 생성 ----------------------------------------
                var subSubItems1 = document.createElement('ul');
                subSubItems1.id = 'lowContents-ui';
                subSubItems1.style.display = 'none';
                subItem1.appendChild(subSubItems1);

                var subSubItem1 = document.createElement('li');
                subSubItem1.id = 'lowContents-li';

                var subSubLink1 = document.createElement('a');
                subSubLink1.href = 'index.html';
                subSubLink1.textContent = 'ㄴ 소목차 1';
                subSubItem1.appendChild(subSubLink1);

                subSubItems1.appendChild(subSubItem1);

    document.body.appendChild(menu);



//==========================================================
    // CSS 생성
    var style = document.createElement('style');
    style.textContent = `

        /* ---------------------------------------------------------- */
        /* 🟩 for body */
        body {
            margin-left: 240px;  
            padding-left : 20px;  
        }

        /* ---------------------------------------------------------- */
        /* 🟩 for header */
        #headerBox {
            text-align: center;
            border-bottom: 2px solid black;
        }

        header {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        /* ---------------------------------------------------------- */
        /* 🟩 for 목차 */
        #menu {
            position: absolute;
            top: 20px;
            left: 30px;
        }

        #menuButton {
            background-color: #f9f9f9;
            border: 2px solid black;
            color: green;
            padding: 8px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0px 2px 16px 5px rgba(0,0,0,0.2);
        }

        #menuItems {
            display: block;
            position: absolute;
            top: 50px;
            left: 0px;
            background-color: #f9f9f9;
            min-width: 170px;
            box-shadow: 0px 8px 16px 5px rgba(0,0,0,0.2);
            z-index: 1;
            border: 2px solid black;
            padding: 10px;
        }

        #menuItems a {
            color: black;
            text-decoration: none;
            display: inline-block;
        }

        #menuItems Button {
            background-color: #f9f9f9;
            border: 0px solid black;
            font-size: 20px;
            font-weight: bold;
            color: green;

        }

        #menuItems ul, li {
            list-style-type: none;
        }

        .hidden {
            display: none;
        }

        /* ---------------------------- */
        #highContents-li {

        }

        #middleContents-ui {
            margin-top: 3px;
            margin-left: 10px;
            padding: 0;

        }

        #middleContents-li {
            

        }


        #lowContents-ui {
            margin-top: 3px;
            margin-left: 20px;
            padding: 0;
        }

        #lowContents-li {
            
        }

        /* ---------------------------- */



    

        /* ---------------------------------------------------------- */
        /* 🟩 for 화면조정 */

        @media (max-width: 800px) {
            #menuItems {
                display: none;
            }
        
            body {
                margin-left: 110px;
            }
            #menuItems {
                min-width: 220px;
            }
    
            #menuButton:hover ~ #menuItems, #menuItems:hover {
                display: block;  
            }
        }



    `;
    document.head.appendChild(style);

});




// js 코드가 전혀 필요없습니다!!!!!!!!!
//==========================================================
    // JavaScript 동작 생성


    // menuButton.addEventListener('mouseover', function() {
    //     menuItems.style.display = 'block';
    // });

    // menuItems.addEventListener('mouseleave', function() {
    //     menuItems.style.display = 'none';
    // });


    // 🆘 copliot를 통한 질문 : 이 js코드에도 화면 width가 800이하 일때, js코드가 적용될 수 있도록 수정해주세요.
    // menuButton.addEventListener('mouseover', function() {
    //     if (window.innerWidth <= 800) {
    //         menuItems.style.display = 'block';
    //     }
    // });
    
    // menuItems.addEventListener('mouseleave', function() {
    //     if (window.innerWidth <= 800) {
    //         menuItems.style.display = 'none';
    //     }
    // });













