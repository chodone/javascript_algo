function solution(id_list, report, k) {
  var answer = [];
  let reportList = {}
  
  id_list.forEach(id => {
      reportList[id] = []
      answer.push(0)
  })
  
  for (let r of report) {
      let [a, b] = r.split(' ')
      if(!reportList[b].includes(a)){
          reportList[b].push(a)
      }
  }
  
  for (let key in reportList) {
      if(reportList[key].length >= k){
          for (let k of reportList[key]){
              answer[id_list.indexOf(k)] += 1
          }
      }
  }

  
  return answer;
}