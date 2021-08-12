import React, {Component} from 'react';
const Context = React.createContext();


export class Provider extends Component{
    state = {
        contacts: [
            {
                 id: 1,
                 authorName: 'Chiến chuẩn chỉ',
                 authorPic: 'https://lh3.googleusercontent.com/a/AATXAJwf8mvvzC6dKr7cflDaAsqI3YQm1utMic8556-a=s96-c',
                 message: 'Wellcome to my fake',
                 optionalImg:"https://camo.githubusercontent.com/3598fd47efe4b54717994cf10b1c38d75cd2edf3da070610e691552340c7243f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f54683357616c6c2f6173736574732d63646e2f46616b65626f6f6b2f46616b65626f6f6b5f726561646d652e706e67",
                 timestamp: "Sat, 12 Sep 2020 11:34:03 GMT"
             },
             {
                id: 2,
                authorName: 'Quý ngu đần',
                authorPic: 'https://lh3.googleusercontent.com/a/AATXAJz4cjyDxSrFrppx2wKxY-exCi6uzumLTpK6hqb7=s96-c',
                message: 'Wellcome to my fake',
                optionalImg:"",
                timestamp: "Mon, 05 Jul 2021 09:45:40 GMT"
             },
             {
                id: 3,
                 authorName: 'Tùng óc chó',
                 authorPic: 'https://lh3.googleusercontent.com/a/AATXAJzULx8TSbc623gxnPtZr4JxK7vjMisjAMbvYjpF=s96-c',
                 message: 'Wellcome to my fake',
                 optionalImg:"https://www.aknews.it/wp-content/uploads/2018/06/orango-tango-2.jpg",
                 timestamp: "Tue, 13 Jul 2021 23:56:45 GMT"
             }
        ]
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