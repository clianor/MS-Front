import em from "@emotion/styled";

type ProductSectionProps = {
  type: "create" | "manage";
}

const ProductSection = ({ type }: ProductSectionProps) => {
  return (
    <Section>
      <SectionHeader>
        <h5>제품</h5>
        {type === "create" && <p>추가</p>}
      </SectionHeader>
      <SectionSub>
        <div>정렬</div>
        <div>등록일 / 이름순</div>
      </SectionSub>
      <section>
        <ArticleProduct>
          <figure>
            <img src="https://i.fltcdn.net/contents/2867/original_1458779186779_qt3ubnsif6r.jpeg" alt="이미지" />
          </figure>
          <div>
            <h6>강아지 용품</h6>
            <p>단위: 개</p>
            <p>등록일</p>
          </div>
        </ArticleProduct>
        <ArticleProduct>
          <figure>
            <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F2444F03E589AC335175E8F" alt="이미지" />
          </figure>
          <div>
            <h6>강아지 용품</h6>
            <p>단위: 개</p>
            <p>등록일</p>
          </div>
        </ArticleProduct>
      </section>
    </Section>
  );
};

const Section = em.section`
  display: block;
  float: left;
  width: 20rem;
  height: 100%;
  border-right: 1px solid #dbdbdb;
  overflow: hidden;
  overflow-y: auto;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 60%;
  }
`;

const SectionHeader = em.header`
  overflow: hidden;
  border-bottom: 1px solid #dbdbdb;
  padding: 1.2rem 1rem 1rem 1rem;
  & > h5 { float:left; font-size: 1.2rem; font-weight: bold; }
  & > p { float: right; font-size: 1rem; line-height: 1.2rem; cursor: pointer; }
`;

const SectionSub = em.section`
  overflow: hidden;
  border-bottom: 1px solid #dbdbdb;
  padding: 1rem;
  & > div:first-of-type { float: left; }
  & > div:last-of-type { float: right; }
`;

const ArticleProduct = em.article`
  overflow: hidden;
  padding: 1rem;
  border-bottom: 1px solid #dbdbdb;
  & > figure { position: relative; width: 40%; float: left; }
  & > figure:after { content: ''; display: block; padding-bottom: 100%; background-color: rgba(0,0,0,0.7); }
  & > figure > img { position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover; }
  & > div { width: 60%; float: left; text-align: left; padding-left: 0.4rem; }
  & > div > * + * { padding-top: 0.5rem; }
  & > div > h6 { font-size: 1.2rem; font-weight: bold; } 
`;

export default ProductSection;
