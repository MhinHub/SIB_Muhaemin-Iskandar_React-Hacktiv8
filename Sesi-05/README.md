# Sesi 5 - Data Flow di React, PropTypes, Atomic Design

## Data Flow di React

### Aliran data di React
    Untuk saling berinteraksi antar komponen, React mempunyai dua cara: state dan props. Masing-masing punya tugas dan tujuan yang berbeda. State digunakan untuk menyimpan kondisi saat ini untuk komponen, sementara props digunakan untuk mengirimkan informasi ke komponen lain.

- State
        Secara definisi:
        <blockquote><p>Seluruh informasi dari sebuah aplikasi yang dibutuhkan pada satu waktu. (Mutable)</p></blockquote>

    ```js
    
    import React, {Component} from 'react' 
    class StateDemo extends Component {
      constructor() {   // Mendefinisikan State
        super()
        this.state = {
            username: '',
        }
        }
        render() {
            return (
                <div>
                    
                    <h1>{this.state.username}</h1> // Menampilkan State
                </div>
            )
        }
    }
    // Bisa dengan menggunakan function


    /*
    this.setState({username: 'Hello World'}) // Mengubah State
    
    this.setState({username: 'Hello World'}, () => { // Mengubah State dengan callback
        console.log(this.state.username)
    } )
    */

    ```
    
    
    <!-- 
      - Dengan Function
    ```js
    import React from 'react'
    const StateDemo = () => {
        const [username, setUsername] = React.useState('')
    ```
      - Dengan Hooks
    ```js  
    import React, {useState} from 'react'
    const StateDemo = () => {
        const [username, setUsername] = useState('')
    ```
      - Dengan Context
    ```js
    import React, {createContext} from 'react'
    const StateDemo = () => {
        const [username, setUsername] = React.useState('')
    ```
        - Dengan Redux
    ```js
    import React, {useState} from 'react'
    import {useDispatch, useSelector} from 'react-redux'
    const StateDemo = () => {
        const [username, setUsername] = useState('')
        const dispatch = useDispatch()
        const state = useSelector(state => state)
    ```
        - Dengan MobX
    ```js
    import React, {useState} from 'react'
    import {useObserver} from 'mobx-react'
    const StateDemo = () => {
        const [username, setUsername] = useState('')
        const state = useObserver(() => ({
            username
        }))
    ``` 
    -->

- Props
    Secara definisi:
        <blockquote><p>sebuah cara untuk mengirim data(informasi, state) dari parent component ke child component. (Immutable)</p></blockquote>


    ```js
    class propsDemo extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    people: [
                        {name: 'John', age: 20},
                        {name: 'Jane', age: 21},
                        {name: 'Bob', age: 22},
                    ]
                }
            }
            render() {
                return (
                        <People = {this.state.people} />
                )
            }
        }
    class People extends Component {
            constructor(props) {
                super(props)
            }
            render() {
                return (
                    <ul>
                        {this.props.people(() => <li>{name} - {age}</li>)}
                    </ul>
                )
            }
        }
    
    // Bisa dengan menggunakan function

    ```
### PropTypes
<blockquote><p>PropTypes adalah sebuah library yang digunakan untuk memvalidasi props yang diterima oleh sebuah komponen. Jika props yang diterima tidak sesuai dengan yang diharapkan, maka akan muncul pesan error pada console.</p></blockquote>

```js
import React from 'react'
import PropTypes from 'prop-types'
const People = (props) => {
    return (
        <ul>
            {props.people.map((person) => <li>{person.name} - {person.age}</li>)}
        </ul>
        )
    }
People.propTypes = {
    people: PropTypes.array.isRequired
}

```

### Atomic Design
<blockquote><p>Atomic Design adalah sebuah metode untuk membangun sebuah UI yang terdiri dari atom, molekul, organisme, template, dan halaman. Atomic Design membagi UI menjadi beberapa bagian yang lebih kecil, sehingga memudahkan dalam pengembangan UI. Tujuannya adalah untuk mereduksi adanya kode berulang, mereduksi waktu set up, dan meningkatkan konsistensi antar komponen dan tampilan.</p></blockquote>

<img src="https://files.cdn.thinkific.com/file_uploads/236035/images/0f7/346/9ab/Screen_Shot_2020-11-20_at_12.51.59.png" width="520">
        Baca dan pahami artikel tentang atomic design lebih lanjut berikut: 
        <a href="https://atomicdesign.bradfrost.com/table-of-contents/" target="_blank" >https://atomicdesign.bradfrost.com/table-of-contents/</a>
        <a href="https://codeburst.io/atomic-design-with-react-e7aea8152957" rel="noopener noreferrer" target="_blank">https://codeburst.io/atomic-design-with-react-e7aea8152957</a>
  