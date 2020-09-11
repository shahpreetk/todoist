import React from 'react';
import {firebase} from '../firebase'

const Checkbox = ({id}) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived:true,
            })
    }
    return(
        <div className='checkbox-holder'
        data-testid='checkbox-action'
        onClick={()=>archiveTask()}
        onKeyDown={()=>archiveTask()}
        rol='button' tabIndex={0}>
            <span className='checkbox'/>
        </div>
    )
}

export default Checkbox