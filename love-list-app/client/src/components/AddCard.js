import React from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';

const Wrapper = styled.div`
  position: fixed;
  background-color: rgba(1,2,3,.75);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  justify-content: center;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const CardForm = styled.form`
  width: 30rem;
  padding: 3rem;
  background-color: grey;
`;

const CardInput = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 1.5rem;
  text-align: left;
  min-height: 50vh;
`;

const CloseButton = styled.div`
  position: absolute;
  padding: 1rem;
  top: 3rem;
  right: 3rem;
  background-color: red;
  color: white;
  border: 2px outset white;
  cursor: pointer;
  justify-content: center;
`;

const ActionButtons = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  height: 4rem;
  margin-top: 1.5rem;
  width: 100%;

  > div {
    padding: 1rem 2rem;
    font-size: 2.4rem;
    border: 2px solid ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
    cursor: pointer;

    &.cancel {
      background-color: red;
    }

    &.submit {
      background-color: darkgreen;
    }
  }
`;

const AddCard = ({ visible, cancel, submit, changed, value }) => {
  const form = !visible ? null : (
    <Wrapper>
      <CloseButton onClick={cancel}>Close</CloseButton>
      <CardForm>
        <CardInput type="textarea" onChange={changed} placeholder="say something nice" value={value} />
        <ActionButtons>
          <div className="cancel" onClick={cancel}>
            Cancel
          </div>
          <div className="submit" onClick={submit}>
            Submit
          </div>
        </ActionButtons>
      </CardForm>
    </Wrapper>
  )

  return (
    <>
      {form}
    </>
  );
}

AddCard.propTypes = {
};

export default AddCard;
