//첫번째 시도 통과
//최소한의 for문을 통한 결과 도출
//substring으로 글자를 잘라 p값과 비교
function solution(t, p) {
  let count=0;
  for(i=0; i<t.length-p.length+1; i++){
      if(t.substring(i,i+p.length)<=p)count++;
  }
  return count;
}