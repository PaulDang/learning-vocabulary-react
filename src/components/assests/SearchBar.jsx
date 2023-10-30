import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons"

const Access_Key = "AlIPZZshkCWZnlc9M93UPuLgX5UQZXu5mu3rh0s9WcM";
// const Secret_Key = "FyMMNm2c_Iy8MhCVBDEOx6r3YndwUrKKlK5l-XuDKLI";
const URL = "https://api.unsplash.com/search/photos?page=1&query="
const Page_Size = 8;

const SearchBar = () => {

    const [img, setImg] = useState("");
    const [res, setRes] = useState ([]);

    const fetchRequest = async () =>{
        const data = await fetch(`${URL}${img}&client_id=${Access_Key}&per_page=${Page_Size}`);
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
    }

    useEffect(() => {
        fetchRequest()
    },[]);

    const handleSubmit = () =>{
        fetchRequest();
        setImg("");
    }

  return (
    <>
        <div className="mt-3 input-group d-flex justify-content-center">
            <div className="form-outline">
                <input value={img} onChange={(e) => setImg(e.target.value)} placeholder="Search..." type="search" name="search" id="search" className="form-control" />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                <Search />
            </button>
        </div>
        <div className="col-12 d-flex justify-content-evenly flex-wrap">
            {res.map(val => {
                return(
                    <>
                        <img key={val.id} src={val.urls.small} alt={val.alt_description} className="col-3 img-fluid img-thumbnail" />
                    </>
                )
            }) }
        </div>
    </>
  )
}

export default SearchBar