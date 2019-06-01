import React from 'react';
import Layout from '../Layout';
import Header from '../components/Header';
import DetailsContainer from '../views/DetailsContainer';

const Details = (props) => {
    const { cityInfo } = props.location.state;

    console.log(cityInfo);

    return (
        <Layout>
            <Header>
                <h2> Szczegóły | {cityInfo.name} </h2>
            </Header>
            <DetailsContainer cityInfo={cityInfo}/>
        </Layout>
    );
}

export default Details;
