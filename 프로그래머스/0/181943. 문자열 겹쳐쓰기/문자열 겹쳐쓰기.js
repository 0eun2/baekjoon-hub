function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    answer = my_string.substr(0, s) + overwrite_string + my_string.substr(s + overwrite_string.length);
    
    return answer;
}