// @flow
import React from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    IconButton
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

type Props = {
    content: string,
    handleChange: Function,
    theme: 'dark' | 'clear',
    id: string,
    cvId: string,
    editMode: boolean
}

type State = {
    open: boolean,
    field: string
}

class TextBlock extends React.Component<Props,State> {
    static defaultProps = {
        theme: 'dark'
    };

    state = {
        open: false,
        field:'Lorem Oppossum is a hypnosum'
    };

    handleClickOpen = () => {
      this.setState({
          open: true
      })
    };

    handleFieldChange = event => {
        this.setState({
            field: event.target.value
        })
    };

    handleCommitChange = (cvId, id, field) => () => {
        this.handleClose();
        return this.props.handleChange(cvId, id, field)
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        const { content, theme, cvId, id, editMode } = this.props;
        const { open, field } = this.state;

        return (
            <div className={'textContainer'}>
                <div className="identityField">
                    { content }
                </div>
                {editMode && <div className={'editButton'}>
                    <IconButton  aria-label="Edit" onClick={this.handleClickOpen}>
                        <EditIcon/>
                    </IconButton>
                </div>}

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
                            defaultValue={content}
                            onChange={this.handleFieldChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Annulez
                        </Button>

                        <Button onClick={this.handleCommitChange(cvId, id, field)} color="primary">
                            Validez
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}

export default TextBlock;
