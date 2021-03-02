import React from 'react';
import RestoServiceContext from '../resto-service-context';

const withRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
            
        )
    };
};

export default withRestoService;