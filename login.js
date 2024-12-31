// ログインをチェックする関数
function login(username, password) {
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === username && users[i].password === password) {
                alert("ログイン成功！");
                window.location.href = 'logged-in-page.html';
                
                // ログイン状態を保存
                localStorage.setItem('isLoggedIn', true);
                // // ログイン時に保存
                localStorage.setItem('loggedInUser',username);

                return;
            }
        }
    }
    alert("ユーザー名またはパスワードが正しくありません。");
}

document.addEventListener('DOMContentLoaded', function() {
    // ページの読み込みが完了した後に実行されるコード
    
    // ログアウトボタンに対するイベントリスナーの設定
    document.getElementById('logoutButton').addEventListener('click', logout);

    // 他の必要な初期化処理や関数呼び出しなどをここに追加します
});

// ログアウト処理
function logout() {
    // ログイン状態を削除
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('loggedInUser');
    // localStorage.clear()
    alert("ログアウトしました。");
    // ログアウト後にログインページにリダイレクトするなどの追加の処理を行う場合はここに記述する
    window.location.href = 'login.html'; // ログインページにリダイレクトする例
}

// ページが読み込まれた時に実行される処理
document.addEventListener('DOMContentLoaded', function() {
    displayUsers();
    // ログイン状態を確認
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === "true") {
        // ログインしている場合はログイン済みページにリダイレクト
        window.location.href = 'logged-in-page.html';
    } else {
        // ログインしていない場合は通常のログインページを表示
        displayLogin();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // ログインしているユーザー名を取得
    const loggedInUserName = localStorage.getItem('loggedInUser');

    // 取得したユーザー名を表示する要素を取得
    const loggedInUserNameElement = document.getElementById('loggedInUserName');

    // ユーザー名を表示する要素に取得したユーザー名をセット
    if (loggedInUserNameElement) {
        loggedInUserNameElement.textContent = loggedInUserName;
    }
});

// function displayLogin() {
//     // 通常のログインページの表示処理をここに追加
//     // 例: ログインフォームを表示する処理など
// }

// 新しいユーザーを追加する関数
function register(username, password) {
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
        
        // 重複チェック
        const isDuplicate = users.some(user => user.name === username || user.password === password);
        
        if (isDuplicate) {
            alert("そのユーザー名またはパスワードは既に存在します。");
        } else {
            users.push({ name: username, password: password });
            localStorage.setItem('users', JSON.stringify(users));
            alert("新しいユーザーを追加しました！");
            location.reload();
        }
    } else {
        users = [];
        users.push({ name: username, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("新しいユーザーを追加しました！");
        location.reload();
    }
}

// ログインフォームの送信時の処理
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    login(usernameInput, passwordInput);
});

// 新規登録フォームの送信時の処理
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    register(newUsername, newPassword);
});



// ユーザーデータを表示する関数
function displayUsers() {
    const table = document.getElementById('userTable');
    const tableBody = table.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // 既存のデータを削除

    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);

        if (users.length > 0) {
            document.getElementById('deleteUserContainer').style.display = 'block'; // データがある場合は要素を表示
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td><button onclick="deleteUser('${user.name}')">削除</button></td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            table.style.display = 'none'; // データがない場合はテーブルを非表示
        }
    }
}

// ユーザーデータを削除する関数
function deleteUser(username) {
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);

        // パスワードを入力するためのダイアログを表示する
        const passwordInput = promptPassword();

        const userToDelete = users.find(user => user.name === username && user.password === passwordInput);
        if (userToDelete) {
            users = users.filter(user => user !== userToDelete);
            localStorage.setItem('users', JSON.stringify(users));
            alert(`${username} を削除しました！`);
            location.reload();
        } else {
            alert("パスワードが正しくありません。");
        }
    }
    // パスワード入力のためのダイアログを表示する関数
    function promptPassword() {
        const passwordInput = prompt("パスワードを入力してください:");
        return passwordInput;
    }
}
