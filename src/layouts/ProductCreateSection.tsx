/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import {useState} from "react";
import em from "@emotion/styled";
import Dropzone from "react-dropzone";
import { BsPlusCircle } from "react-icons/bs";
import Button from "../components/Button";
import Row from "../components/Layout/Row";
import SearchDropdown from "../components/Dropdown/SearchDropdown";
import TextArea from "../components/Input/TextArea";

const options = [
  "ml",
  "l",
  "kg",
  "g",
  "box",
];

const ProductCreateSection = () => {
  const [value, setValue] = useState("");

  return (
    <Section>
      <div css={ContainerStyle}>
        <figure>
          <Dropzone>
            {({ getRootProps, getInputProps }) => (
              <section css={DropzoneSection} {...getRootProps()}>
                <input {...getInputProps()} />
                <BsPlusCircle style={{ fontSize: "3rem" }} />
              </section>
            )}
          </Dropzone>
        </figure>
        <div css={rightPanel}>
          <Row size="small">
            <Button theme="secondary" size="big" onClick={() => console.log("삭제")} css={delButton}>삭제</Button>
            <Button theme="primary" size="big" onClick={() => console.log("등록")} css={submitButton}>등록</Button>
          </Row>
          <div>
            <SearchDropdown value={value} setValue={setValue} placeholder="단위" options={options} />
          </div>
          <div>
            <TextArea placeholder="설명" />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = em.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 20rem);
  height: 100%;
`;

const ContainerStyle = css`
  overflow: hidden;
  padding: 1rem;
  width: 40rem;
  margin: 0 auto;
  margin-bottom: 8rem;
  & > figure { position: relative; width: 40%; float: left; }
  & > figure:after { content: ''; display: block; padding-bottom: 100%; }
  & > figure > * { position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; }
  & > div { width: 60%; height: 100%; float: left; text-align: left; padding-left: 0.4rem; }
`;

const DropzoneSection = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E9F4;
  outline: none;
  cursor: pointer;
  &:active { border: 3px solid #E6E9F4; }
`;

const rightPanel = css`
  display: flex;
  flex-direction: column;
  & > * + * { padding-top: 1rem; }
  & > *:last-of-type { height: 100%; }
`;

const delButton = css`
  flex: 1;
`;

const submitButton = css`
  flex: 1;
`;

export default ProductCreateSection;
