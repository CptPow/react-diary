import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ShowPost from "./ShowPost";

function App() {
  const [form, setForm] = useState({
    titolo: "",
    data: "",
    testo: "",
    
  });

  const [post, setPost] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.titolo && form.data && form.testo) {
      setPost([...post, { ...form }]);
      showData();
      setForm({
        titolo: "",
        data: "",
        testo: "",
      });
      <ShowPost titolo={titolo} />
    } else {
      alert("Riempi i campi vuoti...");
    }
  };

  const showData = ()=> {
    console.log(`Titolo: ${form.titolo}`);
    console.log(`Data: ${form.data}`);
    console.log(`Testo: ${form.testo}`);
  }
  
  return (
    <form className="bg-secondary container rounded p-3">
      <div className="form-group d-flex align-items-center justify-content-center col-6 ms-5 p-2">
        {/*TITOLO*/}
        <label className="fw-bold me-3" htmlFor="titolo">
          Titolo:
        </label>
        <input
          onChange={handleChange}
          value={form.titolo}
          id="titolo"
          type="text"
          name="titolo"
          className="form-control col-8"
        ></input>
      </div>
      {/*DATA*/}
      <div className="form-group d-flex align-items-center justify-content-center col-6 ms-5 p-2">
        <label className="fw-bold me-3" htmlFor="data">
          Data:
        </label>
        <input
          onChange={handleChange}
          value={form.data}
          id="data"
          type="date"
          name="data"
          className="form-control col-8"
        ></input>
      </div>
      {/*TEXTAREA*/}
      <div className="form-group d-flex align-items-center justify-content-center col-6 ms-5 p-2">
        <label className="fw-bold me-3" htmlFor="testo">
          Testo:
        </label>
        <textarea
          onChange={handleChange}
          id="testo"
          name="testo"
          value={form.testo}
        ></textarea>
      </div>
      {/*BUTTON*/}
      <div className="form-group d-flex align-items-center justify-content-center col-6 ms-5 p-2">
        <button
          onClick={handleSubmit}
          type="submit"
          className="rounded-5 btn btn-primary col-6"
        >
          Aggiungi pagina
        </button>
      </div>
    </form>
    
  );
}

export default App;
