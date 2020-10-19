import React from 'react';
import Product from './Product/Product';

import mac from '../../images/mac.png';
import mouse from '../../images/mouse.png';
import wdehd from '../../images/wdehd.png';
import nexus from '../../images/nexus.png';
import drums from '../../images/drums.png';

const Products = props => {
    const items = [
        {
            productName: "MacBook",
            image: mac,
            details: "The MacBook™ comes with a 256GB SSD, 8GB RAM, 2.7GHz quad-core Intel Core i5 Processor, and a beautiful 13.1\" display.",
            price: 1899.99,
            imagePath: '../../images/mac.png'
        },

        {
            productName: "The Razer",
            image: mouse,
            details: "The Razer™ gaming mouse lives up to the expectations of gamers everywhere. Fast, durable, and attractive, it sets a new standard for gaming mice.",
            price: 79.99,
            imagePath: '../../images/mouse.png'
        },

        {
            productName: "WD My Passport",
            image: wdehd,
            details: "The WD My Passport portable hard drive has up to 2TB of space to store all your videos, music, and pictures. And with USB 3.0 connectivity.",
            price: 179.99,
            imagePath: '../../images/wdehd.png'
        },

        {
            productName: "Nexus 7",
            image: nexus,
            details: "Google Nexus 7 has a stunning 7\" LED display, 32GB of flash memory, an NVIDIA Tegra 3 quad core processor and 1 GB of RAM.",
            price: 249.99,
            imagePath: '../../images/nexus.png'
        },

        {
            productName: "DD-45 Drums",
            image: drums,
            details: "The DD-45 has four touch-sensitive pads plus a foot pedal, 99 world percussion sounds and a large selection of accompaniments make playing along with other instruments fun and easy.",
            price: 119.99,
            imagePath: '../../images/drums.png'
        }

    ];
    
    return (
        <div>
            {/* <Product productName="aaa" pic={mac} details="loremIpsum" price={9.99} /> */}
            {items.map(item => {
                return (
                    <Product 
                        key={item.productName}
                        productName={item.productName}
                        pic={item.image}
                        details={item.details}
                        price={item.price}
                        addToCart={props.addItemsToCart} />
                );
            })}
        </div>
    );
};

export default Products;