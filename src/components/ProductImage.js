import React from 'react';
import classicTee from '../styles/img/classic-tee.jpg'

export function ProductImage() {

    return(
        <section className="main__section">
            <img src={classicTee} className="product__image"/>
        </section>
    )

}