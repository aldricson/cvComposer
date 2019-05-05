//@flow
import React from 'react'
import TextBlock from "./textBlock";
import uuid from 'uuid/v1';
import {Button} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import SettingIcon from '@material-ui/icons/Settings';
import CvItem from './cvItem';


type Props = {}

type State = {
    cvItems: Array<Object>,
    editMode: boolean
}

class Composer extends React.Component<Props,State> {
   state = {
       cvItems: [
           {
               content: {
                   fieldLeft: {
                       content: 'Left Opossum',
                       theme: 'dark',
                       id: uuid()

                   },
                   fieldRight: {
                       content: 'Right Opossum',
                       theme: 'dark',
                       id: uuid()

                   }
               },
               itemId: uuid()
           }
       ],
       editMode: true
   };

   handleSettingClick = () => {
       this.setState({
           editMode: !this.state.editMode
       })
   };

   handleCreate = () => {
        this.setState({
            cvItems: [...this.state.cvItems,
                {
                    content: {
                       fieldLeft: {
                           content: 'Left Opossum',
                           theme: 'dark',
                           id: uuid()
                       },
                       fieldRight: {
                           content: 'Right Opossum',
                           theme: 'dark',
                           id: uuid()
                       }
                    },
                    itemId: uuid()
                }
            ]
        })
   };

    handleCommitChange = (cvId, id, content) => {
        this.setState({
            cvItems: this.state.cvItems.map(
                cvItem => cvItem.itemId === cvId
                    ? this.dePileLeBordel(cvItem, id, content)
                    : cvItem
            )
        })
    };

    dePileLeBordel(cvItem, id, content) {
        const result = Object.entries(cvItem.content).map(
            field => field[1].id === id ?
                {
                    content: content,
                    theme: field[1].theme,
                    id: field[1].id
                }
                : field[1]);

        return Object.assign({}, cvItem,
            {
                content: {
                    fieldLeft: result[0],
                    fieldRight: result[1]
                }
            }
        )
    }

    render() {
        const { cvItems, editMode } = this.state;
        return (
            <div className= {'mainContainer'}>
                <div className={'settingButton'}>
                    <IconButton  aria-label="Edit" onClick={this.handleSettingClick}>
                        <SettingIcon color={'secondary'} />
                    </IconButton>
                </div>
                 {cvItems.map((cvItem, index) =>
                        <CvItem editMode={editMode} handleCommit={this.handleCommitChange} {...cvItem} key={index}/>
                )}
                {editMode && <div>
                    <Button onClick={this.handleCreate} color="primary" variant={"outlined"}>
                        Créer
                    </Button>
                </div>}
            </div>
        )
    }
}

export default Composer;
