var a=Math.ceil(Math.random()*9);
var b=Math.ceil(Math.random()*9);
var answer=a*b;

var 바디=document.body;
var 단어=document.createElement('div');
단어.textContent=String(a)+'곱하기'+String(b)+'는?';
document.body.append(단어);
var 폼=document.createElement('form');
document.body.append(폼);
var 입력창=document.createElement('input');
폼.append(입력창);
var 버튼=document.createElement('button');
버튼.textContent='입력';
폼.append(버튼);
var 결과창=document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수(이벤트){
	이벤트.preventDefault();
	if(answer===Number(입력창.value)){
		결과창.textContent = "딩동댕";
		a=Math.ceil(Math.random()*9);
		b=Math.ceil(Math.random()*9);
		answer=a*b;
		단어.textContent=String(a)+'곱하기'+String(b)+'는?';
		입력창.value=' ';
		입력창.focus();
	}
	else{
		결과창.textContent='땡';
		입력창.value=' ';
		입력창.focus();
	}
});