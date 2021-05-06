import { React } from 'react';
import Menu from '../../components/Menu/menu'
import logo from '../../assets/logoSolo.png';
import './layout.css';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { SearchRounded, Favorite, Comment, Share } from '@material-ui/icons';

const SearchBoxField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'rgb(245, 245, 245)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ddd',
            },
            '&:hover fieldset': {
                borderColor: '#aaa'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#808080',
            },
        },
        '& fieldset': {
            borderRadius: 40,
            borderWidth: '2px',
            width: '350px',
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px'
        },
    },
})(TextField);

const useStylesButton = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'none',
        },
    }
});

const formStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '100%',
        },
    }
}));

export default function Layout() {
    const feed = [
        {
            _id: 1
        },
        {
            _id: 2
        },
    ];
    const formClasses = formStyles();
    const  buttonClasses = useStylesButton();

    return (
        <div className="background">
            <div className="layoutContainer">
                <div className="areaOne">
                    <div className="logoLayoutContainer">
                        <img src={logo} alt="Logo" className="logoLayout" />
                    </div>
                    <Menu></Menu>
                </div>
                <div className="areaTwo">
                    <ul className="feedList">
                        <li>
                            <strong> Página Inicial</strong>
                        </li>
                        {
                            feed.map(post =>
                            (
                                <li key={post._id} className="posts">
                                    <div className="profilePicGrid">
                                        <img src={logo} alt="A" id="profilePicPost" />
                                    </div>
                                    <span className="profileNameGrid"><strong>João</strong><span>@joaozinguitarrista</span></span>
                                    <span className="postGrid">POSTEI UMA MUSICA INSANA  NO YOUTUBE SEGUE  LA</span>
                                    <span className="likeGrid">
                                        <IconButton classes={{ root: buttonClasses.root  }}>
                                            <Favorite fontSize="small"/>
                                        </IconButton>
                                    </span>
                                    <span className="commentGrid">
                                        <IconButton>
                                            <Comment fontSize="small"/>
                                        </IconButton>
                                    </span>
                                    <span className="shareGrid">
                                        <IconButton>
                                            <Share fontSize="small"/>
                                        </IconButton>
                                    </span>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
                <div className="areaThree">
                    <form className={formClasses.root}>
                        <SearchBoxField
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchRounded style={{ color: '#aaa' }} />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Search"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}