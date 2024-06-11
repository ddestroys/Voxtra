import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
    
    min-height: 100vh;
    
    >.player {
        position: fixed;
        bottom: 0;
    }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`