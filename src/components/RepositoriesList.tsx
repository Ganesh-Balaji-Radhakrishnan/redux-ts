import { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions()

    const {data,error,loading} = useTypedSelector((state) => state.repositories)
    console.log(data)

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        searchRepositories(term)
       
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e=>setTerm(e.target.value)}/>
            <button>search</button>
            {error && <div>{error}</div>}
            {loading && <div>loading</div>}
            {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
        </form>
    </div>
}

export default RepositoriesList