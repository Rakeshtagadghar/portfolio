import React, { Component } from 'react';


class SuperComponent extends Component {



    constructor() {
        super()
        this.somevariable = 'some variable'
    }

    alertName(title) {
        alert(title)
    }
}

export default SuperComponent;