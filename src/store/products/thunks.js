import {
  loadRequest,
  loadFulfilled,
  loadRejected
} from './actions'
import { listGithub } from './queries'

export const testApi = () => async (dispatch, getState) => {
  dispatch(loadRequest())
  const response = await listGithub()
  
  if(!response.data) {
    const error = 'No have products'
    dispatch(loadRejected(error))

    throw 'Error' 
  }
  
  dispatch(loadFulfilled(response.data))
  return true
}