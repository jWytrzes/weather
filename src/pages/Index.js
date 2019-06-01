import React from 'react';
import axios from 'axios';
import Layout from '../Layout';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Notification from '../components/Notification';
import Cities from '../views/Cities.js';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            data: [],
            showNotification: false,
            notificationMessage: '',
        }
        this.getCityName = this.getCityName.bind(this);
        this.deleteFromLocalStorage = this.deleteFromLocalStorage.bind(this);
        this.updateAfterRefresh = this.updateAfterRefresh.bind(this);
    }

    componentDidMount() {
        let LsData = JSON.parse(localStorage.getItem("cities")) || [];
        for(let i = 0; i < LsData.length; i++) {
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${LsData[i].name}&appid=972589b46854cfc7c5e7b037031d4242`)
                .then((response) => {
                    this.updateAfterRefresh(i, response.data.list);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        this.setState({
            data: JSON.parse(localStorage.getItem("cities")) || []
        })
    }

    updateAfterRefresh(id, tempList) {
        let array = this.state.data;
        array[id].temperature = this.averageTemp(tempList);
        this.setState({
            data: array
        }, () => this.saveToLocalStorage());
    }
 
    fetchData() {
        const { city, data } = this.state;
        if (city && !data.some(e => e.name === city)) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=972589b46854cfc7c5e7b037031d4242`)
                .then((response) => {
                    if(response.status === 200) {
                        this.setState({
                            data: [...data, this.processData(response.data)]
                        }, () => this.saveToLocalStorage());
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        showNotification: true,
                        notificationMessage: 'Wystąpił błąd. Upewnij się, że podana nazwa jest poprawna.'
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                showNotification: false,
                                notificationMessage: ''
                            })
                        }, 1500)
                    })
                });
        }

        else if(city) {
            this.setState({
                showNotification: true,
                notificationMessage: 'To miasto zostało dodane już wcześniej.'
            }, () => {
                setTimeout(() => {
                    this.setState({
                        showNotification: false,
                        notificationMessage: ''
                    })
                }, 1500)
            })
        }
    }

    processData(res) {
        let item = {};
        const list = res.list;

        item.id = res.city.id;
        item.name = res.city.name;
        item.temperature = this.averageTemp(list);
        item.lat = res.city.coord.lat;
        item.lon = res.city.coord.lon;
        item.timezone = res.city.timezone;

        return item;
    }

    averageTemp(list) {
        let temperatureSum = 0;
        for (let i = 0; i < list.length; i++) {
            temperatureSum += list[i].main.temp;
        }
        return temperatureSum / list.length;
    }

    deleteFromLocalStorage(id) {
        let newState = this.state.data;
        newState.splice(id, 1);
        this.setState({
            data: newState,
        }, () => this.saveToLocalStorage() );
    }

    saveToLocalStorage() {
        localStorage.setItem("cities", JSON.stringify(this.state.data));
    }

    getCityName(name) {
        this.setState({
            city: name
        }, () => this.fetchData());
    }

    render() {
        const { data, showNotification, notificationMessage } = this.state;
        return (
            <Layout>
                <Header>
                    <InputField onSubmit={this.getCityName} />
                </Header>
                { showNotification && <Notification> {notificationMessage} </Notification> }
                <Cities items={data} deleteCity={id => this.deleteFromLocalStorage(id)}/>
            </Layout>
        )
    }
}

export default Index;
