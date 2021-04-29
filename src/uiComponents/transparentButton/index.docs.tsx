// import React from 'react'
// import TransaprentButton from '.'
// export const abstract = 'My New Transparent Button With Alert Box'
// export const labels = ['react', 'typescript', 'ui']
// export default function Overview() {
//     return <TransaprentButton buttonTitle='Click Me' onClick= {() => (alert("Hello! I am an alert box!!"))}/>
// }

import React from 'react'
import TransaprentButton  from '.'

export const examples = [
  {
    scope: {
        TransaprentButton
    },
    title: 'Transparent Button',
    description: 'My New Transparent Button With Alert Box',
    code: `<TransaprentButton 
            buttonTitle='Click Me' 
            onClick= {() => (alert("Hello! I am an alert box!!"))}/>`
  }
]