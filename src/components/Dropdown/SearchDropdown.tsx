import React, {ChangeEvent, HTMLAttributes, useState} from "react";
import em from "@emotion/styled";

type SearchDropdownProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
  setValue: Function;
  placeholder?: string;
  options?: string[];
}

const SearchDropdown = ({ value, setValue, placeholder, options, ...rest }: SearchDropdownProps) => {
  const [visible, setVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleMouseDown = (event: any) => {
    setValue(event.target.textContent);
  }

  const showDropdown = () => setVisible(true);

  const hideDropdown = () => setVisible(false);

  return (
    <SearchDropdownContainer {...rest}>
      <Input
        type="search"
        placeholder={placeholder}
        onFocus={showDropdown}
        onBlur={hideDropdown}
        onChange={handleChange}
        value={value}
      />
      <Dropdown
        onMouseDown={handleMouseDown}
      >
        {visible && options &&
        options
          .filter((item) => item.includes(value))
          .map((item, index) => <li key={index}>{item}</li>)}
      </Dropdown>
    </SearchDropdownContainer>
  );
};

const SearchDropdownContainer = em.div`
  position: relative;
  text-transform: uppercase;
`;

const Input = em.input`
  &[type="search"] { width: 100%; font-size: 1rem; font-family: inherit; box-sizing: border-box; border: 1px solid #E6E9F4; outline: none; padding: 0.75rem 1rem; text-transform: inherit; }
`;

const Dropdown = em.ul`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #fff;
  & > li { list-style: none; padding: 0.5rem 0.75rem; cursor: pointer; box-sizing: border-box; border-left: 1px solid #dbdbdb; border-right: 1px solid #dbdbdb; }
  & > li:last-of-type { border-bottom: 1px solid #dbdbdb; }
  & > li:hover { background-color: #f9fafc; }
`;

export default SearchDropdown;
