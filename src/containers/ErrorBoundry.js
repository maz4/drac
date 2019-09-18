import React from 'react';
import { connect } from 'react-redux';
import styles from './ErrorBoundry.module.css';

const ErrorBoundry = (props) => {
    if(props.hasError){
      return (
        <div className={styles.Error}>
          <h1 data-testid="data-error">Upss... Something went wrong. Please refresh your page.</h1>
        </div>
      );
    }

    return props.children;
}

const mapStateToProps = state => ({
  hasError: state.hasError,
});

export default connect(mapStateToProps)(ErrorBoundry);