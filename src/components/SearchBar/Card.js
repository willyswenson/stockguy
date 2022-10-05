import React from 'react'
import { CardContainer, CardText, CardInfo, Column1, Column2, CardFin } from './CardElements'

const Card = (name, val, cardinfo, cardinfo1, formula, name2, val2, cardinfo2, cardinfo3, formula2) => {
  return (
    <CardContainer>
        <CardFin>
        <Column1>
            <CardText>
                {name}
                <p></p>
                {val}
                <CardInfo>
                    <ul>
                        <p></p>
                        <li>{cardinfo}</li>
                        <p></p>
                        <li>{cardinfo1}</li>
                        <p></p>
                        <li>{formula}</li>
                        <p></p>

                    </ul>
                </CardInfo>
            </CardText>
        </Column1>
        <Column2>
            <CardText>
                {name2}
                <p></p>
                {val2}
                <CardInfo>
                <ul>
                        <p></p>
                        <li>{cardinfo2}</li>
                        <p></p>
                        <li>{cardinfo3}</li>
                        <p></p>
                        <li>{formula2}</li>
                        <p></p>

                    </ul>
                </CardInfo>
            </CardText>
        
        </Column2>
                    
        </CardFin>

    </CardContainer>
  )
}

export default Card