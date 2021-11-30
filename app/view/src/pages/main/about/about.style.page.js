import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '2000px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fbf9f4',
    },
    container: {
        width: '1200px',
        '& h3': {
            marginTop: '50px',
            color: '#3f63ae',
        }
    },
    banner: {
        display: 'flex',
        marginTop: '50px',
        '& img': {
            width: '400px',
            marginLeft: '30%',
            height: '500px',
        }
    },
    text: {
        width: '50%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        '& h2': {
            fontSize: '35px',
            color: '#3f63ae',
        }
    },
    map: {
        border: '2px solid #3f63ae',
        overflow: 'hidden',
        margin: '20px 0px 50px',
    },
    about: {
        margin: '120px 0px',
        color: '#3f63ae',
        '& h1': {
            width: '200px',
            borderBottom: '3px solid #3f63ae',
        }
    },

    contact: {
        margin: '50px 0px',
        color: '#3f63ae',
        '& h1': {
            width: '200px',
            borderBottom: '3px solid #3f63ae',
        }
    },
    box: {
        width: '100%',
        display: 'flex',
    },
    form: {
        width: '50%',
    },
    boxform: {
        width: '500px',
        height: '350px',
        border: '1px solid #3f63ae',
        padding: '20px',
        '& input': {
            height: '50px',
            width: '47.5%',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #000',
        },
        boxSizing: 'border-box',

        '& textarea': {
            height: '150px',
            width: '100%',
            marginTop: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #000',
        },
        '& button': {
            height: '50px',
            backgroundColor: '#3f63ae',
            color: 'white',
            borderRadius: '0px',
            marginTop: '20px',
            width: '47.5%',
            '&:hover': {
                backgroundColor: '#3f53ae',
            }
        }
    },
    address: {
        width: '50%',
        '& h4': {
            color: '#3f53ae',
        },
        '& p': {
            margin: '10px 0px',
            color: '#666',
        }
    },
}))