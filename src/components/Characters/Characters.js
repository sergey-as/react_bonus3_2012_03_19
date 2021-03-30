import React, {Component} from 'react';
import Character from "../Character/Character";
import './Characters.css';

class Characters extends Component {

    state = {
        characters: [],
        chosen: null
    }

    componentDidMount() {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value => {
                this.setState({characters: value});
            });
    }

    chooseCharacter = (characterId) => {
        // console.log(characterId);
        let {characters} = this.state;
        let find = characters.find(value => value.id === characterId);
        // console.log(find);
        this.setState({chosen: find});
    }


    render() {
        let {characters, chosen} = this.state;
        return (
            // <div className={'d-flex flex-column'}>
            <div className={'d-flex'}>
                <div className={'all-characters'}>
                    <h2>All futurama characters</h2>
                    {
                        characters.map(value => <Character
                            item={value}
                            chooseCharacter={this.chooseCharacter}/>)
                    }
                </div>

                {
                    // chosen &&
                    // (<div className={"character-detail"}>
                    //     {/*<h4>{chosen?.id} - {chosen?.name.first}</h4>*/}
                    //     {
                    //         chosen.sayings.map(phrase => (
                    //             <p>
                    //                 {phrase}
                    //             </p>))
                    //     }
                    // </div>)

                    chosen ?
                        (<div className={"character-detail"}>
                            {/*<h4>{chosen?.id} - {chosen?.name.first}</h4>*/}
                            {
                                chosen.sayings.map(phrase => (
                                    <p>
                                        {phrase}
                                    </p>))
                            }
                        </div>)
                        : (<div>nothing to show</div>)

                }

            </div>
        );
    }

}

export default Characters;