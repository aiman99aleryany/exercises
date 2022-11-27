import React from 'react';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        );
    }
}

Container.defaultProps = {
    title: 'Hello World',
};

export default Container;
