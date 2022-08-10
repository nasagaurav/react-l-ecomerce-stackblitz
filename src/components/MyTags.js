import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useSelector, useDispatch } from "react-redux";

function MyTags(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const { tags } = state;

  return (
    <div>
      <br />
      <ButtonGroup
        variant="contained"
        aria-label="My Tags filter products by tags"
      >
        {tags.map((x) => (
          <Button key={x.name}>
            {x.name} {x.count}
          </Button>
        ))}
      </ButtonGroup>
      <br />
    </div>
  );
}
export default MyTags;
