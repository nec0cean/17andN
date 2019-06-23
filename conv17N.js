function conv17N() {
  let now = new Date();

  //生年月日を取得して表示
  let DOBstring = document.getElementById("calendar").value;
  let DOB = Date.parse(DOBstring);
  console.log("入力された生年月日:" + DOBstring);

  //生まれてから現在までの差分を計算して、日数、17歳とN日、17歳とNか月で表示
  let diff = now - DOB;
  let diffDate = diff / (1000 * 60 * 60 * 24);
  console.log("現在まで" + Math.floor(diffDate) + "日");
  let conv17yNday = Math.floor(diffDate) - (17 * 365);
  console.log("17歳と" + conv17yNday + "日です");
  let conv17yNmonth = conv17yNday/30;
  console.log("17歳と" + Math.floor(conv17yNmonth) +"か月です");
}