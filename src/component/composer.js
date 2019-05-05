//@flow
import React from 'react'
import TextBlock from "./textBlock";
import uuid from 'uuid/v1';
import {Button} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import SettingIcon from '@material-ui/icons/Settings';



type BlockDatasType = [
    {
        content: string,
        handleChange: Function,
        theme: string,
        id: string
    }
]

type Props = {}

type State = {
    blockDatas: BlockDatasType,
    editMode: boolean
}



class Composer extends React.Component<Props,State> {
   state = {
       blockDatas: [
           {
               content: 'Lorem opposum is an hypno sum',
               theme: 'dark',
               id: uuid()
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
         blockDatas: [...this.state.blockDatas, {content: 'Lorem opposum is an hypno sum', theme: 'dark', id: uuid()}]
     })
   };

    handleCommitChange = (id, content) => {
        this.setState({
            blockDatas: this.state.blockDatas.map(
                blockData => blockData.id === id
                    ? Object.assign({}, blockData, { content: content})
                    : blockData
            )
        })
    };

    render() {
        const { blockDatas, editMode } = this.state;
        return (
            <div className= {'mainContainer'}>
                <div className={'settingButton'}>
                    <IconButton  aria-label="Edit" onClick={this.handleSettingClick}>
                        <SettingIcon color={'secondary'} />
                    </IconButton>
                </div>
                 {blockDatas.map((blockText, index) =>
                        <TextBlock handleChange={this.handleCommitChange} {...blockText} key={index} editMode={editMode}/>
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
