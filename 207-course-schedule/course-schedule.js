/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
  let AdjList = {}
  
  for (let i = 0; i < numCourses; i++) {
    AdjList[i] = [];
  }

  for(let [course, preReq] of prerequisites){
    AdjList[course].push(preReq)
  }
  let visiting = new Set()
  function dfs(course) {
    if (visiting.has(course)) return false
    if (AdjList[course].length === 0) return true

    visiting.add(course)

    for (let preReq of AdjList[course]) {
      if (!dfs(preReq)) return false
    }

    visiting.delete(course)
    AdjList[course] = []
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }
  return true

};