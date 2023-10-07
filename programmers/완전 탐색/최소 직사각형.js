//첫번째 시도
//제일 큰 수를 구하고 같은 배열의 수와 비교를 통해 다른 큰 수를 구하는 줄 알았는데 잘못생각했다.
function solution(sizes) {
    let max=0;
    let point=0;
    let max2=0;
    let result=0;
    for(let i=0; i<sizes.length; i++){
        if(max<sizes[i][0]){
            max=sizes[i][0];
            point=0;
        }
        if(max<sizes[i][i]){
            max=sizes[i][i];
            point=1;
        }
    }
    if(point===0){
        max2=sizes.map((element)=>{
            return element[1];
        });
        result=Math.max(...max2);
    }else if(point===1){
        max2=sizes.map((element)=>{
            return element[0];
        });
        result=Math.max(...max2);
    }
    return max*result;
}

//두번째 시도
function solution(sizes) {
    let answer = 0;
    //배열 sizes 내림차순 정렬
    for (let arr of sizes) {
        arr.sort((a, b) => b - a);;
    }

    let front = [], back = [];
    //배열의 앞부분과 뒷부분을 나눠준다.
    sizes.forEach(i => {
        front.push(i[0]);
        back.push(i[1]);
    });
    //다시 내림차순 정렬
    front.sort((a,b) => b - a);
    back.sort((a,b) => b - a);

    answer = front[0] * back[0];

    return answer;
}