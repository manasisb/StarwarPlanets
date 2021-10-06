import React from 'react'
import {Button, Segment} from 'semantic-ui-react';

function ShowResults({logdata, val}) {

    return (
        <Segment basic textAlign='center'>
            <Button basic onClick={logdata} color={'brown'} size={'large'}>
                {val ? 'Click to hide results' : 'Click to see results'}
            </Button>
        </Segment>
    )
}

export default ShowResults;
