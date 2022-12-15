import React,{useState,useEffect} from 'react'

export const Search = (props) => {
    const [searchText, setSearchText] = useState('');
    const handelSearch = (e) =>{
        setSearchText(e.target.value)
    }
    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText]);
    return (
        <div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search Country" aria-label="Search" value={searchText} onChange={handelSearch}/>
                <button class="btn btn-outline-success"  type="submit">Search</button>
            </form>
        </div>
    )
}
