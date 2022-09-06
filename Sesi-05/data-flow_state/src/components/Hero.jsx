import React from "react";


// PROPS DARI INFORMASI STATIS
class HeroName extends React.Component {
    render() {
        return (
            <>
                <h1>Hero Name (props)</h1>
                <h2>{this.props.name}</h2>
            </>
        );
    }
}

export default class Hero extends React.Component {
    render(){
        return <HeroName name="Batman" />
    }
}

// PROPS DARI STATE YANG DIKIRIM
// class HeroName extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>Hero Name</h1>   
//                 <h2>{this.props.name}</h2>
//             </>
//         );
//     }
// }

// export default class Hero extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Batman",
//         };
//     }

//     render(){
//         return <HeroName name={this.state.name} />
//     }
// }

