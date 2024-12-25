import React, { useEffect } from "react";
import { TagsInput } from "react-tag-input-component";

type IPropType = {
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  default_value?: string[];
};
const Colors = ({ sizes, setSizes, default_value }: IPropType) => {
  useEffect(() => {
    if (default_value) {
      setSizes(default_value);
    }
  }, [default_value, setSizes]);
  return (
    <div className="mb-5 tp-product-tags">
      <TagsInput
        value={sizes}
        onChange={setSizes}
        name="sizes"
        placeHolder="enter sizes"
      />
      <em>press enter to add new color</em>
    </div>
  );
};

export default Colors;
