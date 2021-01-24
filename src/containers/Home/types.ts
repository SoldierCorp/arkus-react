export const UPDATE_HOME = 'UPDATE_HOME'
export const REMOVE_HOME = 'REMOVE_HOME'
export const DEMO_HOME = 'DEMO_HOME'


export interface Home {
  title: string
  body: string
}

export interface HomeState {
  messages: Home[]
}

interface UpdateHomeAction {
  type: typeof UPDATE_HOME
  payload: Home
}

interface RemoveHomeAction {
  type: typeof REMOVE_HOME
  meta: {
    timestamp: number
  }
}

interface DemoHomeAction {
  type: typeof DEMO_HOME
  payload: Home
}

export type HomeActionTypes = UpdateHomeAction | RemoveHomeAction | DemoHomeAction