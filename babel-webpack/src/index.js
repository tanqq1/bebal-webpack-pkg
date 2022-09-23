// import _ from 'lodash'
import { cube } from './math.js'
function component() {
  // const element = document.createElement('div')
  const elementPre = document.createElement('pre')

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to' + cube(5)].join('\n\n')

  return elementPre
}

document.body.appendChild(component())
