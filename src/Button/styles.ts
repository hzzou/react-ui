import styled from "styled-components";

// 没用style-components用法，使用css-module(sass)
const StylesWrapper = styled.section`
    .hz-button{
      @keyframes  loading-rotate{
        100%{
          transform: rotate(360deg);
        }
      }
      
      button{
        outline: none;
        border: none;
        cursor: pointer;
        border-right: 5px;
        
        &:disabled{
          cursor: not-allowed;
        }
        
        .slot{
          margin-left: 6px;
        }
        
        // 圆
        &.circle{
          border-radius: 50%;
        }
        
        // 按钮大小
        &.small{
          padding: 5px 10px;
          &.round{
            border-radius: 18px;
          }
        }
        &.medium{
          padding: 7px 14px;
          &.round{
            border-radius: 21px;
          }
        }
        &.large{
          padding: 10px 22px;
          &.round{
            border-radius: 30px;
          }
        }
        
        // 按钮类型
        &.default{
          border: 1px solid #ddd;
          .hz-icon{
            color: #333 !important;
          }
        }
      }
    }
`;

export default StylesWrapper;
