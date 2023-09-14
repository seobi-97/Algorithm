// HashMap<타입,타입>변수명=new HashMap<타입,타입>();로 선언한다.
/*
 * for(타입 변수명:배열 또는 컬렉션){
 * //배열 또는 컬렉션에 저장된 값이 매 반복마다 하나씩 순서대로 읽혀져
 * //변수에 저장된다.
 * }
 */
//getOrDefault-찾는 키가 존재한다면 찾는 키의 값을 반환하고 없다면 기본 값을 반환하는 메서드
//containsValue(value)-맵에서 인자로 보낸 값이 있으면 true 없으면 false를 반환한다.
import java.util.*;
class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        Map<Character,Integer>map=new HashMap<>();
        
        for(String s:keymap){
            for(int i=0; i<s.length(); i++){
                char key=s.charAt(i);
                map.put(key,Math.min(i+1,map.getOrDefault(key,Integer.MAX_VALUE)));
            }
        }
        
        for(int i=0; i<targets.length; i++){
            for(int j=0; j<targets[i].length(); j++){
                char key=targets[i].charAt(j);
                if(map.containsKey(key)){
                    answer[i]+=map.get(key);
                }else {
                    answer[i]=-1;
                    break;
                }
            }
        }
        return answer;
    }
}