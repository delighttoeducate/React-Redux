import styled, { css } from "styled-components";

export const TodoHeader = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 50%;
  border: 1px solid grey;
  padding: 10px;
  text-align: center;
  background-color: blue;
  font-weight: bold;
  color: white;
`;
export const Button = styled.button`
  width: 95px;
  height: 36px;
  background-color: ${props => props.color};
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  margin: auto;
`;
export const TodoWrapperBox = styled.div``;

export const TodoArea = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 50%;
  border: 1px solid grey;
  padding: 10px;
`;

export const Span = styled.span`
  vertical-align: middle;

  text-decoration: ${props =>
    props.taskStatus === "completed" ? "line-through" : "none"};
`;
export const Checkbox = styled.input`
  margin: auto;
  width: 40px;
  height: 30px;
  vertical-align: middle;
`;

export const TodoAddBox = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
`;

export const TodoNavigate = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
`;

export const TodoAddInput = styled.input`
  width: 100%;
  height: 30px;
`;
