import styled from "styled-components";

const StylesWrapper = styled.div`
  overflow: auto;

  .hz-virtual-list {
    position: relative;
    border: 1px solid #dedede;
    overflow: auto;

    .list {
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      border-bottom: 1px solid #ddd;

      &:last-of-type {
        border-bottom: none;
      }
    }

    .list-item-odd {
      background-color: #eee;
    }

    .list-item-even {
      background-color: #fff;
    }
  }
`;

export default StylesWrapper;
