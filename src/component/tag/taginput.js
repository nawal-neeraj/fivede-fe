import "./tag.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArr } from "../redux/action";
import { remArr } from "../redux/action";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const { tagReducer = {} } = useSelector((state) => state);
  function handleTags(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    dispatch(setArr([value]));
    e.target.value = "";
  }

  const removeTags = (index) => {
    let arr = tagReducer.arr.filter((item, i) => i !== index);
    console.log(arr);
    dispatch(remArr(arr));
  };

  return (
    <div className="tag-input-container">
      {tagReducer.arr.map((item, index) => (
        <div key={index} className="tag-item">
          <span className="text">{item}</span>
          <span onClick={() => removeTags(index)} className="close">
            &times;
          </span>
        </div>
      ))}

      <input
        type="text"
        onKeyDown={handleTags}
        placeholder="type..."
        className="tags-input"
      />
    </div>
  );
};
export default TagInput;
