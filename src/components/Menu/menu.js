import React from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { HomeRounded, ExploreRounded, NotificationsRounded, MessageRounded, PersonRounded } from '@material-ui/icons';
import './menu.css'

const useStylesButton = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: '#909090',
            color: 'rgb(245, 245, 245)'
        },
        color: '#909090',
        fontSize: '20px',
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 40,
        padding: '7px 15px',
        textTransform: 'capitalize',
        margin: '5px',
    }
});

const buttonIconStyle = {
    fontSize: 30, 
    marginRight: '15px',
}
const buttons = {
    'Página inicial': <HomeRounded style={ buttonIconStyle } />,
    'Explorar': <ExploreRounded style={ buttonIconStyle } />,
    'Notificações': <NotificationsRounded style={ buttonIconStyle } />,
    'Mensagens': <MessageRounded style={ buttonIconStyle } />,
    'Perfil': <PersonRounded style={ buttonIconStyle } />,
}
export default function Menu() {
    const buttonClasses = useStylesButton();
    
    return (
        <Box 
            display="flex"
            flexDirection="column"
        >
            {
                Object.entries(buttons).map(([buttonName, icon]) => (
                    <Box>
                        <Button
                            classes={{ root: buttonClasses.root }}
                            startIcon={ icon }
                        >
                            <strong>{buttonName}</strong>
                        </Button>
                    </Box>
                ))
            }
        </Box>
    )
}