import styled from "styled-components";

const HelloWorld = styled.div.attrs({ children: "Hello World!" })`
  display: flex;
  margin: auto;
`;

export default HelloWorld;
export { HelloWorld };
