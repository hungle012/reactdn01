import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {

    constructor(props) {
        super(props);
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps Child');
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     console.log('Props',this.props);

    //     console.log('newProps',newProps);

    //     if (this.props.number !== newProps) {
    //         return true;
    //     }
        
    //     return false;
    // }

    render() {
        console.log('render child')
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{this.props.objectNumber.number}</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>


        )
    }
    timeout = null;
    componentDidMount() {
         // g???i API ho???c th?? vi???n trong didmount
        console.log('componentDidMount child');
        // H??m ?????m th???i gian 1s ch???y 1 l???n
        this.timeout = setInterval(() => {
            console.log('1')
        },1000)
    }

    componentDidUpdate(prevProps,prevState) {
        // H???n ch??? setState trong LifeCyrcle n??y n???u c?? setState th?? ph???i c?? ??i???u ki???n if
        console.log('componentDidUpdate child')
    }

    componentWillUnmount() {
        // clear c??c h??m ch???y ng???m tr?????c khi component bi???n m???t kh???i UI
        clearInterval(this.timeout);
    }
}
