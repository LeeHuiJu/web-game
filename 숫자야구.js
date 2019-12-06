var 바디 = document.body;

var 숫자후보;
var 숫자배열;
var 틀린횟수=0;

바디.textContent="숫자4개를 입력하세요(기회는 10번)";

function 숫자뽑기(){
    숫자후보=[1,2,3,4,5,6,7,8,9];
    숫자배열=[];
    for(var i=0;i<4;i++){
        var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)),1)[0];
        숫자배열.push(뽑은것);
    }    
}

숫자뽑기();
console.log(숫자배열);

var 결과 = document.createElement ('h1');
바디.append(결과);
var 폼=document.createElement('form');
document.body.append(폼);
var 입력창=document.createElement('input');
폼.append(입력창);
입력창.maxLength=4;
var 버튼=document.createElement('button');
버튼.textContent='입력';
폼.append(버튼);

폼.addEventListener('submit', function 비동기(이벤트){
    이벤트.preventDefault();
    var 답=입력창.value;
    if(답===숫자배열.join('')){
        결과.textContent='홈런~!';
        입력창.value='';
        입력창.focus();
        숫자뽑기();
        틀린횟수=0;
    }
    else{
        var 답배열=답.split('');
        console.log(답배열);
        var 스트라이크 =0;
        var 볼=0;
        틀린횟수++;
        if(틀린횟수>10){
            결과.textContent='실패~! 10번의 기회를 모두 사용하셨습니다\n';
            결과.textContent='정답은 '+숫자배열.join('')+'였습니다!';
            입력창.value='';
            입력창.focus();
            숫자뽑기();
            틀린횟수=0;
        }
        else{
            for(var i=0;i<4;i++){
                if(Number(답배열[i])===숫자배열[i]){
                    스트라이크++;
                }
                else if(숫자배열.indexOf(Number(답배열[i]))>-1){
                    볼++;
                }
            }
            결과.textContent=스트라이크+'스트라이크 '+볼+'볼';
            입력창.value='';
            입력창.focus();
        }
    }
});