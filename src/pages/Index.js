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
            data: [],
        }
        this.getCityName = this.getCityName.bind(this);
    }

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
                    });
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
        item.name = res.city.name;
        item.temperature = temperatureSum / list.length;
        item.lat = res.city.coord.lat;
        item.lon = res.city.coord.lon;
        item.timezone = res.city.coord.timezone;

        console.log(item);
        return item;
    }

    removeDiacritics(string) {
        return string.replace(/ą/g, 'a').replace(/Ą/g, 'A')
            .replace(/ć/g, 'c').replace(/Ć/g, 'C')
            .replace(/ę/g, 'e').replace(/Ę/g, 'E')
            .replace(/ł/g, 'l').replace(/Ł/g, 'L')
            .replace(/ń/g, 'n').replace(/Ń/g, 'N')
            .replace(/ó/g, 'o').replace(/Ó/g, 'O')
            .replace(/ś/g, 's').replace(/Ś/g, 'S')
            .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
            .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
    }

    render() {
        const { data } = this.state;
        return (
            <Layout>
                <Header>
                    <InputField onSubmit={this.getCityName} />
                </Header>
                <Cities items={data} />
            </Layout>
        )
    }
}

export default Index;
