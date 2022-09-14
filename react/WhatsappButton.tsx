import React from 'react'
import PropTypes from 'prop-types'

type Props = {
logo: string // whatsapp.png
phone: string // 3012670718
message: string // Estás comunicandote con Carulla por favor deja tus datos para comunicarnos contigo
}
const WhatsappButton = ({logo, phone, message} : Props) =>{
    console.log(logo, phone, message)
    return {
        <>
        <p>logo</p>
        <p>phone</p>
        <p>message</p>
        </>
    }

    <h1> Aqui irá mi boton de whatsapp </h1>
}


WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,

}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3012670719",
    message: "// Estás comunicandote con Carulla por favor deja tus datos para comunicarnos contigo"
    
}

export default WhatsappButton