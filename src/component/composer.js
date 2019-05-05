//@flow
import React from 'react'
import TextBlock from "./textBlock";
import uuid from 'uuid/v1';
import {Button} from "@material-ui/core";

type Identite = {
    nom: string,
    prenom: string
}

type BlockDatasType = [
    {
        content: Identite,
        handleChange: Function,
        theme: string,
        id: string
    }
]

type Props = {}

type State = {
    blockDatas: BlockDatasType
}



class Composer extends React.Component<Props,State> {
   state = {
       blockDatas: [
           {
               content: {
                   nom: 'Prolo',
                   prenom: 'Raoul'
               },
               theme: 'dark',
               id: uuid()
           },
           {
               content: {
                   nom: 'Furax',
                   prenom: 'Sylvie'
               },
               theme: 'dark',
               id: uuid()
           }
       ]
   };

   handleCreate = () => {
     this.setState({
         blockDatas: [...this.state.blockDatas, {content: 'next', theme: 'dark', id: uuid()}]
     })
   };

    handleCommitChange = (id, identity) => {
        this.setState({
            blockDatas: this.state.blockDatas.map(
                blockData => blockData.id === id
                    ? Object.assign({}, blockData, { content: identity })
                    : blockData
            )
        })
    };

    render() {
        const { blockDatas } = this.state;
        return (
            <div>
                {blockDatas.map((blockText, index) =>
                        <TextBlock handleChange={this.handleCommitChange} {...blockText} key={index}/>
                )}
                <Button onClick={this.handleCreate} color="primary" variant={"outlined"}>
                    Créer
                </Button>
            </div>
        )
    }
}

export default Composer;
