import { AiOutlineSearch } from "react-icons/ai"

const Search = ({ handleFilter, filter }) => {

    console.log(filter);
    return (
        <form className="input-group mb-3">
            <input type="text" className="form-control" value={filter} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={handleFilter} />
            <button type='submit' className="input-group-text cursor-pointer" id="basic-addon1" ><AiOutlineSearch /></button>
        </form>
    )
}

export default Search