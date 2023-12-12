import styled from "styled-components";

const StylesWrapper = styled.div` 
  .hz-virtual-table {
    border: 1px solid #dedede;
    color: #333;
    width: 100%;
    .table {
      position: relative;
      overflow: auto;
      display: flex;
      flex-direction: column;
      width: 100%;
      .thead,
      .tbody {
        width: 100%;
        .tr {
          display: flex;
          width: 100%;
          cursor: pointer;
          margin: 0;
          padding: 0;
          .th,
          .td {
            list-style: none;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #999;
            line-height: 1em;
            &:last-of-type {
              border-right: none;
            }
            input{
              
            }
          }
        }
      }

      .thead {
        top: 0;
        z-index: 10000;
        .tr {
          background-color: #dedede;
          .th {
            font-weight: bold;
          }
        }
      }
      .tbody {
        .default{
          width: 100%;
          height: 100%;
          color: #999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tr {
          position: absolute;
          border-bottom: 1px solid #dedede;
          &:last-of-type {
            border-bottom: none;
          }
          .td {
            border-color: #dedede;
          }
        }
        .item-odd {
          background-color: #fff;
        }
        .item-even {
          background-color: #eee;
        }
      }
    }
  }
`;

export default StylesWrapper;
