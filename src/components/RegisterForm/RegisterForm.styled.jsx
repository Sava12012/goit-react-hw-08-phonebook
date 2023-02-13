import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  text-align: left;
  font-weight: 500;
  font-size: 24px;
  color: var(--accent);
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;

  font-size: 24px;
  color: var(--primary);

  background-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: var(--inset-shadow);

  :hover {
    outline: 2px solid var(--accent);
  }
  :focus {
    outline: 2px solid var(--accent);
  }
`;

export const Btn = styled.button`
  padding: 10px 25px;

  font-size: 24px;
  font-weight: 500;
  color: var(--accent);

  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--accent);
  box-shadow: var(--main-shadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }
`;
