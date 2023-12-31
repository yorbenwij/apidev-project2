import React, {useState, useEffect} from "react";
import api from './api'

const App = () => {
    const[countries, setCountries] = useState([])
    const[formData, setFormData] = useState({
        name: '',
        population: ''
    });
    const fetchCountries = async () => {
        const response = await api.get('/countries/');
        setCountries(response.data)
    };
    useEffect(() =>{
        fetchCountries();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await api.post('http://127.0.0.1:8000/countries/', formData);
        fetchCountries();
        setFormData({
            name: '',
        population: ''
        });
    };
    return(
        <div>
            <nav className='navbar navbar-dark bg-primary'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'> fastapi project</a>
                </div>
            </nav>
            <div className='container'>
                <form onSubmit={handleFormSubmit}>
                    <div className='mb-3 mt-3'>
                        <label htmlFor="name" className='form-label'> country name</label>
                        <input type="text" className='form-control' id="name"
                               value={formData.name}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'> population</label>
                        <input type="text" className='form-control' id="population"
                               value={formData.population}/>
                    </div>
                    <button type="submit" className="btn btn-primary"> submit</button>
                </form>
            </div>
        </div>
    )
}


export default App;

