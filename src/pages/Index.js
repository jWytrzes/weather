import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Cities from '../views/Cities.js';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            data: JSON.parse(localStorage.getItem("cities")) || [],
        }
        this.getCityName = this.getCityName.bind(this);
        this.deleteFromLocalStorage = this.deleteFromLocalStorage.bind(this);
    }

   /*  componentDidMount() {
        console.log()
        this.setState({
            data: []
        })
    }
 */
    getCityName(name) {
        this.setState({
            city: name
        },() => this.fetchData());
    }

    fetchData() {
        const { city, data } = this.state;
        if (city && !data.some(e => e.name === city)) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=972589b46854cfc7c5e7b037031d4242`)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        data: [...data, this.processData(response.data)]
                    }, () => this.saveToLocalStorage());
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    processData(res) {
        let item = {};
        let temperatureSum = 0;
        const list = res.list;

        for (let i = 0; i < list.length; i++) {
            temperatureSum += list[i].main.temp;
        }
        item.id = res.city.id;
        item.name = res.city.name;
        item.temperature = temperatureSum / list.length;
        item.lat = res.city.coord.lat;
        item.lon = res.city.coord.lon;
        item.timezone = res.city.timezone;

        return item;
    }

    saveToLocalStorage() {
        localStorage.setItem("cities", JSON.stringify(this.state.data));
    }

    deleteFromLocalStorage(id) {
        let newState = this.state.data;
        newState.splice(id, 1);
        console.log('------', newState);
        this.setState({
            data: newState,
        }, () => this.saveToLocalStorage() );
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <Layout>
                <Header>
                    <InputField onSubmit={this.getCityName} />
                </Header>
                <Cities items={data} deleteCity={id => this.deleteFromLocalStorage(id)}/>
            </Layout>
        )
    }
}

export default Index;
