//onClickAdd関数を定義
const onClickAdd = () =>{
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    textEl.value = "";

        //日付の取得(入力から）
const monthEl = document.getElementById("month");
const mon = monthEl.value
const dayEl = document.getElementById("day");
const days = dayEl.value
const tooday ="　の期限は" + mon + "月" + days + "日" 
// const posttoday = int(mon + days ) ;

const priorityEl = document.getElementById("priority");
const priori = priorityEl
const prio = "　重要度は" + priori  + "です。"
// if(prio == 3){
//    let i = "　重要度は高です。"
// }else if(prio == 2){
//    let i = "　重要度は中です。"
// }else{
//    let i = "　重要度は低です。"
// }


// //日付の取得（通常の時間）
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const toooday ="　の期限は" + month + "月" + date + "日"



    if(text === ""){
        alert("何やってんだお前ええええ");
        return;
    }

    // if(tooday ===""){

    // }

    if(tooday == toooday){
        alert("ちゃんとやらなかったらどうなるかわかってるよね？♡");
        window.location.replace = './declaration.html'; // 通常の遷移
        window.open('./declaration.html');
    }else{
        
    }
    

    //HTMLにタグを作って受け取ったテキストを表示
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const h4 = document.createElement("h4");
    p.textContent = text;
    a.textContent = tooday;
    h4.textContent = prio;
    


    const button = document.createElement("button");
    button.textContent = "完了";
//完了ボタンが押されたときの処理を行う
    button.addEventListener("click",() =>{
        const deleteTarget = button.closest("li");
        document.getElementById("task-list").removeChild(deleteTarget);
    });
//タグの処理
    div.appendChild(p);
    div.appendChild(a);
    div.appendChild(h4);
    div.appendChild(button);

    li.appendChild(div);
    document.getElementById("task-list").appendChild(li);
};
//ボタンが押された時の処理を記述
document.getElementById("add-button").addEventListener("click",() => onClickAdd());



// 今日の日付を取得できるnew Dateを格納
// const today = new Date();

// 年・月・日・曜日を取得
// const year = today.getFullYear();
// const month = today.getMonth() + 1;
// const date = today.getDate();
// const day = today.getDay();


// function screen_lock(){
//     let lock_screen = document.createElement('div');
//     lock_screen.id = "screenLock";
  
//     lock_screen.style.height = '100%';
//     lock_screen.style.left = '0px';
//     lock_screen.style.position = 'fixed';
//     lock_screen.style.top = '0px';
//     lock_screen.style.width = '100%';
//     lock_screen.style.zIndex = '9999';
//     lock_screen.style.opacity = '0';
  
//     let objBody = document.getElementsByTagName("body").item(0);
//     objBody.appendChild(lock_screen);
//   }

//   function screen_unlock(){
// let screenLock = document.getElementById("screenLock");
// screenLock.parentNode.removeChild(screenLock);
// }