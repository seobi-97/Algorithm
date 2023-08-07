//players는 최소 5명(중복 x), callings 최소 2
//이름이 불리면 앞자리 사람과 자리 체인지

//1번째 시도(시간초과 4개)
function solution(players, callings) {
  const result=players;
  for(i=0; i<callings.length; i++){
      let indexNumber=result.indexOf(callings[i]);
      let temp=result[indexNumber-1];
      result[indexNumber]=temp;
      result[indexNumber-1]=callings[i];
  }
  return result;
}
//2번째 시도(시간초과 5개)
function solution(players, callings) {
  const result=players;
  for(i=0; i<callings.length; i++){
      let indexNumber=result.indexOf(callings[i]);
      result.splice(indexNumber-1,0,callings[i]);
      result.splice(indexNumber+1,1);
  }
  return result;
}

//3번째 시도
//for문안에 indexOf를 사용했을때, 시간복잡도가 O(n^2)로 시간초과가 떴다.
//그래서 해시테이블(O(1))을 사용했다.
function solution(players, callings) {
  const hash = new Map();
  players.forEach((name,index)=>{
      hash.set(name,index)
  });
  
  callings.forEach(name=>{
      const IndexNumber=hash.get(name);
      const front=players[IndexNumber-1];
       [players[IndexNumber], players[IndexNumber -1]] = [players[IndexNumber -1], players[IndexNumber]];
      
      hash.set(name, hash.get(name) - 1);
      hash.set(front, hash.get(name) + 1);
  })
  return players;
}