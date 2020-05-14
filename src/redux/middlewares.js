import types from './types'

const confirmationMiddleware = store => next => action =>{
    if(action.type===types.UPDATE_TIME){
        if(window.confirm('Do you want to update time?')) next(action)
    }
    else next(action)
}

const apiMiddleware = store => next => action => {
    if(action.type===types.UPDATE_TIME){
        if(action.isApiRequest){
            fetch(action.url)
            .then(resp=>resp.json())
            .then(json=>{
                let changedAction = {...action, payload: 'Api request: ' + json.dateString}
                return changedAction
            })
            .then(changedAction=>next(changedAction))
        }else{
            let changedAction = {...action, payload: 'Its not api request: '+ action.payload}
            next(changedAction)
        }
    }else{
        next(action)
    }
}

export {
    confirmationMiddleware,
    apiMiddleware
}