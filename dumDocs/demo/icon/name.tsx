import React from "react";
import styled from "styled-components";
import {Icon} from "hzlzh-react-ui";

const StyleWrapper = styled.div`
  .icon_lists {
    width: 100% !important;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      list-style: none !important;
      cursor: default;
      border: 1px solid #dedede;
      margin: 0 !important;
      .name {
        color: #666;
      }
      .code-name{
        display: none;
      }
    }
    .icon {
      display: block;
      height: 50px;
      line-height: 50px;
      font-size: 42px;
      color: #333 !important;
      &:hover {
        font-size: 100px;
      }
    }
  }
`;

const NameDemo: React.FC = ()=>{

	return(
		<StyleWrapper>
			<div className="content font-class">
				<ul className="icon_lists dib-box">
					<li className="dib">
						<Icon name="unlock"></Icon>
						<div className="name">
                            unlock
						</div>
						<div className="code-name">.icon-unlock
						</div>
					</li>
					<li className="dib">
						<Icon name="user"></Icon>
						<div className="name">
                            user
						</div>
						<div className="code-name">.icon-user
						</div>
					</li>

					<li className="dib">
						<Icon name="upload"></Icon>
						<div className="name">
                            upload
						</div>
						<div className="code-name">.icon-upload
						</div>
					</li>

					<li className="dib">
						<Icon name="work"></Icon>
						<div className="name">
                            work
						</div>
						<div className="code-name">.icon-work
						</div>
					</li>

					<li className="dib">
						<Icon name="training"></Icon>
						<div className="name">
                            training
						</div>
						<div className="code-name">.icon-training
						</div>
					</li>

					<li className="dib">
						<Icon name="warning"></Icon>
						<div className="name">
                            warning
						</div>
						<div className="code-name">.icon-warning
						</div>
					</li>

					<li className="dib">
						<Icon name="zoom-in"></Icon>
						<div className="name">
                            zoom-in
						</div>
						<div className="code-name">.icon-zoom-in
						</div>
					</li>

					<li className="dib">
						<Icon name="zoom-out"></Icon>
						<div className="name">
                            zoom-out
						</div>
						<div className="code-name">.icon-zoom-out
						</div>
					</li>

					<li className="dib">
						<Icon name="add-bold"></Icon>
						<div className="name">
                            add-bold
						</div>
						<div className="code-name">.icon-add-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-left-bold"></Icon>
						<div className="name">
                            arrow-left-bold
						</div>
						<div className="code-name">.icon-arrow-left-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-up-bold"></Icon>
						<div className="name">
                            arrow-up-bold
						</div>
						<div className="code-name">.icon-arrow-up-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="close-bold"></Icon>
						<div className="name">
                            close-bold
						</div>
						<div className="code-name">.icon-close-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-down-bold"></Icon>
						<div className="name">
                            arrow-down-bold
						</div>
						<div className="code-name">.icon-arrow-down-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="minus-bold"></Icon>
						<div className="name">
                            minus-bold
						</div>
						<div className="code-name">.icon-minus-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-right-bold"></Icon>
						<div className="name">
                            arrow-right-bold
						</div>
						<div className="code-name">.icon-arrow-right-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="select-bold"></Icon>
						<div className="name">
                            select-bold
						</div>
						<div className="code-name">.icon-select-bold
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-up-filling"></Icon>
						<div className="name">
                            arrow-up-filling
						</div>
						<div className="code-name">.icon-arrow-up-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-down-filling"></Icon>
						<div className="name">
                            arrow-down-filling
						</div>
						<div className="code-name">.icon-arrow-down-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-left-filling"></Icon>
						<div className="name">
                            arrow-left-filling
						</div>
						<div className="code-name">.icon-arrow-left-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-right-filling"></Icon>
						<div className="name">
                            arrow-right-filling
						</div>
						<div className="code-name">.icon-arrow-right-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="caps-unlock-filling"></Icon>
						<div className="name">
                            caps-unlock-filling
						</div>
						<div className="code-name">.icon-caps-unlock-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="comment-filling"></Icon>
						<div className="name">
                            comment-filling
						</div>
						<div className="code-name">.icon-comment-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="check-item-filling"></Icon>
						<div className="name">
                            check-item-filling
						</div>
						<div className="code-name">.icon-check-item-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="clock-filling"></Icon>
						<div className="name">
                            clock-filling
						</div>
						<div className="code-name">.icon-clock-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="delete-filling"></Icon>
						<div className="name">
                            delete-filling
						</div>
						<div className="code-name">.icon-delete-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="decline-filling"></Icon>
						<div className="name">
                            decline-filling
						</div>
						<div className="code-name">.icon-decline-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="dynamic-filling"></Icon>
						<div className="name">
                            dynamic-filling
						</div>
						<div className="code-name">.icon-dynamic-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="intermediate-filling"></Icon>
						<div className="name">
                            intermediate-filling
						</div>
						<div className="code-name">.icon-intermediate-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="favorite-filling"></Icon>
						<div className="name">
                            favorite-filling
						</div>
						<div className="code-name">.icon-favorite-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="layout-filling"></Icon>
						<div className="name">
                            layout-filling
						</div>
						<div className="code-name">.icon-layout-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="help-filling"></Icon>
						<div className="name">
                            help-filling
						</div>
						<div className="code-name">.icon-help-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="history-filling"></Icon>
						<div className="name">
                            history-filling
						</div>
						<div className="code-name">.icon-history-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="filter-filling"></Icon>
						<div className="name">
                            filter-filling
						</div>
						<div className="code-name">.icon-filter-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="file-common-filling"></Icon>
						<div className="name">
                            file-common-filling
						</div>
						<div className="code-name">.icon-file-common-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="news-filling"></Icon>
						<div className="name">
                            news-filling
						</div>
						<div className="code-name">.icon-news-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="edit-filling"></Icon>
						<div className="name">
                            edit-filling
						</div>
						<div className="code-name">.icon-edit-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="fullscreen-expand-filling"></Icon>
						<div className="name">
                            fullscreen-expand-filling
						</div>
						<div className="code-name">.icon-fullscreen-expand-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="smile-filling"></Icon>
						<div className="name">
                            smile-filling
						</div>
						<div className="code-name">.icon-smile-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="rise-filling"></Icon>
						<div className="name">
                            rise-filling
						</div>
						<div className="code-name">.icon-rise-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="picture-filling"></Icon>
						<div className="name">
                            picture-filling
						</div>
						<div className="code-name">.icon-picture-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="notification-filling"></Icon>
						<div className="name">
                            notification-filling
						</div>
						<div className="code-name">.icon-notification-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="user-filling"></Icon>
						<div className="name">
                            user-filling
						</div>
						<div className="code-name">.icon-user-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="setting-filling"></Icon>
						<div className="name">
                            setting-filling
						</div>
						<div className="code-name">.icon-setting-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="switch-filling"></Icon>
						<div className="name">
                            switch-filling
						</div>
						<div className="code-name">.icon-switch-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="work-filling"></Icon>
						<div className="name">
                            work-filling
						</div>
						<div className="code-name">.icon-work-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="task-filling"></Icon>
						<div className="name">
                            task-filling
						</div>
						<div className="code-name">.icon-task-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="success-filling"></Icon>
						<div className="name">
                            success-filling
						</div>
						<div className="code-name">.icon-success-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="warning-filling"></Icon>
						<div className="name">
                            warning-filling
						</div>
						<div className="code-name">.icon-warning-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="folder-filling"></Icon>
						<div className="name">
                            folder-filling
						</div>
						<div className="code-name">.icon-folder-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="map-filling"></Icon>
						<div className="name">
                            map-filling
						</div>
						<div className="code-name">.icon-map-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="prompt-filling"></Icon>
						<div className="name">
                            prompt-filling
						</div>
						<div className="code-name">.icon-prompt-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="meh-filling"></Icon>
						<div className="name">
                            meh-filling
						</div>
						<div className="code-name">.icon-meh-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="cry-filling"></Icon>
						<div className="name">
                            cry-filling
						</div>
						<div className="code-name">.icon-cry-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="top-filling"></Icon>
						<div className="name">
                            top-filling
						</div>
						<div className="code-name">.icon-top-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="home-filling"></Icon>
						<div className="name">
                            home-filling
						</div>
						<div className="code-name">.icon-home-filling
						</div>
					</li>

					<li className="dib">
						<Icon name="sorting"></Icon>
						<div className="name">
                            sorting
						</div>
						<div className="code-name">.icon-sorting
						</div>
					</li>

					<li className="dib">
						<Icon name="3column"></Icon>
						<div className="name">
                            column-3
						</div>
						<div className="code-name">.icon-3column
						</div>
					</li>

					<li className="dib">
						<Icon name="column-4"></Icon>
						<div className="name">
                            column-4
						</div>
						<div className="code-name">.icon-column-4
						</div>
					</li>

					<li className="dib">
						<Icon name="add"></Icon>
						<div className="name">
                            add
						</div>
						<div className="code-name">.icon-add
						</div>
					</li>

					<li className="dib">
						<Icon name="add-circle"></Icon>
						<div className="name">
                            add-circle
						</div>
						<div className="code-name">.icon-add-circle
						</div>
					</li>

					<li className="dib">
						<Icon name="adjust"></Icon>
						<div className="name">
                            adjust
						</div>
						<div className="code-name">.icon-adjust
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-up-circle"></Icon>
						<div className="name">
                            arrow-up-circle
						</div>
						<div className="code-name">.icon-arrow-up-circle
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-right-circle"></Icon>
						<div className="name">
                            arrow-right-circle
						</div>
						<div className="code-name">.icon-arrow-right-circle
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-down"></Icon>
						<div className="name">
                            arrow-down
						</div>
						<div className="code-name">.icon-arrow-down
						</div>
					</li>

					<li className="dib">
						<Icon name="ashbin"></Icon>
						<div className="name">
                            ashbin
						</div>
						<div className="code-name">.icon-ashbin
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-right"></Icon>
						<div className="name">
                            arrow-right
						</div>
						<div className="code-name">.icon-arrow-right
						</div>
					</li>

					<li className="dib">
						<Icon name="browse"></Icon>
						<div className="name">
                            browse
						</div>
						<div className="code-name">.icon-browse
						</div>
					</li>

					<li className="dib">
						<Icon name="bottom"></Icon>
						<div className="name">
                            bottom
						</div>
						<div className="code-name">.icon-bottom
						</div>
					</li>

					<li className="dib">
						<Icon name="back"></Icon>
						<div className="name">
                            back
						</div>
						<div className="code-name">.icon-back
						</div>
					</li>

					<li className="dib">
						<Icon name="bad"></Icon>
						<div className="name">
                            bad
						</div>
						<div className="code-name">.icon-bad
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-double-left"></Icon>
						<div className="name">
                            arrow-double-left
						</div>
						<div className="code-name">.icon-arrow-double-left
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-left-circle"></Icon>
						<div className="name">
                            arrow-left-circle
						</div>
						<div className="code-name">.icon-arrow-left-circle
						</div>
					</li>

					<li className="dib">
						<Icon name="arrow-double-right"></Icon>
						<div className="name">
                            arrow-double-right
						</div>
						<div className="code-name">.icon-arrow-double-right
						</div>
					</li>

					<li className="dib">
						<Icon name="caps-lock"></Icon>
						<div className="name">
                            caps-lock
						</div>
						<div className="code-name">.icon-caps-lock
						</div>
					</li>

					<li className="dib">
						<Icon name="camera"></Icon>
						<div className="name">
                            camera
						</div>
						<div className="code-name">.icon-camera
						</div>
					</li>

					<li className="dib">
						<Icon name="chart-bar"></Icon>
						<div className="name">
                            chart-bar
						</div>
						<div className="code-name">.icon-chart-bar
						</div>
					</li>

					<li className="dib">
						<Icon name="attachment"></Icon>
						<div className="name">
                            attachment
						</div>
						<div className="code-name">.icon-attachment
						</div>
					</li>

					<li className="dib">
						<Icon name="code"></Icon>
						<div className="name">
                            code
						</div>
						<div className="code-name">.icon-code
						</div>
					</li>

					<li className="dib">
						<Icon name="close"></Icon>
						<div className="name">
                            close
						</div>
						<div className="code-name">.icon-close
						</div>
					</li>

					<li className="dib">
						<Icon name="check-item"></Icon>
						<div className="name">
                            check-item
						</div>
						<div className="code-name">.icon-check-item
						</div>
					</li>

					<li className="dib">
						<Icon name="calendar"></Icon>
						<div className="name">
                            calendar
						</div>
						<div className="code-name">.icon-calendar
						</div>
					</li>

					<li className="dib">
						<Icon name="comment"></Icon>
						<div className="name">
                            comment
						</div>
						<div className="code-name">.icon-comment
						</div>
					</li>

					<li className="dib">
						<Icon name="column-vertical"></Icon>
						<div className="name">
                            column-vertical
						</div>
						<div className="code-name">.icon-column-vertical
						</div>
					</li>

					<li className="dib">
						<Icon name="column-horizontal"></Icon>
						<div className="name">
                            column-horizontal
						</div>
						<div className="code-name">.icon-column-horizontal
						</div>
					</li>

					<li className="dib">
						<Icon name="complete"></Icon>
						<div className="name">
                            complete
						</div>
						<div className="code-name">.icon-complete
						</div>
					</li>

					<li className="dib">
						<Icon name="chart-pie"></Icon>
						<div className="name">
                            chart-pie
						</div>
						<div className="code-name">.icon-chart-pie
						</div>
					</li>

					<li className="dib">
						<Icon name="cry"></Icon>
						<div className="name">
                            cry
						</div>
						<div className="code-name">.icon-cry
						</div>
					</li>

					<li className="dib">
						<Icon name="customer-service"></Icon>
						<div className="name">
                            customer-service
						</div>
						<div className="code-name">.icon-customer-service
						</div>
					</li>

					<li className="dib">
						<Icon name="delete"></Icon>
						<div className="name">
                            delete
						</div>
						<div className="code-name">.icon-delete
						</div>
					</li>

					<li className="dib">
						<Icon name="direction-down"></Icon>
						<div className="name">
                            direction-down
						</div>
						<div className="code-name">.icon-direction-down
						</div>
					</li>

					<li className="dib">
						<Icon name="copy"></Icon>
						<div className="name">
                            copy
						</div>
						<div className="code-name">.icon-copy
						</div>
					</li>

					<li className="dib">
						<Icon name="cut"></Icon>
						<div className="name">
                            cut
						</div>
						<div className="code-name">.icon-cut
						</div>
					</li>

					<li className="dib">
						<Icon name="data-view"></Icon>
						<div className="name">
                            data-view
						</div>
						<div className="code-name">.icon-data-view
						</div>
					</li>

					<li className="dib">
						<Icon name="direction-down-circle"></Icon>
						<div className="name">
                            direction-down-circle
						</div>
						<div className="code-name">.icon-direction-down-circle
						</div>
					</li>

					<li className="dib">
						<Icon name="direction-right"></Icon>
						<div className="name">
                            direction-right
						</div>
						<div className="code-name">.icon-direction-right
						</div>
					</li>

					<li className="dib">
						<Icon name="direction-up"></Icon>
						<div className="name">
                            direction-up
						</div>
						<div className="code-name">.icon-direction-up
						</div>
					</li>

					<li className="dib">
						<Icon name="discount"></Icon>
						<div className="name">
                            discount
						</div>
						<div className="code-name">.icon-discount
						</div>
					</li>

					<li className="dib">
						<Icon name="direction-left"></Icon>
						<div className="name">
                            direction-left
						</div>
						<div className="code-name">.icon-direction-left
						</div>
					</li>

					<li className="dib">
						<Icon name="download"></Icon>
						<div className="name">
                            download
						</div>
						<div className="code-name">.icon-download
						</div>
					</li>

					<li className="dib">
						<Icon name="electronics"></Icon>
						<div className="name">
                            electronics
						</div>
						<div className="code-name">.icon-electronics
						</div>
					</li>

					<li className="dib">
						<Icon name="drag"></Icon>
						<div className="name">
                            drag
						</div>
						<div className="code-name">.icon-drag
						</div>
					</li>

					<li className="dib">
						<Icon name="elipsis"></Icon>
						<div className="name">
                            elipsis
						</div>
						<div className="code-name">.icon-elipsis
						</div>
					</li>

					<li className="dib">
						<Icon name="export"></Icon>
						<div className="name">
                            export
						</div>
						<div className="code-name">.icon-export
						</div>
					</li>

					<li className="dib">
						<Icon name="explain"></Icon>
						<div className="name">
                            explain
						</div>
						<div className="code-name">.icon-explain
						</div>
					</li>

					<li className="dib">
						<Icon name="edit"></Icon>
						<div className="name">
                            edit
						</div>
						<div className="code-name">.icon-edit
						</div>
					</li>

					<li className="dib">
						<Icon name="eye-close"></Icon>
						<div className="name">
                            eye-close
						</div>
						<div className="code-name">.icon-eye-close
						</div>
					</li>

					<li className="dib">
						<Icon name="email"></Icon>
						<div className="name">
                            email
						</div>
						<div className="code-name">.icon-email
						</div>
					</li>

					<li className="dib">
						<Icon name="error"></Icon>
						<div className="name">
                            error
						</div>
						<div className="code-name">.icon-error
						</div>
					</li>

					<li className="dib">
						<Icon name="favorite"></Icon>
						<div className="name">
                            favorite
						</div>
						<div className="code-name">.icon-favorite
						</div>
					</li>

					<li className="dib">
						<Icon name="file-common"></Icon>
						<div className="name">
                            file-common
						</div>
						<div className="code-name">.icon-file-common
						</div>
					</li>

					<li className="dib">
						<Icon name="file-delete"></Icon>
						<div className="name">
                            file-delete
						</div>
						<div className="code-name">.icon-file-delete
						</div>
					</li>

					<li className="dib">
						<Icon name="file-add"></Icon>
						<div className="name">
                            file-add
						</div>
						<div className="code-name">.icon-file-add
						</div>
					</li>

					<li className="dib">
						<Icon name="film"></Icon>
						<div className="name">
                            film
						</div>
						<div className="code-name">.icon-film
						</div>
					</li>

					<li className="dib">
						<Icon name="fabulous"></Icon>
						<div className="name">
                            fabulous
						</div>
						<div className="code-name">.icon-fabulous
						</div>
					</li>

					<li className="dib">
						<Icon name="file"></Icon>
						<div className="name">
                            file
						</div>
						<div className="code-name">.icon-file
						</div>
					</li>

					<li className="dib">
						<Icon name="folder-close"></Icon>
						<div className="name">
                            folder-close
						</div>
						<div className="code-name">.icon-folder-close
						</div>
					</li>

					<li className="dib">
						<Icon name="filter"></Icon>
						<div className="name">
                            filter
						</div>
						<div className="code-name">.icon-filter
						</div>
					</li>

					<li className="dib">
						<Icon name="good"></Icon>
						<div className="name">
                            good
						</div>
						<div className="code-name">.icon-good
						</div>
					</li>

					<li className="dib">
						<Icon name="hide"></Icon>
						<div className="name">
                            hide
						</div>
						<div className="code-name">.icon-hide
						</div>
					</li>

					<li className="dib">
						<Icon name="home"></Icon>
						<div className="name">
                            home
						</div>
						<div className="code-name">.icon-home
						</div>
					</li>

					<li className="dib">
						<Icon name="history"></Icon>
						<div className="name">
                            history
						</div>
						<div className="code-name">.icon-history
						</div>
					</li>

					<li className="dib">
						<Icon name="file-open"></Icon>
						<div className="name">
                            file-open
						</div>
						<div className="code-name">.icon-file-open
						</div>
					</li>

					<li className="dib">
						<Icon name="forward"></Icon>
						<div className="name">
                            forward
						</div>
						<div className="code-name">.icon-forward
						</div>
					</li>

					<li className="dib">
						<Icon name="import"></Icon>
						<div className="name">
                            import
						</div>
						<div className="code-name">.icon-import
						</div>
					</li>

					<li className="dib">
						<Icon name="image-text"></Icon>
						<div className="name">
                            image-text
						</div>
						<div className="code-name">.icon-image-text
						</div>
					</li>

					<li className="dib">
						<Icon name="keyboard-26"></Icon>
						<div className="name">
                            keyboard-26
						</div>
						<div className="code-name">.icon-keyboard-26
						</div>
					</li>

					<li className="dib">
						<Icon name="keyboard-9"></Icon>
						<div className="name">
                            keyboard-9
						</div>
						<div className="code-name">.icon-keyboard-9
						</div>
					</li>

					<li className="dib">
						<Icon name="link"></Icon>
						<div className="name">
                            link
						</div>
						<div className="code-name">.icon-link
						</div>
					</li>

					<li className="dib">
						<Icon name="layout"></Icon>
						<div className="name">
                            layout
						</div>
						<div className="code-name">.icon-layout
						</div>
					</li>

					<li className="dib">
						<Icon name="fullscreen-shrink"></Icon>
						<div className="name">
                            fullscreen-shrink
						</div>
						<div className="code-name">.icon-fullscreen-shrink
						</div>
					</li>

					<li className="dib">
						<Icon name="layers"></Icon>
						<div className="name">
                            layers
						</div>
						<div className="code-name">.icon-layers
						</div>
					</li>

					<li className="dib">
						<Icon name="lock"></Icon>
						<div className="name">
                            lock
						</div>
						<div className="code-name">.icon-lock
						</div>
					</li>

					<li className="dib">
						<Icon name="fullscreen-expand"></Icon>
						<div className="name">
                            fullscreen-expand
						</div>
						<div className="code-name">.icon-fullscreen-expand
						</div>
					</li>

					<li className="dib">
						<Icon name="map"></Icon>
						<div className="name">
                            map
						</div>
						<div className="code-name">.icon-map
						</div>
					</li>

					<li className="dib">
						<Icon name="meh"></Icon>
						<div className="name">
                            meh
						</div>
						<div className="code-name">.icon-meh
						</div>
					</li>

					<li className="dib">
						<Icon name="menu"></Icon>
						<div className="name">
                            menu
						</div>
						<div className="code-name">.icon-menu
						</div>
					</li>

					<li className="dib">
						<Icon name="loading"></Icon>
						<div className="name">
                            loading
						</div>
						<div className="code-name">.icon-loading
						</div>
					</li>

					<li className="dib">
						<Icon name="help"></Icon>
						<div className="name">
                            help
						</div>
						<div className="code-name">.icon-help
						</div>
					</li>

					<li className="dib">
						<Icon name="minus-circle"></Icon>
						<div className="name">
                            minus-circle
						</div>
						<div className="code-name">.icon-minus-circle
						</div>
					</li>

					<li className="dib">
						<Icon name="modular"></Icon>
						<div className="name">
                            modular
						</div>
						<div className="code-name">.icon-modular
						</div>
					</li>

					<li className="dib">
						<Icon name="notification"></Icon>
						<div className="name">
                            notification
						</div>
						<div className="code-name">.icon-notification
						</div>
					</li>

					<li className="dib">
						<Icon name="mic"></Icon>
						<div className="name">
                            mic
						</div>
						<div className="code-name">.icon-mic
						</div>
					</li>

					<li className="dib">
						<Icon name="more"></Icon>
						<div className="name">
                            more
						</div>
						<div className="code-name">.icon-more
						</div>
					</li>

					<li className="dib">
						<Icon name="pad"></Icon>
						<div className="name">
                            pad
						</div>
						<div className="code-name">.icon-pad
						</div>
					</li>

					<li className="dib">
						<Icon name="operation"></Icon>
						<div className="name">
                            operation
						</div>
						<div className="code-name">.icon-operation
						</div>
					</li>

					<li className="dib">
						<Icon name="play"></Icon>
						<div className="name">
                            play
						</div>
						<div className="code-name">.icon-play
						</div>
					</li>

					<li className="dib">
						<Icon name="print"></Icon>
						<div className="name">
                            print
						</div>
						<div className="code-name">.icon-print
						</div>
					</li>

					<li className="dib">
						<Icon name="mobile-phone"></Icon>
						<div className="name">
                            mobile-phone
						</div>
						<div className="code-name">.icon-mobile-phone
						</div>
					</li>

					<li className="dib">
						<Icon name="minus"></Icon>
						<div className="name">
                            minus
						</div>
						<div className="code-name">.icon-minus
						</div>
					</li>

					<li className="dib">
						<Icon name="navigation"></Icon>
						<div className="name">
                            navigation
						</div>
						<div className="code-name">.icon-navigation
						</div>
					</li>

					<li className="dib">
						<Icon name="pdf"></Icon>
						<div className="name">
                            pdf
						</div>
						<div className="code-name">.icon-pdf
						</div>
					</li>

					<li className="dib">
						<Icon name="prompt"></Icon>
						<div className="name">
                            prompt
						</div>
						<div className="code-name">.icon-prompt
						</div>
					</li>

					<li className="dib">
						<Icon name="move"></Icon>
						<div className="name">
                            move
						</div>
						<div className="code-name">.icon-move
						</div>
					</li>

					<li className="dib">
						<Icon name="refresh"></Icon>
						<div className="name">
                            refresh
						</div>
						<div className="code-name">.icon-refresh
						</div>
					</li>

					<li className="dib">
						<Icon name="run-up"></Icon>
						<div className="name">
                            run-up
						</div>
						<div className="code-name">.icon-run-up
						</div>
					</li>

					<li className="dib">
						<Icon name="picture"></Icon>
						<div className="name">
                            picture
						</div>
						<div className="code-name">.icon-picture
						</div>
					</li>

					<li className="dib">
						<Icon name="run-in"></Icon>
						<div className="name">
                            run-in
						</div>
						<div className="code-name">.icon-run-in
						</div>
					</li>

					<li className="dib">
						<Icon name="pin"></Icon>
						<div className="name">
                            pin
						</div>
						<div className="code-name">.icon-pin
						</div>
					</li>

					<li className="dib">
						<Icon name="save"></Icon>
						<div className="name">
                            save
						</div>
						<div className="code-name">.icon-save
						</div>
					</li>

					<li className="dib">
						<Icon name="search"></Icon>
						<div className="name">
                            search
						</div>
						<div className="code-name">.icon-search
						</div>
					</li>

					<li className="dib">
						<Icon name="share"></Icon>
						<div className="name">
                            share
						</div>
						<div className="code-name">.icon-share
						</div>
					</li>

					<li className="dib">
						<Icon name="scanning"></Icon>
						<div className="name">
                            scanning
						</div>
						<div className="code-name">.icon-scanning
						</div>
					</li>

					<li className="dib">
						<Icon name="security"></Icon>
						<div className="name">
                            security
						</div>
						<div className="code-name">.icon-security
						</div>
					</li>

					<li className="dib">
						<Icon name="sign-out"></Icon>
						<div className="name">
                            sign-out
						</div>
						<div className="code-name">.icon-sign-out
						</div>
					</li>

					<li className="dib">
						<Icon name="select"></Icon>
						<div className="name">
                            select
						</div>
						<div className="code-name">.icon-select
						</div>
					</li>

					<li className="dib">
						<Icon name="stop"></Icon>
						<div className="name">
                            stop
						</div>
						<div className="code-name">.icon-stop
						</div>
					</li>

					<li className="dib">
						<Icon name="success"></Icon>
						<div className="name">
                            success
						</div>
						<div className="code-name">.icon-success
						</div>
					</li>

					<li className="dib">
						<Icon name="smile"></Icon>
						<div className="name">
                            smile
						</div>
						<div className="code-name">.icon-smile
						</div>
					</li>

					<li className="dib">
						<Icon name="switch"></Icon>
						<div className="name">
                            switch
						</div>
						<div className="code-name">.icon-switch
						</div>
					</li>

					<li className="dib">
						<Icon name="setting"></Icon>
						<div className="name">
                            setting
						</div>
						<div className="code-name">.icon-setting
						</div>
					</li>

					<li className="dib">
						<Icon name="survey"></Icon>
						<div className="name">
                            survey
						</div>
						<div className="code-name">.icon-survey
						</div>
					</li>

					<li className="dib">
						<Icon name="task"></Icon>
						<div className="name">
                            task
						</div>
						<div className="code-name">.icon-task
						</div>
					</li>

					<li className="dib">
						<Icon name="skip"></Icon>
						<div className="name">
                            skip
						</div>
						<div className="code-name">.icon-skip
						</div>
					</li>

					<li className="dib">
						<Icon name="text"></Icon>
						<div className="name">
                            text
						</div>
						<div className="code-name">.icon-text
						</div>
					</li>

					<li className="dib">
						<Icon name="time"></Icon>
						<div className="name">
                            time
						</div>
						<div className="code-name">.icon-time
						</div>
					</li>

					<li className="dib">
						<Icon name="telephone-out"></Icon>
						<div className="name">
                            telephone-out
						</div>
						<div className="code-name">.icon-telephone-out
						</div>
					</li>

					<li className="dib">
						<Icon name="toggle-left"></Icon>
						<div className="name">
                            toggle-left
						</div>
						<div className="code-name">.icon-toggle-left
						</div>
					</li>

					<li className="dib">
						<Icon name="toggle-right"></Icon>
						<div className="name">
                            toggle-right
						</div>
						<div className="code-name">.icon-toggle-right
						</div>
					</li>

					<li className="dib">
						<Icon name="telephone"></Icon>
						<div className="name">
                            telephone
						</div>
						<div className="code-name">.icon-telephone
						</div>
					</li>

					<li className="dib">
						<Icon name="top"></Icon>
						<div className="name">
                            top
						</div>
						<div className="code-name">.icon-top
						</div>
					</li>
				</ul>
			</div>
		</StyleWrapper>
	);
};

export default NameDemo;
