// @flow
import React from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField
} from "@material-ui/core";

type Identite = {
    nom: string,
    prenom: string
}

type Props = {
    content: Identite,
    handleChange: Function,
    theme: 'dark' | 'clear',
    id: string
}



type State = {
    open: boolean,
    nom: string,
    prenom: string
}

class TextBlock extends React.Component<Props,State> {
    static defaultProps = {
        theme: 'dark'
    };

    state = {
        open: false,
        nom: '',
        prenom: ''
    };

    handleClickOpen = () => {
      this.setState({
          open: true
      })
    };

    handleNameChange = event => {
        this.setState({
            nom: event.target.value
        })
    };

    handleFirstNameChange = event => {
        this.setState({
            prenom: event.target.value
        })
    };

    handleCommitChange = (id,identity) => event => {
        this.handleClose()
        return this.props.handleChange(id, identity)
    };


    handleClose = () => {
        this.setState({
            open: false
        })
    };


    render() {
        const { content, theme, id } = this.props;
        const { open, nom, prenom } = this.state;

        return (
            <div className={'textContainer'}>
                <div>
                    <div className="identityField">
                        { `Nom: ${content.nom} --- Prenom: ${content.prenom}` }
                    </div>
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                        cliquez moi
                    </Button>
                </div>
                <Dialog
                    open={open}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Veuillez tapper votre nom
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="tappez ici (pas trop fort)"
                            fullWidth
                            defaultValue={content.nom}
                            onChange={this.handleNameChange}
                        />
                    </DialogContent>
                    <DialogContent>
                        <DialogContentText>
                            Veuillez tapper votre premom
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="tappez ici (pas trop fort)"
                            fullWidth
                            defaultValue={content.prenom}
                            onChange={this.handleFirstNameChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Annulez
                        </Button>

                        <Button onClick={this.handleCommitChange(id,{nom: nom, prenom: prenom})} color="primary">
                            Validez
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

export default TextBlock;
