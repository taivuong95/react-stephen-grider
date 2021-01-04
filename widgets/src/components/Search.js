import React, {useState} from 'react';

const Search = () => {
    const [term, setTerm] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="ui form-group">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" />
                </div>
            </div>
        </div>
    );
}

export default Search;