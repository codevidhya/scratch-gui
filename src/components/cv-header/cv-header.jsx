import React from 'react';
import classNames from 'classnames';
import styles from './cv-header.css';

class CvHeaderComponent extends React.Component {
  constructor (props) {
    super(props);
    this.onSaveProject = this.onSaveProject.bind(this)
  }

  render () {
    return (
      <div className={classNames(styles.cvHeader)}>
        {this.props.children}
        <i className={classNames(styles.flexFiller)}></i>
        <div className={classNames(styles.buttons)}>
          <button className={classNames(styles.button, styles.saveProject)} onClick={this.onSaveProject}>
            Save project
          </button>
          <button className={classNames(styles.button, styles.closeProject)} onClick={this.onCloseProject}>
            Close project
          </button>
        </div>
      </div>
    )
  }

  onSaveProject() {
    this.props.onSaveProjectClick();
  }

  onCloseProject() {
    window.top.postMessage({name: 'closeScratchProject'}, 'http://localhost:8080');
  }
}

export default CvHeaderComponent;
