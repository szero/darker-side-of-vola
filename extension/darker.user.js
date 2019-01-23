// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      2.5.7
// @description  More contrasty volafile experience.
// @author       Your mom
// @match        https://*.volafile.org/*
// @grant        none
// @updateURL    https://github.com/szero/darker-side-of-vola/raw/master/extension/darker.meta.js
// @downloadURL  https://github.com/szero/darker-side-of-vola/raw/master/extension/darker.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==

/* eslint strict: ["error", "global"] */

"use strict";

(function () {
  // eslint-disable-next-line no-undef
  const css = [
    ":root { ",
    "    --main-color: #008D8D; ",
    "    --background-color: #000000; ",
    "    --text-color: #FFFFFF; ",
    "    --visited: #8C8C8C; ",
    "    --chat-file-hilight: rgba(0,128,128,0.18); ",
    "    --upload-hilight: rgba(0,128,128,0.2); ",
    "    --whitenames: #A9BDD0; ",
    "    --namefags: #00FF00; ",
    "    --donators: #90EE90; ",
    "    --trusted-users: #FFFF00; ",
    "    --mods: #FF6C00; ",
    "    --system: #D808D8; ",
    "    --font: \"Open Sans\",sans-serif; ",
    "} ",
    "html, body { ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "} ",
    "/* Main Page */ ",
    ".chat_room_url { ",
    "    background-color: var(--chat-file-hilight) !important; ",
    "} ",
    ".chat_room::after { ",
    "    background-color: rgba(0,0,0,0) !important; ",
    "} ",
    ".chat_room::before { ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".chat_room:active::before, .chat_room:hover::before { ",
    "    color: var(--text-color) !important; ",
    "} ",
    ".room_svg, .room_area, .room_title, .room_chat, .room_files, .backgroundCloud { ",
    "    fill: var(--background-color) !important; ",
    "} ",
    ".room_title_area, .room_chat_area, .room_files_area, rect.file { ",
    "    fill: var(--main-color) !important; ",
    "} ",
    "#radio_load_progress, #radio_progress , #bottom_navigation_content, #loading_frame { ",
    "    background-color: var(--background-color); ",
    "} ",
    "#loading_text, #chat_connection { ",
    "    color: var(--text-color) !important; ",
    "} ",
    "/* Redirect button color */ ",
    "#radio_play_progress, .page_hotlink .download-filename { ",
    "    background-color: var(--main-color); ",
    "} ",
    "/* old file links hover, thanks Dodos!*/ ",
    ".file_left_part { ",
    "    pointer-events: none; ",
    "} ",
    "div.filelist_file > a > span { ",
    "    pointer-events: auto !important; ",
    "} ",
    "#radio_volume_bar { ",
    "    background-color: var(--background-color); ",
    "    border: 1px solid var(--main-color); ",
    "} ",
    "#radio_volume_slider { ",
    "    height: 0.95em !important; ",
    "    background-color: var(--main-color) !important; ",
    "} ",
    "#radio_volume_wrapper { ",
    "    display:inline-block; ",
    "} ",
    ".chat_message.message_self, .chat_message.message_self.highlight { ",
    "    font-style: italic; ",
    "} ",
    ".scroller-slider { ",
    "    background: var(--main-color); ",
    "    border-radius: 0; ",
    "} ",
    ".scroller-pane { ",
    "    opacity: 0; ",
    "} ",
    "#files_scroller, #room_search { ",
    "    background: var(--background-color) !important; ",
    "} ",
    "#top_navigation { ",
    "    font-size: 16px; ",
    "    background: var(--background-color); ",
    "    border-bottom-style: solid!important; ",
    "    border-bottom-color: var(--background-color); ",
    "    border-bottom-width: 2px!important; ",
    "} ",
    ".top_nav_item:hover { ",
    "    background-color: var(--background-color)!important; ",
    "    color: var(--main-color); ",
    "} ",
    ".top_nav_item, #top_navigation_contents, .top_nav_item[href=\"/donate\"] { ",
    "    border-color: var(--background-color); ",
    "} ",
    "#chat_messages_frame:before { ",
    "    border-left: none !important; ",
    "    background: var(--background-color); ",
    "} ",
    "#overlay { ",
    "    background-color: #121212 !important; ",
    "} ",
    "#room_name, #room_name_container { ",
    "    text-align: center; ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "} ",
    ".file_queued { ",
    "    background-color: var(--upload-hilight) !important; ",
    "} ",
    ".chat_message { ",
    "    margin-left: 0 !important; ",
    "    padding: 0px 1em 0px 0.5em !important; ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "    border-left-style: solid; ",
    "    border-left-width: 0px !important; ",
    "    border-color: var(--background-color); ",
    "} ",
    ".chat_status_text, .chat_status_group { ",
    "    line-height: 1.6em !important; ",
    "} ",
    "#room_name_container { ",
    "    border-right: 1px solid var(--main-color) !important; ",
    "    right: 1px !important; ",
    "} ",
    "#chat_frame, #files_frame { ",
    "    z-index: 1 !important; ",
    "    border-color: var(--main-color); ",
    "    border-top: 1px solid var(--main-color); ",
    "} ",
    ".toggle_text.on_big_header { ",
    "    display: none !important; ",
    "} ",
    "#chat_frame { ",
    "    padding-right: 1px !important; ",
    "} ",
    ".volafile_icon_svg .v_stroke, .drag_here_svg .drag_here_rect { ",
    "    stroke: var(--main-color) !important; ",
    "} ",
    "#chat_header, #chat_frame:after, #home_button { ",
    "    border-right: 1px solid var(--main-color) !important; ",
    "} ",
    ".chat_message > .username { ",
    "    font-family: inherit !important; ",
    "    font-weight: 400 !important; ",
    "    color: var(--whitenames); ",
    "} ",
    ".chat_message.user .username { ",
    "    color: var(--namefags) !important; ",
    "} ",
    ".chat_message.donator .username { ",
    "    color: var(--donators) !important; ",
    "} ",
    ".chat_message.staff .username { ",
    "    color: var(--trusted-users) !important; ",
    "} ",
    ".chat_message.staff:not(.user) .username, ",
    ".chat_message.admin:not(.staff):not(.user) .username { ",
    "    color: var(--system) !important; ",
    "} ",
    ".chat_message.admin .username { ",
    "    color: var(--mods) !important; ",
    "} ",
    ".chat_message.highlight { ",
    "    background: var(--chat-file-hilight); ",
    "    border-color: var(--background-color)!important; ",
    "    color: var(--text-color); ",
    "    border-left-style: solid!important; ",
    "} ",
    ".chat_file { ",
    "    border-radius: 1px; ",
    "    background: var(--background-color) !important;; ",
    "    color: var(--text-color) !important; ",
    "    text-align: center; ",
    "    border-style: dashed; ",
    "    border-color: var(--main-color) !important; ",
    "} ",
    ".chat_file:hover { ",
    "    background: var(--background-color) !important; ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".chat_file:visited { ",
    "    color: var(--visited)!important; ",
    "    border-color: var(--visited) !important; ",
    "} ",
    ".chat_file_play { ",
    "    float: none !important; ",
    "} ",
    ".header_row_element:hover, #call_to_action_container:before { ",
    "    background: var(--background-color) !important; ",
    "} ",
    "#call_to_action { ",
    "    color: var(--main-color) !important; ",
    "} ",
    "  /* fix call to action */ ",
    "#call_to_action_container:before { ",
    "    background-color: var(--background-color); ",
    "} ",
    "#call_to_action_container.active #call_to_action { ",
    "    color: var(--text-color); ",
    "} ",
    "#call_to_action_container.active .drag_here_rect { ",
    "    stroke: var(--main-color); ",
    "} ",
    "#files_header { ",
    "    line-height: 2.5em !important; ",
    "    background-color: var(--background-color) !important; ",
    "} ",
    "#files_header_row, .dropdown_item, #chat_hbar{ ",
    "    background-color: var(--background-color); ",
    "    color: var(--text-color)!important; ",
    "} ",
    ".dropdown_item:hover, .dopdown_item:active, .dropdown:hover, #header{ ",
    "    background: var(--background-color); ",
    "} ",
    "a.dropdown_hover.dropdown_option { ",
    "    color: var(--text-color); ",
    "} ",
    ".dropdown_option:hover, #show_search_ui:hover, #report_button:hover{ ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".dropdown:hover:after { ",
    "    border-color: var(--main-color); ",
    "    background: rgb(10,20,30); ",
    "    border-width: 1px!important; ",
    "} ",
    "textarea, input[type=\"text\"], input[type=\"password\"] { ",
    "    background: var(--background-color); ",
    "    border: 1px solid var(--main-color); ",
    "} ",
    "#chat_name, #chat_input { ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "    border-width: 0px; ",
    "} ",
    "#chat_input { ",
    "    border-top: 1px solid var(--main-color) !important; ",
    "} ",
    "#chat_name, #rename_input { ",
    "    border-right: 1px solid var(--main-color) !important; ",
    "    border-radius: 0 !important; ",
    "} ",
    "#chat_name_container { ",
    "    border-bottom: none !important; ",
    "    background-color: var(--background-color) !important; ",
    "    border-radius: 0 !important; ",
    "} ",
    "#files_header_row, #rename_container { ",
    "    background-color: var(--background-color) !important; ",
    "} ",
    ".file_name:hover { ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".file_left_part:visited, .file_name:visited{ ",
    "    color: var(--visited); ",
    "} ",
    ".file_right_part { ",
    "    line-height: 1.4em !important; ",
    "    display: flex; ",
    "} ",
    "a[rel*=\"noopener\"][rel*=\"noreferrer\"] { ",
    "    color: var(--main-color) !important; ",
    "} ",
    "a[rel*=\"noopener\"][rel*=\"noreferrer\"]:hover { ",
    "    color: var(--text-color) !important; ",
    "} ",
    "a[rel*=\"noopener\"][rel*=\"noreferrer\"]:visited { ",
    "    color: var(--visited) !important; ",
    "} ",
    "a[href^=\"/r/\"]{ ",
    "    color: var(--main-color); ",
    "} ",
    "a[href^=\"/r/\"]:visited{ ",
    "    color: var(--visited) ; ",
    "} ",
    "#search_input { ",
    "    background: var(--background-color) !important; ",
    "    border-top: none; ",
    "    border-bottom: none; ",
    "} ",
    "#toggles > .toggle:hover, #toggles > .toggle:active { ",
    "    background: none !important; ",
    "} ",
    "#toggles span.toggle_icon { ",
    "    color: var(--text-color); ",
    "} ",
    "#toggles .toggle.enabled span.toggle_icon { ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".defaultValue, .header_row_element, .header_row_element.nodecoration, ",
    "a.nodecoration.header_row_element, span.on_large_screen { ",
    "    color: var(--text-color); ",
    "} ",
    ".button:active, input[type=button]:active, input[type=submit]:active, ",
    ".button, input[type=\"submit\"], input[type=\"button\"] { ",
    "    background-color: var(--background-color) !important; ",
    "    color: var(--text-color) !important; ",
    "} ",
    ".button:hover, input[type=\"submit\"]:hover, input[type=\"button\"]:hover { ",
    "    background: var(--background-color); ",
    "    color: var(--main-color); ",
    "} ",
    "#upload_container { ",
    "    line-height: 2.5em !important; ",
    "} ",
    ".file_uploading, .file_uploading:after { ",
    "    background-color: var(--upload-hilight) !important; ",
    "    background-image: none !important; ",
    "} ",
    ".file_uploading:before { ",
    "    background-color: var(--background-color) !important; ",
    "    background-image: none !important; ",
    "} ",
    "#file_list { ",
    "    font-size: 14px; ",
    "} ",
    "#file_list.uneven .filelist_file:nth-child(2n+1) { ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "    height: 1.4em !important; ",
    "} ",
    "#file_list.even .filelist_file:nth-child(2n) { ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "    height: 1.4em !important; ",
    "} ",
    ".filelist_file { ",
    "    height: 1.4em !important; ",
    "    background: var(--background-color); ",
    "    color: var(--text-color); ",
    "} ",
    ".filelist_resize_bar { ",
    "    z-index: 1 !important; ",
    "    margin: -2px !important; ",
    "} ",
    ".filelist_resize_bar.resizing { ",
    "    background-color: #FFFFFF !important; ",
    "} ",
    ".file_icon.filetype.music_playing { ",
    "    color: var(--text-color)!important; ",
    "} ",
    "#gallery_title { ",
    "    color: var(--text-color); ",
    "} ",
    ".gallery_button { ",
    "    border-radius: 15px; ",
    "    border-style: none; ",
    "    color: var(--text-color); ",
    "    background-color: rgba(0,0,0,0.7) !important; ",
    "} ",
    ".gallery_button:hover { ",
    "    background-color: rgba(0,0,0,0.7) !important; ",
    "    color: var(--main-color); ",
    "} ",
    ".ui_frame_table td { ",
    "  border-color: rgba(0,0,0,0) !important; ",
    "} ",
    ".ui_frame { ",
    "    color: var(--text-color) !important; ",
    "    background: var(--background-color); ",
    "    border-radius: 0px !important; ",
    "    border: 1px solid var(--main-color) !important; ",
    "} ",
    ".ui_frame_contextmenu { ",
    "    border: none !important; ",
    "} ",
    ".ui_frame_contextmenu_button_icon { ",
    "    display: none !important; ",
    "} ",
    ".ui_frame_contextmenu_button { ",
    "    padding-left: .5em !important; ",
    "    padding-right: .5em !important; ",
    "} ",
    ".ui_frame_table_centered, ",
    ".ui_frame_table_centered>tr>td>input, ",
    ".ui_frame_table_centered>tr>td>textarea { ",
    "    width: 95%; ",
    "} ",
    ".file_control_icon.clickable { ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".clickable:active, .clickable:hover{ ",
    "    color: var(--text-color) !important; ",
    "} ",
    ".file_tag.tag_key_user { ",
    "    background-color: rgba(0,0,0,0) !important; ",
    "    color: var(--main-color); ",
    "    border-radius: 1px; ",
    "    border-width: 0px 0px 0px 0px !important; ",
    "} ",
    ".file_tag:hover { ",
    "    color: var(--text-color); ",
    "} ",
    ".file_tag { ",
    "    background: rgba(0,0,0,0) !important; ",
    "    border-radius: 0px; ",
    "    color: var(--main-color); ",
    "    border-style: dashed; ",
    "    border-width: 0px 0px 0px 1px; ",
    "    padding-left: 5px; ",
    "} ",
    ".file_button { ",
    "    color: var(--text-color) !important; ",
    "    background-color: rgba(0,0,0,0) !important; ",
    "    line-height: 1.4em !important; ",
    "} ",
    ".file_button:hover { ",
    "    color: var(--main-color) !important; ",
    "    background-color: rgba(0,0,0,0) !important; ",
    "} ",
    "#main_logo { ",
    "    color: var(--main-color); ",
    "} ",
    "#main_logo_suffix { ",
    "    color: var(--text-color); ",
    "} ",
    "table, hr, .ui_frame_contextmenu_table td { ",
    "    border: 1px solid var(--main-color); ",
    "} ",
    "table th { ",
    "    background: var(--background-color); ",
    "    border-color: var(--main-color); ",
    "} ",
    "table td { ",
    "    border-color: var(--main-color); ",
    "} ",
    ".formtable td { ",
    "    padding: 0.5em !important; ",
    "} ",
    ".header_row_element, .ui_frame_table { ",
    "    border: none !important; ",
    "} ",
    "#radio_container { ",
    "    background: var(--background-color); ",
    "    border-color: var(--main-color); ",
    "    border-width: 1px!important; ",
    "    border-top-style: dashed; ",
    "} ",
    "#radio_current_song { ",
    "    background: var(--background-color); ",
    "    border-radius: 0px!important; ",
    "} ",
    "#radio_current_time, #radio_left { ",
    "    background: var(--background-color); ",
    "    border-color: var(--background-color); ",
    "    border-left-width: 1px!important; ",
    "} ",
    ".radio_toggle:hover { ",
    "    color: var(--text-color) !important; ",
    "} ",
    ".radio_icon { ",
    "    width: 1.4em !important; ",
    "    color: var(--main-color) !important; ",
    "} ",
    ".toggle_icon { ",
    "    font-family: var(--font) !important; ",
    "    font-weight: 400; ",
    "} ",
    ".toggle[title*=\"Music\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"usic\"; ",
    "} ",
    ".toggle[title*=\"Image\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"mage\"; ",
    "} ",
    ".toggle[title*=\"Video\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"ideo\"; ",
    "} ",
    ".toggle[title*=\"Other\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"ther\"; ",
    "} ",
    ".toggle[title*=\"Archive\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"rchive\"; ",
    "} ",
    ".toggle[title*=\"Docs\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"ocs\"; ",
    "} ",
    ".toggle[title*=\"Other\"] .toggle_icon:after { ",
    "    color:var(--text-color); ",
    "    content:\"ther\"; ",
    "} ",
    "#radio_current { ",
    "    border-color: var(--background-color)!important; ",
    "    border-radius: 0px; ",
    "    background-color: rgba(0,0,0,0); ",
    "} ",
    ".ui_frame_buttons > .button, .button.light { ",
    "    background: var(--background-color)!important; ",
    "} ",
    "#rename_input, #rename_room { ",
    "    color: #FFFFFF; ",
    "} ",
    "input[type=\"text\"]::placeholder, input[type=\"password\"]::placeholder, textarea::placeholder { ",
    "    color: var(--main-color); ",
    "} ",
    ".button:hover { ",
    "    background: var(--background-color)!important; ",
    "    color: var(--main-color)!important; ",
    "} ",
    ".chat_message.message_self .username { ",
    "    font-style: italic; ",
    "} ",
    ".icon-refresh:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"CV\"; ",
    "} ",
    ".icon-picture-o:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"P\"; ",
    "} ",
    ".icon-film:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"V\"; ",
    "} ",
    ".icon-book:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"D\"; ",
    "} ",
    ".icon-music:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"M\"; ",
    "} ",
    ".icon-archive:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"A\"; ",
    "} ",
    ".icon-file:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"O\"; ",
    "} ",
    ".icon-image:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"I\"; ",
    "} ",
    ".icon-star:before { ",
    "    content: \"★\" !important; ",
    "} ",
    ".icon-king:before { ",
    "    content: \"✦\" !important; ",
    "} ",
    ".filetype_download { ",
    "    font-family: var(--font) !important; ",
    "} ",
    ".filelist_file:hover, .ui_frame_tooltip_thumb_generic_placeholder { ",
    "    border-color: var(--main-color) !important; ",
    "} ",
    ".chat_file_icon:not(.icon-play):not(.icon-stop) { ",
    "    line-height: 1.4em !important; ",
    "} ",
    ".chat_file:hover > .chat_file_icon.chat_file_icon_download::before, ",
    ".filelist_file:hover > .file_left_part > .file_control > .filetype_download::before { ",
    "    font-family: var(--font) !important; ",
    "    color: var(--text-color) !important; ",
    "    content: \"DL\" !important; ",
    "} ",
    "#radio_volume_icon { ",
    "    width: 1.5em; ",
    "} ",
    ".icon-reverse.enabled:before, .icon-random.enabled:before { ",
    "    color: var(--text-color); ",
    "} ",
    ".icon-times:before { ",
    "    content: \"Close\"; ",
    "} ",
    "#radio_container { ",
    "    background-color: var(--background-color); ",
    "    border-top-style: solid; ",
    "    border-width: 1px; ",
    "} ",
    "#clearsearch:hover { ",
    "    color: var(--main-color) !important; ",
    "} ",
    "#filter_reminder, #filter_reminder:hover { ",
    "    background: var(--background-color) !important; ",
    "    border-top: 0 !important; ",
    "    border-left: 0 !important; ",
    "} ",
    "#clearsearch.fa.icon-times.clickable.on_small_header.icon-times:before { ",
    "    Content: \"Clear\" ",
    "} ",
    ".file_icon.file_control_icon.fa.abort-upload.icon-times.clickable:before{ ",
    "    content: \"Cancel\"; ",
    "} ",
    ".file_icon.file_control_icon.fa.abort-upload.icon-times.clickable{ ",
    "    padding-right: 34px; ",
    "} ",
    ".file_icon.file_control_icon.fa.filetype.icon-cloud-upload.file_icon_pulsing:before{ ",
    "    content: \"UP\"; ",
    "} ",
    ".file_icon.file_control_icon.fa.filetype.icon-cloud-upload.file_icon_pulsing{ ",
    "    padding-right: 8px; ",
    "} ",
    "#chat_notifier{ ",
    "    font-family: var(--font) !important; ",
    "    color: var(--main-color); ",
    "    line-height: 1.3em !important; ",
    "} ",
    ".file_tag.tag_key_user:hover { ",
    "    background-color: var(--background-color); ",
    "} ",
    ".ui_frame_tooltip.has_thumb .ui_frame_content { ",
    "    border-left: solid 1px; ",
    "    border-color: var(--main-color); ",
    "} ",
    "#main_new_room_button:hover { ",
    "    background: var(--background-color)!important; ",
    "} ",
    ".ui_frame_body_bar { ",
    "    border-top: 3px solid var(--main-color); ",
    "} ",
    ".dropdown_list { ",
    "    border-color: var(--main-color) !important; ",
    "    color: var(--text-color); ",
    "} ",
    ".icon-magic, .icon-folder-open, .icon-heart, .icon-user, .icon-exit, ",
    ".icon-magic-wand, .icon-cog, .icon-report, .icon-upload-button, .icon-filter, ",
    ".icon-minus-circle, .icon-exclamation-circle,.icon-angle-right, .icon-edit, ",
    ".icon-unlock, .icon-logicon-upload, .icon-home, .icon-list, .file_clock, ",
    ".icon-anonymous, .icon-checkmark, .dropdown_icon { ",
    "    display: none !important; ",
    "} ",
    ".file_status:before , .file_buttons:before { ",
    "    border-left: 0 !important; ",
    "} ",
    "#clearsearch.icon-cross.clickable.on_small_header:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"Clear\"; ",
    "    margin-left: 0.3em !important; ",
    "} ",
    "#chat_notifier.icon-arrow-down.clickable:before { ",
    "    content: \"New Messages ↓\"; ",
    "} ",
    ".header_row_element_disabled, .header_row_element_disabled:active, .header_row_element_disabled:hover, .header_row_element_disabled:visited { ",
    "    cursor: default; ",
    "    color: var(--visited) !important; ",
    "    background-color: var(--background-color) !important; ",
    "} ",
    ".icon-angle-double-right:before { ",
    "    content: \">\"; ",
    "} ",
    ".icon-angle-double-left:before { ",
    "    content: \"<\"; ",
    "} ",
    ".icon-uploading:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"UP\"; ",
    "} ",
    ".icon-download:before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"DL\"; ",
    "} ",
    ".loading_indicator > .outer_indicator > .inner_indicator, .url_bar_icon { ",
    "    background-color: var(--main-color) !important; ",
    "} ",
    "#chat_hbar_container { ",
    "    padding-top: 0 !important; ",
    "    border-top: 1px solid var(--main-color) !important; ",
    "    border-left: none !important; ",
    "    box-shadow: none !important; ",
    "} ",
    ".icon-group::before { ",
    "    font-family: var(--font) !important; ",
    "    content: \"Users Online\" !important; ",
    "} ",
    "#chat_hbar { ",
    "    border-left: none !important; ",
    "} ",
    "#file_notifier, #filter_reminder { ",
    "    background-color: var(--background-color); ",
    "    border: none; ",
    "    border-bottom: 1px solid var(--main-color) !important; ",
    "} ",
    "#chat_input_container { ",
    "    border-left: none !important; ",
    "} ",
    "select, .file_selected { ",
    "    background-color: var(--chat-file-hilight) !important; ",
    "} ",
    "#file_notifier:hover, #filter_reminder:hover { ",
    "    background-color: var(--background-color); ",
    "} ",
    "button, input, optgroup, select { ",
    "    border: 1px solid var(--main-color); ",
    "} ",
    "/*mod stuff*/ ",
    "#admin_button { ",
    "    border-left: 1px solid var(--main-color) !important; ",
    "} ",
    ".main.table { ",
    "    margin-bottom: 1.6em; ",
    "} ",
    ".chat_status_icon.icon-group + a:hover { ",
    "    color: var(--main-color); ",
    "} ",
    "input[type=\"radio\"]:disabled + span._icon::before, ",
    "input[type=\"checkbox\"]:disabled + span._icon::before, ",
    "textarea[disabled], select[disabled], ",
    "input[type=\"text\"][disabled], input[type=\"password\"][disabled] { ",
    "    color: var(--visited) !important; ",
    "} ",
    "/*fixed modlog, thanks again, RealDodos!*/ ",
    ".page_admin_reports table, .page_admin_modlog table { ",
    "    table-layout: fixed; ",
    "    width: 100%; ",
    "} ",
    ".page_admin_modlog table th:nth-child(1) { ",
    "    max-width: 15%; ",
    "} ",
    ".page_admin_modlog table th:nth-child(3) { ",
    "    width: 56%; ",
    "} ",
    ".page_admin_modlog table th:nth-child(4) { ",
    "    width: 7ex; ",
    "} ",
    ".page_admin_reports table th:nth-child(1) { ",
    "    max-width: 9%; ",
    "} ",
    ".page_admin_reports table th:nth-child(4) { ",
    "    width: 10%; ",
    "} ",
    ".page_admin_reports table th:nth-child(3) { ",
    "    width: 53%; ",
    "} ",
    ".ui_frame_disabled { ",
    "    color: var(--visited); ",
    "    background: var(--background-color); ",
    "    border-color: var(--visited) !important; ",
    "} ",
    ".ui_frame_disabled .ui_frame_body_bar { ",
    "    border-top-color: var(--visited) !important; ",
    "} ",
    ".ui_frame_disabled .ui_frame_table td { ",
    "    border-color: rgba(0,0,0,0) !important; ",
    "} ",
    "/* fix for volanail */ ",
    "#volanail-list .volanail-thumb { ",
    "    background: var(--chat-file-hilight) !important; ",
    "    border: 2px solid rgba(0,0,0,0) !important; ",
    "} ",
    "#volanail-list .volanail-video { ",
    "    background: var(--chat-file-hilight) !important; ",
    "} ",
    ".volanail-button[active] { ",
    "    box-shadow: none !important; ",
    "    color: var(--main-color) !important; ",
    "} ",
    "#volanail-list .volanail-checked { ",
    "    border: 2px solid var(--text-color) !important; ",
    "} ",
    ".volanail-media > span { ",
    "    position: relative; ",
    "    bottom: 0.18em; ",
    "} "
  ].join("\n");
  const re = /volafile\.(?:org|io)\/r/;
  const node = document.createElement("style");
  node.type = "text/css";
  node.appendChild(document.createTextNode(css));
  const heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    document.documentElement.appendChild(node);
  }
  if (window.location.href.match(re)) {
    const shadeColor = (color, percent) => {
       const f=parseInt(color.replace(/ /g,'').slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
       return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }
    // const $ = (sel) => document.getElementById(sel).style;
    const $$ = (sel, prop, new_val) => {
      const elements = document.getElementsByClassName(sel);
      [...elements].forEach((el) => {
        el.style.setProperty(prop, new_val)
      })
    }
    const getCssVar = (sel) => getComputedStyle(document.querySelector(":root")).getPropertyValue(sel);
    // this is just needed in rooms so vola logo can match the rest of the theme
    const main_color = getCssVar("--main-color");
    const shaded_color = shadeColor(main_color, -0.5);
    $$("v_gradient_stop1", "stop-color", main_color);
    $$("v_gradient_stop2", "stop-color", shaded_color);
    $$("v_stroke_background", "fill", main_color);
    $$("v_stroke_border", "stroke", "none");
  }
}) ();
