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
`;

const CloseButton = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 3rem;
  right: 3rem;
  background-color: red;
  color: white;
  border: 2px outset white;
`;

const AddCard = ({ visible, cancel, submit, changed, value }) => {
  const form = !visible ? null : (
    <Wrapper>
      <CloseButton onClick={cancel}>&times;</CloseButton>
      <CardForm onClick={null}>
        <CardInput type="textarea" onChange={changed} placeholder="say something nice" value={value} />
        <div onClick={submit}>
          Do this
        </div>
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
