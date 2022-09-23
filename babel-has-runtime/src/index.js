async function getName() {
  console.log('---hello---')
  const a = new Set([2, 4, 5, 6, 7])
  console.log('await....', a)
}

const numArr = [1, 2, 3, 4, 5]
if (numArr.includes(4)) {
  let name = 'name' + 4
}

Promise.resolve(5).finally()

numArr.map(i => i * 2)

module.exports = { getName }
