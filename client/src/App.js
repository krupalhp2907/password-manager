import './App.css';
import React, { useState, useEffect} from "react";
import Axios from "axios";

// Custom imports
import DefaultLayout from './layouts/Default';
import PageTitle from './components/common/PageTitle';



function App() {
  
  const [password, ] = useState("");
  const [title, ] = useState("");
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showpasswords").then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addPassword = () => {
     Axios.post("http://localhost:3001/addpassword", {
       password: password,
       title: title, 
      });
  };
  
  const decryptPassword = (encryption) => {
     Axios.post("http://localhost:3001/decryptpassword", {
       password: encryption.password,
       iv: encryption.iv,
      }).then((response) => {
         setPasswordList(
           passwordList.map((val) => {
            return val.id === encryption.id 
             ? {
                id: val.id, 
                password: val.password, 
                title: response.data, 
                iv: val.iv, 
               } 
             : val;
         })
        );
      });
  };

  return (
      <React.Fragment>
        <DefaultLayout>
          <PageTitle />
        </DefaultLayout>
      </React.Fragment>
  );
}

export default App;
