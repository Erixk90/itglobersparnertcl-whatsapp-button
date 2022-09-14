import React from 'react';
import PropTypes from 'prop-types'

type Props = {
    logos: string  // whatsapp.png
    phone: string  // 3012670718
    message: string  // Estás comunicandote con Carulla por favor deja tus datos para comunicarnos contigo
    width: number //80px
    height: number  //80px
}

const WhatsappButton = ({ logos, phone, message, width, height }: Props) => {
        const formattedMessage = message.replace(/ /g, "%20")
        return(
        <>
        <div className='fixed bottom-2 right-2 flex flexColumn'>
            <a 
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                    <img
                        src={logos}
                        width={width}
                        height={height}
                        alt="aqui deberia ir el logo" 
                    />
            </a>

        </div>
        </>
    )}

    WhatsappButton.propTypes = {
        logos: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        message: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
    }

    WhatsappButton.defaultProps = {
        logos: "logowpp.png",
        phone: "573012670719",
        message: "Estás comunicandote con Carulla por favor deja tus datos para comunicarnos contigo",
        width: 80,
        height: 80

    }
    WhatsappButton.schema = {
        title: "Botón de Whatsapp",
        type: "object",
        properties: {
            logos:{
                title: "Logo de Whatsapp relacionado a la marca",
                type:"string",
                widget:{
                    "ui:widget":"image-uploader"
                }
            },
            phone:{
                title: "Teléfono",
                description: "Agrega por favor tu número de teléfono",
                type:"string"
            },
            message: {
                title: "Mensaje",
                description: "Agrega por favor el mensaje que se verá para tu cliente",
                type:"string",
                widget:{
                    "ui:widget":"textarea"
                }
            },
            width: {
                title: "Teléfono",
                description: "Agrega por favor el número de teléfono",
                type: "number"
    },
            height: {
                title: "Teléfono",
                description: "Agrega por favor el número de teléfono",
                type: "number"
    }
        }

    }


export default WhatsappButton
