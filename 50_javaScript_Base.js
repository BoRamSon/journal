



        // 1. 이렇게 변수 or 상수로 html코드를 이렇게 가져온다.
        const hiddenMenuButton = document.querySelector('#hiddenMenuButton');
        const hiddenGrid = document.querySelector('#hiddenGrid');
        const hiddenList = document.querySelector('#hiddenList');
        
        // 2. 이벤트 시 작동할 함수, 즉 기능을 만든다.

        // 3. 이벤트 시 위 기능을 실행하라는 이벤트 리스너를 만든다.

        const onClickHiddenMenuButton = () => { 

            // const windowWidth = window.innerWidth;
            // if (windowWidth <= 800) {
            // hiddenList.style.display = "block";
            // } else {
            //     hiddenList.style.display = "none";
            // }

            hiddenList.classList.toggle('active');
        };
        hiddenMenuButton.addEventListener('click',onClickHiddenMenuButton);
