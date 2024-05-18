//onXlickAdd関数を定義
const onClickAdd = () =>{
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    textEl.value = "";

    if(text === ""){
        alert("何やってんだお前ええええ");
        return;
    }
    

    //HTMLにタグを作って受け取ったテキストを表示
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;

    const button = document.createElement("button");
    button.textContent = "完了";
//完了ボタンが押されたときの処理を行う
    button.addEventListener("click",() =>{
        const deleteTarget = button.closest("li");
        document.getElementById("task-list").removeChild(deleteTarget);
    });
//タグの処理
    div.appendChild(p);
    div.appendChild(button);

    li.appendChild(div);
    document.getElementById("task-list").appendChild(li);
};
//ボタンが押された時の処理を記述
document.getElementById("add-button").addEventListener("click",() => onClickAdd());

//日付の取得

// 今日の日付を取得できるnew Dateを格納
const today = new Date();

// 年・月・日・曜日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();

