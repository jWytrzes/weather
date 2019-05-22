import React from 'react';
import Layout from '../Layout';
import Header from '../components/Header';
import DetailsContainer from '../views/DetailsContainer';

const Details = () => (
    <Layout>
        <Header>
            <h2> Szczegóły | Miasto </h2>
        </Header>
        <DetailsContainer />
    </Layout>
);

export default Details;
