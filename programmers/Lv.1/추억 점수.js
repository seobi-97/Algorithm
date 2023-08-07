//우선 name,yearning을 이용하여 객체를 만든다.
//그 다음 photo객체 내 값을 객체의 키 값들과 비교 후, 있으면 그에 맞는 숫자를, 없으면 0으로 변경
//마지막으로 각 숫자들을 합한다.
function solution(name, yearning, photo) {
  const object1=name.reduce((acc,curr,idx)=>{
      acc[curr]=yearning[idx];
      return acc;
  },new Object);

  const result = photo.map((subArray) => {
    return subArray.map((value) => {
      if (Object.keys(object1).includes(value)) {
        return object1[value];
      } else {
        return 0;
      }
    });
  });

  const result2=result.map((subArray)=>{
      return subArray.reduce((acc,curr)=>{
          return acc+curr;
      },0)
  })
  return result2;
}