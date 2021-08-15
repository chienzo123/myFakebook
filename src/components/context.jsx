import React, {Component} from 'react';
import {datab} from '../firebase';
const Context = React.createContext();
const reduce = (state, action) => {
    switch (action.type) {
        // case 'DELETE_CONTACT':
        //     return {
        //         ...state,
        //         contacts: state.contacts.filter(
        //             contact => contact.id !== action.payload.id
        //         ),
        //         loading: action.payload.loadingInternal
        //     }
        // case 'ADD_CONTACT':
        //     return{
        //         ...state,
        //         contacts: [action.payload, 
        //         ...state.contacts
        //         ]
        //     }
        // case 'DETAILS_CONTACT':
        //     return{
        //         ...state,
        //         ...state.contacts
        //     }
        // case 'EDIT_CONTACT':
        //     return{
        //         ...state,
        //         contacts: state.contacts.map(contact => 
        //             contact.id === action.payload.id ? (contact = action.payload) : contact
        //             )
        //     }

        default:
                return state; 
    }
}

export class Provider extends Component{
    state = {
        contacts: [
            // {
            //      id: 1,
            //      authorName: 'Chiến chuẩn chỉ',
            //      authorPic: 'https://lh3.googleusercontent.com/a/AATXAJwf8mvvzC6dKr7cflDaAsqI3YQm1utMic8556-a=s96-c',
            //      message: 'Wellcome to my fake',
            //      optionalImg:"",
            //      timestamp: "Sat, 12 Sep 2020 11:34:03 GMT"
            //  },
            //  {
            //     id: 2,
            //     authorName: 'Quý ngu đần',
            //     authorPic: 'https://lh3.googleusercontent.com/a/AATXAJz4cjyDxSrFrppx2wKxY-exCi6uzumLTpK6hqb7=s96-c',
            //     message: 'Wellcome to my fake',
            //     optionalImg:"",
            //     timestamp: "Mon, 05 Jul 2021 09:45:40 GMT"
            //  },
            //  {
            //     id: 3,
            //      authorName: 'Tùng óc chó',
            //      authorPic: 'https://lh3.googleusercontent.com/a/AATXAJzULx8TSbc623gxnPtZr4JxK7vjMisjAMbvYjpF=s96-c',
            //      message: 'Wellcome to my fake',
            //      optionalImg:"https://www.aknews.it/wp-content/uploads/2018/06/orango-tango-2.jpg",
            //      timestamp: "Tue, 13 Jul 2021 23:56:45 GMT"
            //  }
            
        ],
        dispatch: action => this.setState(state => reduce(state, action))
}
async componentDidMount(){
    
 datab.once('value').then(snapshot => {
    this.setState({
        contacts: Object.values(snapshot.val())
    })
  })


}
componentDidUpdate(){
    datab.once('value').then(snapshot => {
        this.setState({
            contacts: Object.values(snapshot.val())
        })
      })
}
render(){
    return (
        <Context.Provider value = {this.state}>
            {
                this.props.children
            }
        </Context.Provider>
    )
        }
    }
export const Consumer = Context.Consumer;