import React, { Component, Fragment } from 'react';
import { Image } from 'react-native';

export default class LogoTitulo extends React.Component {
    render() {
        return (
        <Image
            source={require('../imagenes/fondo.png')}
            style={{ width: 30, height: 30 }}
        />
        );
    }
}