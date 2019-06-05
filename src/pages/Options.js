import React from 'react';
import Layout from '../Layout';
import Header from '../components/Header';
import OptionsContainer from '../views/OptionsContainer';

const Options = () => (
    <Layout optionsButtonDisabled>
        <Header>
            <h2> Ustawienia </h2>
        </Header>
        <OptionsContainer />
    </Layout>
);

export default Options;
