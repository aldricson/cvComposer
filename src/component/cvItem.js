//@flow
import React from 'react';
import TextBlock from './textBlock'

type Props = {
    content:{ fieldLeft:Object, fieldRight:Object},
    itemId: string,
    editMode: boolean,
    handleCommit: Function
}


class CvItem extends React.Component<Props> {

    render() {
        const {content, itemId, editMode, handleCommit} = this.props;

        return (
            <div className={'cvItem'}>
                <TextBlock editMode={editMode} handleChange={handleCommit} cvId={itemId} {...content.fieldLeft}/>
                <TextBlock editMode={editMode} handleChange={handleCommit} cvId={itemId} {...content.fieldRight}/>
            </div>
        )
    }

}

export default CvItem;
