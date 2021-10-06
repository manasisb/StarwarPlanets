import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

function Loading() {
    return (
        <div>
            <Dimmer active inverted>
                <Loader>Loading</Loader>
            </Dimmer>
            
        </div>
    )
}

export default Loading;
