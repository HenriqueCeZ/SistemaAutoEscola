import React from "react";
import {breakAt,BreakpintSize} from "./BreakPoints"
import styled ,{css} from 'styled-components';
import PropTypes from 'prop-types';
const Root =  styled.div `
    color: #fff;
    padding: 100px 0;
    ${props =>css`
        background: url(${props.image}),rgba(0 , 0 , 0 , 0.6);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
    `}
    
`;
const ColorYellow = '#ffc107;';

const Content = styled.div`

    p, li{
    font-size:20px;
    font-weight: 300;
}

    ul{
        list-style: none;
        padding-left: 0;

}

    li::before{

         content: "\\2713\\0020";
         color: ${ColorYellow};
        
}   

`;
const Container = styled.div`
        width: 100%auto;
        padding: 0 8px;

        ${breakAt(BreakpintSize.sm)}{
         padding: 0 16px;

        }

        @media(min-width: 1200px){
        width: 1140px;
        padding:0;
        margin: 0 auto;
        }

`;

const Hero = ({ image, children}) =>{
    return (
        <Root image={image} data-testid="hero">

                    <Container>
                        <Content>{children}</Content> 
                     </Container>

        </Root>

    );




}
Hero.propTypes ={ 
        image: PropTypes.string,
        
        children: PropTypes.node,

};


export default Hero;