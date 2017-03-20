import React from 'react';
import {Link} from 'react-router';

const Example = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=London'>London</Link>
        </li>
        <li>
          <Link to='/?location=Cascais'>Cascais, Portugal</Link>
        </li>
      </ol>
    </div>
  );
};

export default Example;
