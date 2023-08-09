//1번째 시도(테스트 통과 실패 70점)
function solution(park, routes) {
  const start=[0,0];
  const width=park[0].length;
  const height=park.length;
  let check=true;
    
  for(i=0; i<park.length; i++){
      if(park[i].includes("S")){
          start[1]=park[i].indexOf("S");
          break;
      }else start[0]=parseInt(start[0])+1;  
  }
  
  for(i=0; i<routes.length; i++){
      const firstString=routes[i].split(" ");
      if(firstString[0]==="N"){
          if(parseInt(start[0])-parseInt(firstString[1])>=0){
              check=true;
              for(j=start[0]; j>parseInt(start[0])-parseInt(firstString[1]); j--){
                  if(park[j][start[1]]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[0]-=parseInt(firstString[1]);
          }
      }else if(firstString[0]==="S"){
          if(parseInt(start[0])+parseInt(firstString[1])<height){
              check=true;
              for(j=start[0]; j<parseInt(start[0])+parseInt(firstString[1]); j++){
                  if(park[j][start[1]]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[0]+=parseInt(firstString[1]);
          }
      }else if(firstString[0]==="W"){
          if(parseInt(start[1])-parseInt(firstString[1])>=0){
              check=true;
              for(j=start[1]; j>parseInt(start[1])-parseInt(firstString[1]); j--){
                  if(park[start[0]][j]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[1]-=parseInt(firstString[1]);
          }
      }else if(firstString[0]==="E"){
          if(parseInt(start[1])+parseInt(firstString[1])<width){
              check=true;
              for(j=start[1]; j<parseInt(start[1])+parseInt(firstString[1]); j++){
                  if(park[start[0]][j]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[1]+=parseInt(firstString[1]);
          }
      }
  }
  return start;
}


//2번째 시도
//생각해보니 현재 위치는 X일수가 없으므로 확인할 필요가 없다.
function solution(park, routes) {
  const start=[0,0];
  const width=park[0].length;
  const height=park.length;
  let check=true;
    
  for(i=0; i<park.length; i++){
      if(park[i].includes("S")){
          start[1]=park[i].indexOf("S");
          break;
      }else start[0]=parseInt(start[0])+1;  
  }
  
  for(i=0; i<routes.length; i++){
      const firstString=routes[i].split(" ");
      if(firstString[0]==="N"){
          if(parseInt(start[0])-parseInt(firstString[1])>=0){
              check=true;
              for(j=start[0]-1; j>parseInt(start[0])-parseInt(firstString[1])-1; j--){
                  if(park[j][start[1]]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[0]-=parseInt(firstString[1]);
          }
      }else if(firstString[0]==="S"){
          if(parseInt(start[0])+parseInt(firstString[1])<height){
              check=true;
              for(j=start[0]+1; j<parseInt(start[0])+parseInt(firstString[1])+1; j++){
                  if(park[j][start[1]]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[0]+=parseInt(firstString[1]);
          }
      }else if(firstString[0]==="W"){
          if(parseInt(start[1])-parseInt(firstString[1])>=0){
              check=true;
              for(j=start[1]-1; j>parseInt(start[1])-parseInt(firstString[1])-1; j--){
                  if(park[start[0]][j]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[1]-=parseInt(firstString[1]);
          }
      }else if(firstString[0]==="E"){
          if(parseInt(start[1])+parseInt(firstString[1])<width){
              check=true;
              for(j=start[1]+1; j<parseInt(start[1])+parseInt(firstString[1])+1; j++){
                  if(park[start[0]][j]==="X"){
                      check=false;
                      break;
                  }
              }
              if(check)start[1]+=parseInt(firstString[1]);
          }
      }
  }
  return start;
}