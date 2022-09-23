const arr = [2, 4, 5, 6, 7, 2, 8, 6]
const list = new Set()

list.add(...arr)

console.log('no duplicated array list is >>>', list)

const add = (a, b) => a + b

console.log('add(2, 4)', add(2, 4))

module.exports = {
  TPackConfig: {
    NAME: 'Test',
    version: '2.34',
  },
}
