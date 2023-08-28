//첫번째 시도
//1,0으로 새로운 배열을 만든다.
//1은 칠해져 있는 구역, 0은 아닌 구역
//정확도 98/100
function solution(n, m, section) {
  const array=[];
  let answer=0;
  for(i=0; i<n; i++){
      if(section.includes(i+1))array[i]=0;
      else array[i]=1;
  }
  while(array.includes(0)){
      let maxLength=array.indexOf(0)+m;
      if(maxLength>=n)maxLength=n;
      for(i=array.indexOf(0); i<maxLength; i++){
          array[i]=1;
      }
      answer++;
  }
  return answer;
}
//두번째 시도
//풀이방법 참고함
//사실 n은 관계 없고, section을 순회하면서 첫번째 값을 기준으로 계속 칠해온다.
function solution(n, m, section) {
  let answer = 0;
  let max = 0;
  section.forEach((s) => {
    if (s > max) {
      answer++;
      max = s + m - 1;
    }
  });
  return answer;
}