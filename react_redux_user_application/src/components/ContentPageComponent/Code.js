import React from 'react';
class Code extends React.Component {
  state = {}
  render() {
    return (
      <pre className='bg-light'>
        <samp className='lang-bash text-wrap'>${this.props.code}</samp>
      </pre>
    );
  }
}

export default Code;