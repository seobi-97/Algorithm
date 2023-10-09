function solution(answers) {
  const number1=[1,2,3,4,5]; //1번 수포자
  const number2=[2,1,2,3,2,4,2,5]; //2번 수포자
  const number3=[3,3,1,1,2,2,4,4,5,5]; //3번 수포자
  let result=[0,0,0]; //맞힌 문제 수가 담긴 배열
  let max=0; //최대값
  let result2=[]; //최종 결과
  for(let i=0; i<answers.length; i++){
      if(answers[i]===number1[i%number1.length]){
          result[0]=result[0]+1;
      }
      if(answers[i]===number2[i%number2.length]){
          result[1]=result[1]+1;
      }
      if(answers[i]===number3[i%number3.length]){
          result[2]=result[2]+1;
      }
  }
  max=Math.max(...result);
  for(let i=0; i<result.length; i++){
    if(max===result[i]){
        result2.push(i+1);
    }
  }
  return result2;
}