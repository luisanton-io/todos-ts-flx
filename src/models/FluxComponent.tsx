import makeComponent from 'react-flux-component'
import { ToDo } from './ToDo'
import { Filter } from './Filter'

interface IShared {
    filter: Filter,
    nextToDoId: number
}

interface ITrackedShared {
    toDoList: ToDo[],
}

const initialSharedState: IShared = {
    filter: Filter.all,
    nextToDoId: 0
}

const trackedSharedState: ITrackedShared = {
    toDoList: []
}

export default makeComponent(initialSharedState, trackedSharedState)