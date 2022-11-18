interface repositoriesState {
    loading: boolean,
    data: string[],
    error: string | null
}

const reducer = (state:repositoriesState ,action:any) => {
    switch(action.type){
        case 'search_repositories':
            return {loading: true, error: null, data: []}
        case 'search_repositories_success':
            return {loading: false, error: null, data: action.payload}
        case 'search_repositories_error':
            return {loading: false, error: action.payload, data: []}
        default:
            return
    }

}

export default reducer