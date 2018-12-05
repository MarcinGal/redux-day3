import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => (
    <div>
        <h1>
            {}
        </h1>
        <button
            onClick={() => { }}
        >
            +
        </button>
        <button
            onClick={() => { }}
        >
            -
        </button>
    </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)