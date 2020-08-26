import React from 'react'
import Component from '../models/FluxComponent'
import Link from './Link'
import { Filter } from '../models/Filter'

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

class Footer extends Component {
  filter = this.hardBind(Component.shared.filter)
  
  render() {
    return (
      <div>
        <span>Show: </span>
        {
          enumKeys(Filter).map( key => {
            let filter = Filter[key] as Filter
            return (
              <Link 
                key={filter}
                active= { this.filter.value === filter }
                onClick={ () => this.filter.value = filter }>
                { filter }
              </Link>
            )
          })
        }
        <button onClick={ Component.actions.undo }>UNDO</button>
        <button onClick={ Component.actions.redo }>REDO</button>
      </div>
    )
  }

}

export default Footer
