import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
//import { loadGetInitialProps } from 'next/dist/lib/utils';

import ReactGA from 'react-ga';

export default () => Composed =>
    class extends Component {
        static getInitialProps(ctx) {
            return loadGetInitialProps(Composed, ctx);
        }

        componentDidMount() {
            console.log("page view");
            ReactGA.initialize("ID_ANALYTICS");
            ReactGA.pageview(window.location.pathname);
        }

        render() {
            return <Composed { ...this.props} />
        }
    }