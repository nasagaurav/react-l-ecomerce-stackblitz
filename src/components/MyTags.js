import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MyTags(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { tags } = state;

  return (
    <div>
      <div>MyTags</div>
      {tags.map((x) => (
        <button key={x.name}>
          {x.name} {x.count}
        </button>
      ))}
    </div>
  );
}
export default MyTags;
