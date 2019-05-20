import React from 'react';
import Layout from '../Layout';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Cities from '../components/Cities.js';

const Index = () => (
    <Layout>
        <Header> 
            <InputField />
        </Header>
        <Cities items={[{ name: 'Praga', temp: '24' }, { name: 'Warszawa', temp: '12' }, {name: 'Poznań', temp: '18'}]}/>
    </Layout>
)

export default Index;
