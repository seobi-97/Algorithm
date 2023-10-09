function solution(numbers) {
  let temp=[];
  let result=[];
  let answer=[];
  let count=0;
  //numbers를 하나하나 나눠준다.
  for(let i=0; i<numbers.length; i++){
      temp.push(numbers[i]);
  }
  //가능한 숫자 조합을 result에 저장
  for(let i=1; i<=numbers.length; i++){
      result.push(getPermutations(temp,i));
  }
  //문자열을 숫자로 변환 후 중복값 제거
  for(let i=0; i<result.length; i++){
      for(let j=0; j<result[i].length; j++){
          if(answer.includes(parseInt(result[i][j].join("")))===false){
              answer.push(parseInt(result[i][j].join("")));
          }
      }
  }
  //소수값 판별
  for(let i=0; i<answer.length; i++){
      if(isPrime(answer[i])===true)count++;
  }
  return count;
}

//순열
const getPermutations = (arr, num) => {
  const results = [];

  // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
      // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      
      // 나머지 배열을 기준으로 다시 순열을 구한다.
      // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
      const permutations = getPermutations(rest, num - 1);

      // 기준값(fixed)에 순열(permutations)을 붙인다.
      const attached = permutations.map(v => [fixed, ...v]);

      // 붙인 값을 결과 값에 넣어준다.
      results.push(...attached);
  });

  return results;
}
function isPrime(num) {
  if(num===0||num===1)return false;
  if(num === 2)return true;

  for(let i = 2; i<num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}