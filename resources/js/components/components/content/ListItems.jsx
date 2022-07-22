import BulletPoint from "./content-visuals/BulletPoint";
import styled from "styled-components";
import Row from "../utility/Row";

const ListItems = ({ list, singular, children }) => {

  if (singular) {
    // to be used if links are within LI
    return (
      <R>
        <BulletPoint />
        <P>{ children }</P> 
      </R>
    )
  }

  return (
    <>
      {list.map((item, index) => {
        return (
          <R key={ index }>
            <BulletPoint />
            <P>{ item }</P>
          </R>
        );
      })}
    </>
  );
};

export default ListItems;

const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-left: 15px;
  margin-bottom: 5px;

  a {
    color: blue;
    text-decoration: underline;
    font-family: inherit;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {

  }
`;

const R = styled(Row)`
  @media screen and (max-width: 768px) {
    flex-direction: row!important; 
    align-items: center;
  }
`
