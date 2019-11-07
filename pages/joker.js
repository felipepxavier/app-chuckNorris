import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from 'root/hocs/withAnalytics';

const Title = styled.h1`
    color: #f15a24;
    font-size: 40px;
`;

const Content = styled.div`
    border: 2px solid #666;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    max-width: 700px;
    padding: 25px;

    p {
        font-size: 18px;
        font-family: monospace;
        color: #57595c;
    }

    a {
        text-decoration: none;
        background-color: #f15a24;
        color: white;
        padding: 5px 15px;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        background-color: #626466;
        padding: 5px 15px;
        color:white;
      }   
    
`;

class Joker extends Component {

    static async getInitialProps(){
        const [value, data] = await Promise.all([  
            axios.get(`https://api.chucknorris.io/jokes/random`),
            axios.get(`https://api.chucknorris.io/jokes/categories`),
        ]);
    
       return { joker: value, categories: data };
    }
  
    constructor(props) {
        super(props);
        this.random = this.random.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: '', respRandon: ''};
      }

      async handleChange(event) {
        await this.setState({value: event.target.value});
        this.random(this.state.value);
      }

    async random(categoria) {
            const response = await axios.get(
                `https://api.chucknorris.io/jokes/random?category=${categoria}`
            );
            return this.setState({ respRandon : response.data.value});   
    } 

    render(){
        const { joker, categories } = this.props;
        const respRandon = this.state.respRandon;
        let paragrafo;

        if(respRandon){
            paragrafo = <p>{this.state.respRandon}</p>
        }else{
            paragrafo = <p>{joker.data.value}</p>
        }

        return(
            <Content>
                <Head>
                    <title>O Mito</title>
                </Head>
                
                <img src="/static/chuck.png" width="150"/>
                <form>
                    <select value={this.state.value} onChange={this.handleChange}>     
                        {categories.data.map( category => 
                            (
                                <option value={category} key={category}>
                                    {category}  
                                </option>
                            )
                        )}   
                    </select>
                </form>
                
                <Title>Fatos sobre Chuck Norris</Title>
                
                <h2>{this.state.value}</h2>
                {paragrafo}
                <Link href="/">
                    <a>Voltar</a>
                </Link>
            </Content>
        )};
    }


export default withAnalytics()(Joker);