// // ローカルストレージから国と関連するページのマッピングを取得する関数
// function getCountryPage(country) {
//   // 仮の例として、いくつかの国と関連するページをマッピングします
//   const countryPages = {
//     "日本": "https://kanko.travel.rakuten.co.jp/",
//     // "Japan": ["https://en.wikipedia.org/wiki/Japan","japan","日本"],
//     "アメリカ": "https://www.tohoho-web.com/www.htm",
//     // 他の国と関連するページを追加
//   };

//   return countryPages[country];
// }

// // エンターキーを押した時の処理
// document.getElementById('countryInput').addEventListener('keyup', function(event) {
//   if (event.key === 'Enter') {
//     searchCountry();
//   }
// });

// // ユーザーが国名を検索するための関数
// function searchCountry() {
//   const countryInput = document.getElementById("countryInput").value;
//   const countryPage = getCountryPage(countryInput);

//   if (countryPage) {
//     // 該当するページがある場合はローカルストレージに保存し、リダイレクトする
//     localStorage.setItem("lastVisitedCountry", countryInput);
//     window.location.href = countryPage;
//   } else {
//     alert("No page found for this country.");
//   }
// }

// // ページを読み込んだ際に前回訪れた国のページをチェックする
// window.onload = function() {
//   const lastVisitedCountry = localStorage.getItem("lastVisitedCountry");
//   if (lastVisitedCountry) {
//     const countryPage = getCountryPage(lastVisitedCountry);
//     if (countryPage) {
//       window.location.href = countryPage;
//     }
//   }
// };

// localStorage.removeItem('lastVisitedCountry');
// localStorage.removeItem('user-info');

// document.addEventListener("DOMContentLoaded", function () {
//   const searchForm = document.getElementById("search-form");
//   const searchInput = document.getElementById("search-input");

//   searchForm.addEventListener("submit", function (e) {
//     e.preventDefault(); // デフォルトのフォーム送信を防ぎます

//     const searchKeyword = searchInput.value; // 入力されたキーワードを取得
//     // ここで検索処理を実装し、検索結果を表示または処理します
//     alert("検索キーワード: " + searchKeyword);
//   });
// });

// // 検索フォームの送信時の処理
// document.getElementById('searchForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // デフォルトのフォーム送信を防止

//   const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // 検索語句を取得し、小文字に変換

//   // 検索語句に対応する観光スポットのページへの遷移
//   // ここでは、検索語句と一致するページへのリンクを直接指定します
//   if (searchTerm === '日本') {
//     window.location.href = 'https://kanko.travel.rakuten.co.jp/';
//   } else if (searchTerm === 'イギリス') {
//     window.location.href = 'https://www.club-t.com/ct/kanko/guide/abroad/info/a_042/';
//   } else if (searchTerm === '韓国') {
//     window.location.href = 'https://travel.rakuten.co.jp/mytrip/ranking/sightseeing-korea';
//   } else {
//     alert('該当する観光スポットが見つかりませんでした。');
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // デフォルトのフォーム送信を防ぎます

    const searchKeyword = searchInput.value; // 入力されたキーワードを取得
    // ここで検索処理を実装し、検索結果を表示または処理します
    searchPage(searchKeyword);
  });
});

function searchPage(keyword) {
  const countryPages = {
    "日本": "https://kanko.travel.rakuten.co.jp/",
    "イギリス": "https://www.club-t.com/ct/kanko/guide/abroad/info/a_042/",
    "韓国": "https://travel.rakuten.co.jp/mytrip/ranking/sightseeing-korea"
    // 他の国と関連するページを追加
  };

  const pageURL = countryPages[keyword];
  if (pageURL) {
    window.location.href = pageURL;
  } else {
    alert("該当する観光スポットが見つかりませんでした。");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const highlightLinks = document.querySelectorAll(".highlight-link");

  highlightLinks.forEach(function (link) {
    const x = link.getAttribute("data-x");
    const y = link.getAttribute("data-y");
    const highlightPoint = document.createElement("div");
    highlightPoint.classList.add("highlight-point");

    link.addEventListener("mouseover", function () {
      // リンクにカーソルを合わせたら光るポイントを表示
      highlightPoint.style.display = "block";
      // 光るポイントの位置を設定
      setHighlightPointPosition(highlightPoint, x, y);
    });

    link.addEventListener("mouseout", function () {
      // カーソルがリンクから離れたら光るポイントを非表示
      highlightPoint.style.display = "none";
    });

    // ポイントをコンテナに追加
    document.querySelector(".container").appendChild(highlightPoint);
  });

  function setHighlightPointPosition(point, x, y) {
    // ポイントの位置をCSSスタイルに適用
    point.style.left = x + "%"; // xは相対的な位置（パーセンテージ）
    point.style.bottom = y + "%"; // yは相対的な位置（パーセンテージ）
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomButton = document.getElementById("map-button-af");
  const zoomButton2 = document.getElementById("map-button-eu");
  const zoomButton3 = document.getElementById("map-button-ap");
  const zoomButton4 = document.getElementById("map-button-oc");
  const zoomButton5 = document.getElementById("map-button-na");
  const zoomButton6 = document.getElementById("map-button-sa");
  const imageToZoom = document.getElementById("imageToZoom");
  // const elements = document.querySelectorAll(".World_Map_btn");
  const originalElement = document.getElementById("map-button-af");
  const originalElement2 = document.getElementById("map-button-eu");
  const originalElement3 = document.getElementById("map-button-ap");
  const originalElement4 = document.getElementById("map-button-oc");
  const originalElement5 = document.getElementById("map-button-na");
  const originalElement6 = document.getElementById("map-button-sa");
  const newElement = document.getElementById("newElement");
  const list = document.getElementById("list-group-af")
  const list2 = document.getElementById("list-group-eu");
  const list3 = document.getElementById("list-group-ap");
  const list4 = document.getElementById("list-group-oc")
  const list5 = document.getElementById("list-group-na")
  const list6 = document.getElementById("list-group-sa")
  // const  = document.getElementById("");

  // フラグの初期状態を設定
  let isZoomed = false;
  
  
  zoomButton.addEventListener("click", function () {
    // imageToZoom.classList.toggle("zoomed");
    // フラグの状態をトグル
    isZoomed = !isZoomed;
      
    // ズームされたときに新しい要素を表示または非表示にする
    // フラグの値に応じて要素の表示/非表示を切り替える
    if (isZoomed) { //(imageToZoom.classList.contains("zoomed"))
      // elements.forEach(function (element) {
      //       // ここで各要素に対する処理を行う
      // });
      imageToZoom.classList.add("zoomed"); // ズームクラスを追加
      originalElement.style.display = "none";
      originalElement2.style.display = "none";
      originalElement3.style.display = "none";
      originalElement4.style.display = "none";
      originalElement5.style.display = "none";
      originalElement6.style.display = "none";
      newElement.style.display = "block";
      list.style.display = "block";
    } else {
      imageToZoom.classList.remove("zoomed");// ズームクラスを削除
      originalElement.style.display = "block";
      originalElement2.style.display = "block";
      originalElement3.style.display = "block";
      originalElement4.style.display = "block";
      originalElement5.style.display = "block";
      originalElement6.style.display = "block";
      newElement.style.display = "none";
      list.style.display = "none";
    }
  });

  zoomButton2.addEventListener("click", function () {
    isZoomed = !isZoomed;
    
    // ズームされたときに新しい要素を表示または非表示にする
    // フラグの値に応じて要素の表示/非表示を切り替える
    if (isZoomed) {
      imageToZoom.classList.add("zoomed2"); // ズームクラスを追加
      originalElement.style.display = "none";
      originalElement2.style.display = "none";
      originalElement3.style.display = "none";
      originalElement4.style.display = "none";
      originalElement5.style.display = "none";
      originalElement6.style.display = "none";
      newElement.style.display = "block";
      list2.style.display = "block";
    } else {
      imageToZoom.classList.remove("zoomed2");// ズームクラスを削除
      originalElement.style.display = "block";
      originalElement2.style.display = "block";
      originalElement3.style.display = "block";
      originalElement4.style.display = "block";
      originalElement5.style.display = "block";
      originalElement6.style.display = "block";
      newElement.style.display = "none";
      list2.style.display = "none";
    }
  });

  zoomButton3.addEventListener("click", function () {
    isZoomed = !isZoomed;
      
    // ズームされたときに新しい要素を表示または非表示にする
    // フラグの値に応じて要素の表示/非表示を切り替える
    if (isZoomed) {
      imageToZoom.classList.add("zoomed3"); // ズームクラスを追加
      originalElement.style.display = "none";
      originalElement2.style.display = "none";
      originalElement3.style.display = "none";
      originalElement4.style.display = "none";
      originalElement5.style.display = "none";
      originalElement6.style.display = "none";
      newElement.style.display = "block";
      list3.style.display = "block"
    } else {
      imageToZoom.classList.remove("zoomed3");// ズームクラスを削除
      originalElement.style.display = "block";
      originalElement2.style.display = "block";
      originalElement3.style.display = "block";
      originalElement4.style.display = "block";
      originalElement5.style.display = "block";
      originalElement6.style.display = "block";
      newElement.style.display = "none";
      list3.style.display = "none"
    }
  });

  zoomButton4.addEventListener("click", function () {
    isZoomed = !isZoomed;
      
    // ズームされたときに新しい要素を表示または非表示にする
    // フラグの値に応じて要素の表示/非表示を切り替える
    if (isZoomed) {
      imageToZoom.classList.add("zoomed4"); // ズームクラスを追加
      originalElement.style.display = "none";
      originalElement2.style.display = "none";
      originalElement3.style.display = "none";
      originalElement4.style.display = "none";
      originalElement5.style.display = "none";
      originalElement6.style.display = "none";
      newElement.style.display = "block";
      list4.style.display = "block";
    } else {
      imageToZoom.classList.remove("zoomed4");// ズームクラスを削除
      originalElement.style.display = "block";
      originalElement2.style.display = "block";
      originalElement3.style.display = "block";
      originalElement4.style.display = "block";
      originalElement5.style.display = "block";
      originalElement6.style.display = "block";
      newElement.style.display = "none";
      list4.style.display = "none";
    }
  });

  zoomButton5.addEventListener("click", function () {
    isZoomed = !isZoomed;
      
    // ズームされたときに新しい要素を表示または非表示にする
    // フラグの値に応じて要素の表示/非表示を切り替える
    if (isZoomed) {
      imageToZoom.classList.add("zoomed5"); // ズームクラスを追加
      originalElement.style.display = "none";
      originalElement2.style.display = "none";
      originalElement3.style.display = "none";
      originalElement4.style.display = "none";
      originalElement5.style.display = "none";
      originalElement6.style.display = "none";
      newElement.style.display = "block";
      list5.style.display = "block";
    } else {
      imageToZoom.classList.remove("zoomed5");// ズームクラスを削除
      originalElement.style.display = "block";
      originalElement2.style.display = "block";
      originalElement3.style.display = "block";
      originalElement4.style.display = "block";
      originalElement5.style.display = "block";
      originalElement6.style.display = "block";
      newElement.style.display = "none";
      list5.style.display = "block";
    }
  });

  zoomButton6.addEventListener("click", function () {
    isZoomed = !isZoomed;
      
    // ズームされたときに新しい要素を表示または非表示にする
    // フラグの値に応じて要素の表示/非表示を切り替える
    if (isZoomed) {
      imageToZoom.classList.add("zoomed6"); // ズームクラスを追加
      originalElement.style.display = "none";
      originalElement2.style.display = "none";
      originalElement3.style.display = "none";
      originalElement4.style.display = "none";
      originalElement5.style.display = "none";
      originalElement6.style.display = "none";
      newElement.style.display = "block";
      list6.style.display = "block";
    } else {
      imageToZoom.classList.remove("zoomed");// ズームクラスを削除
      originalElement.style.display = "block";
      originalElement2.style.display = "block";
      originalElement3.style.display = "block";
      originalElement4.style.display = "block";
      originalElement5.style.display = "block";
      originalElement6.style.display = "block";
      newElement.style.display = "none";
      list6.style.display = "block";
    }
  });

  // リセットボタンのクリックイベントを処理
  newElement.addEventListener("click", function () {
    // ズームを元に戻す処理
    isZoomed = false;
    imageToZoom.classList.remove("zoomed","zoomed2","zoomed3","zoomed4","zoomed5","zoomed6");
    originalElement.style.display = "block";
    originalElement2.style.display = "block";
    originalElement3.style.display = "block";
    originalElement4.style.display = "block";
    originalElement5.style.display = "block";
    originalElement6.style.display = "block";
    newElement.style.display = "none";
    list.style.display = "none";
    list2.style.display = "none";
    list3.style.display = "none";
    list4.style.display = "none";
    list5.style.display = "none";
    list6.style.display = "none";
  });
});
  