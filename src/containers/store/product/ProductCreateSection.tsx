/** @jsx jsx */
import {MouseEvent} from "react";
import {jsx, css} from "@emotion/core";
import {useState} from "react";
import em from "@emotion/styled";
import Dropzone from "react-dropzone";
import {BsPlusCircle} from "react-icons/bs";
import Row from "../../../components/Layout/Row";
import Button from "../../../components/Button";
import SearchDropdown from "../../../components/Dropdown/SearchDropdown";
import TextArea from "../../../components/Input/TextArea";
import Dialog from "../../../components/Dialog";

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
  const [dataDialog, setDataDialog] = useState({title: "", message: "", onCancelMessage: "", onSuccessMessage: ""});
  const [showDialog, setShowDialog] = useState(false);

  const onShowDialog = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonType = event.currentTarget.dataset["type"];

    if (buttonType === "submit") {
      setDataDialog({title: "제품 등록", message: "제품을 등록하시겠습니까?", onCancelMessage: "취소", onSuccessMessage: "등록"});
    } else if (buttonType === "delete") {
      setDataDialog({title: "제품 삭제", message: "제품을 삭제하시겠습니까?", onCancelMessage: "취소", onSuccessMessage: "삭제"});
    }
    setShowDialog(true);
  };

  const handleCancleDialog = () => {
    setShowDialog(false);
  };

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
      {showDialog && <Dialog onCancel={handleCancleDialog} {...dataDialog} />}
      <div css={ContainerStyle}>
        <figure>
          {/* 10메가까지 업로드 가능하도록 제한 */}
          <Dropzone onDrop={onDrop} multiple={false} accept="image/jpeg, image/png, image/gif" maxSize={83886080}>
            {({getRootProps, getInputProps}) => (
              <section css={DropzoneSection} {...getRootProps()}>
                <input {...getInputProps()} />
                {image ? (
                  <img src={image} alt="업로드 이미지" css={ImageStyle}/>
                ) : (
                  <BsPlusCircle style={{fontSize: "3rem"}}/>
                )}
              </section>
            )}
          </Dropzone>
        </figure>
        <div css={rightPanel}>
          <Row size="small">
            <Button theme="secondary" size="big" onClick={onShowDialog} css={delButton} data-type="delete">삭제</Button>
            <Button theme="primary" size="big" onClick={onShowDialog} css={submitButton} data-type="submit">등록</Button>
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
