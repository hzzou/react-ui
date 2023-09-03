import styled from 'styled-components';

export const StylesWrapper = styled.div`
  .virtual-table {
    border: 1px solid #dedede;
    color: #333;
    width: 100%;
    .table {
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: auto;
      width: 100%;
      .thead,
      .tbody {
        width: 100%;
        .tr {
          display: flex;
          width: 100%;
          .th,
          .td {
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid #999;
            line-height: 1em;
            &:last-of-type {
              border-right: none;
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
        overflow: auto;
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
