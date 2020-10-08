/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import {useState} from "react";
import em from "@emotion/styled";
// import axios, {AxiosRequestConfig} from "axios";
import Dropzone from "react-dropzone";
import {BsPlusCircle} from "react-icons/bs";
import Button from "../../../components/Button";
import Row from "../../../components/Layout/Row";
import SearchDropdown from "../../../components/Dropdown/SearchDropdown";
import TextArea from "../../../components/Input/TextArea";

const options = [
  "ml",
  "l",
  "kg",
  "g",
  "box",
];

const ProductCreateSection = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState<string>("");

  const onDrop = (files: any) => {
    let formData = new FormData();
    formData.append("file", files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setImage(reader.result as string);
    }
  }

  return (
    <Section>
      <div css={ContainerStyle}>
        <figure>
          {/* 10메가까지 업로드 가능하도록 제한 */}
          <Dropzone onDrop={onDrop} multiple={false} accept="image/jpeg, image/png, image/gif" maxSize={83886080}>
            {({getRootProps, getInputProps}) => (
              <section css={DropzoneSection} {...getRootProps()}>
                <input {...getInputProps()} />
                {image ? (
                  <img src={image} alt="업로드 이미지" css={ImageStyle} />
                ) : (
                  <BsPlusCircle style={{fontSize: "3rem"}}/>
                )}
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
            <SearchDropdown value={value} setValue={setValue} placeholder="단위" options={options}/>
          </div>
          <div>
            <TextArea placeholder="설명"/>
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
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const ContainerStyle = css`
  padding: 1rem;
  width: 40rem;
  margin: 0 auto;
  margin-bottom: 8rem;
  & > figure { position: relative; width: 40%; float: left; }
  & > figure:after { content: ''; display: block; padding-bottom: 100%; }
  & > figure > * { position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; }
  & > div { width: 60%; height: 100%; float: left; text-align: left; padding-left: 0.4rem; }
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    & > figure { width: 100%; }
    & > div { width: 100%; margin-top: 1rem; margin-bottom: 2rem; min-height: 15rem; }
  }
`;

const ImageStyle = css`
  position: absolute; 
  left: 0; 
  top: 0; 
  width: 100%; 
  height: 100%; 
  object-fit: cover;
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
