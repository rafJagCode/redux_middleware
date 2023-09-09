import types from './types'

const updateTime = () => ({
    type: types.UPDATE_TIME, 
    payload: new Date().toString(),
    isApiRequest: false,
    url: 'https://andthetimeis.com/gmt/now.json'
})

export default updateTime

//'https://andthetimeis.com/gmt/now.json'