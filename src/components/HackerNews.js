import React from 'react';
import { connect } from 'react-redux';

const HackerNews = () => {
    return (
        <div>
            
        </div>
    );
}

const mapStateToProps = (state)=>{
console.log(state)
}

export default connect(mapStateToProps)(HackerNews);
