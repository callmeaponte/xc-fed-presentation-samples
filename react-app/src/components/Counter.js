import React from 'react';
import { connect } from 'react-redux';
import '../css/Counter.css';

class Counter extends React.Component {
    handleIncrement = () => {
        this.props.increment(this.props.count + 1);
    }

    render() {
        return (
            <aside>
                {
                    this.props.count > 0 && (
                        <span>
                            { this.props.count }
                        </span>
                    )
                }

                <button type="button" onClick={ this.handleIncrement }>
                    Increment
                </button>
            </aside>
        );
    }
}

const mapStateToProps = (count) => ({ count });
  
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
