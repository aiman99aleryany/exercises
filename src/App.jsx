import React from 'react';
import Container from './Container';
class App extends React.Component {
    render() {
        return (
            <div>
                <Container title="This is a Title">
                    <p>Hello World</p>
                </Container>
            </div>
        );
    }
}

export default App;
