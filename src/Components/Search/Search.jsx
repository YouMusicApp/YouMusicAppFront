import { AiOutlineSearch } from "react-icons/ai"

const Search = ({ handleFilter, filter }) => {

    console.log(filter);

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" value={filter} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={handleFilter} />
            <span className="input-group-text cursor-pointer" id="basic-addon1"><AiOutlineSearch /></span>
        </div>
    )
}

export default Search