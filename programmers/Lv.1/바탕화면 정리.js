//wallpaper의 최대 크기 50, wallpaper[i]의 최대 크기 50
//Math.min으로 시작점이 되는 위, Math.max로 끝점위치를 찾기
//한 wallpaper[i]에 #이 여러 개가 있을 수 있으니 끝점은 lastIndexOf로 찾는다.
function solution(wallpaper) {
  const start=[50,50];
  const end=[0,0];
  for(i=0; i<wallpaper.length; i++){
      if(wallpaper[i].indexOf("#")!==-1){
          start[0]=Math.min(start[0],i);
          start[1]=Math.min(start[1],wallpaper[i].indexOf("#"));
          end[0]=Math.max(end[0],i+1);
          end[1]=Math.max(end[1],wallpaper[i].lastIndexOf("#")+1);
      }
  }
  return [...start,...end];
}