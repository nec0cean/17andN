function conv17N() {
  let now = new Date();

  //生年月日を取得して表示
  let DOBstring = document.getElementById("calendar").value;
  let DOB = Date.parse(DOBstring);
  showDOB.textContent = "入力された生年月日:" + DOBstring;

  //生まれてから今日までの差分を計算して、日数、17歳とN日、17歳とNか月で表示
  let diff = now - DOB;
  let diffDate = diff / (1000 * 60 * 60 * 24);
  showdiffDate.textContent = "生まれてから今日まで " + Math.floor(diffDate) + " 日です";
  let conv17yNday = Math.floor(diffDate) - (17 * 365);
  let conv17yNmonth = conv17yNday/30;
  show17yNmonth.textContent = "17歳と" + Math.floor(conv17yNmonth) + "か月です";
}