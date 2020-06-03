const Mock = window.Mock
const Random = Mock.Random

const year = new Date().getFullYear()
let data = []
for (let i = 1; i <= 12; i++) {
  let date = i < 10 ? ('0' + i) : i
  data.push({
    date: year + '-' + date,
    count: Random.integer(0, 1000000)
  })
}


let dataVo = {
  title: '兰博基尼2020汽车销量',
  data
}
