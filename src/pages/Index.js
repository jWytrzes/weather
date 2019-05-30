import React, {useState, useEffect} from 'react';
import Layout from '../Layout';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Cities from '../views/Cities.js';

const Index = () => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");

    const getCityName = (name) => {
        setCity(name);
    }

    useEffect(() => {
        //fetch
        if(city) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=972589b46854cfc7c5e7b037031d4242`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (res) {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });

    return(
        <Layout>
            <Header> 
                <InputField onSubmit={getCityName}/>
            </Header>
            <Cities items={data}/>
        </Layout>
    )
}

export default Index;
