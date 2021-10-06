import React from 'react'
import {Segment, Image} from 'semantic-ui-react';
import starwarlogo from '../images/starwar_logo.png';

function Navbar() {
    return (
        <Segment inverted color={'yellow'} textAlign="center">
            <Image src={starwarlogo} size={"medium"} centered/>
        </Segment>
    )
}

export default Navbar;
