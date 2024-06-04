import styled from "styled-components";

const StylesWrapper = styled.div`
    border: 1px solid #ddd;
    width: 100%;
    height: 100%;
    .calendar {
        width: 100%;
        height: 100%;
        flex: 1 1 500px;
        background: #fff;
        header {
            flex:1 1 60px;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            box-sizing: border-box;
            .title {
                font-size: 26px;
                font-weight: 600;
            }

            .btns {
                display: flex;

                button {
                    margin: 0 5px;
                    height: 40px;
                }
            }
        }
        .body {
            display: flex;
            flex-wrap: wrap;
            .header {
                font-weight: 600;
                border-bottom: 1px solid #ddd;
                border-top: 1px solid #ddd;
                padding: 10px 0;
            }
            .first{
                width: calc(100% / 7);
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding: 10px 0;
            }
            .item {
                width: calc(100% / 7);
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;
                padding: 10px 0;
                &:hover{
                    background: rgba(0, 0, 0, 0.1);
                    color: rgba(64, 158, 255, 1);
                    font-weight: 600;
                }
            }

            .today {
                background: rgba(64, 158, 255, 1);
                color: #fff;
                font-weight: 600;
            }
        }
    }
`;
export default StylesWrapper;
