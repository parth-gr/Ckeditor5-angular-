/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * This file is licensed under the terms of the MIT License (see LICENSE.md).
 */

import BaseEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import SimpleUploadAdapter from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import SpecialCharacters from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@ckeditor/ckeditor5-special-characters/src/specialcharacters'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';

import PageBreak from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@ckeditor/ckeditor5-page-break/src/pagebreak';
import CodeBlock from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@ckeditor/ckeditor5-code-block/src/codeblock' ;
import Mention from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@ckeditor/ckeditor5-mention/src/mention' ;
import Emoji from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@wwalc/ckeditor5-emoji/src/emoji' ;
import Autosave from '/home/mohitmg25/Desktop/Ckeditor5-angular--master/vendor/ckeditor5/node_modules/@ckeditor/ckeditor5-autosave/src/autosave' ;

import RealTimeCollaborativeEditing from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting';
import RealTimeCollaborativeComments from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments';
import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges';
import PresenceList from '@ckeditor/ckeditor5-real-time-collaboration/src/presencelist';

export default class ClassicEditorWithRealTimeCollaboration extends BaseEditor {}

ClassicEditorWithRealTimeCollaboration.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	EasyImage,
	Essentials,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	PresenceList,
	RealTimeCollaborativeEditing,
	RealTimeCollaborativeComments,
	RealTimeCollaborativeTrackChanges,
	RemoveFormat,
	Strikethrough,
	Table,
	TableToolbar,
	Underline,
	UploadAdapter,
	SimpleUploadAdapter,
	SpecialCharacters,
	SpecialCharactersEssentials,
	PageBreak,
	CodeBlock,
	Mention,
	Emoji,
	Autosave
];

ClassicEditorWithRealTimeCollaboration.defaultConfig = {
	toolbar: [
		'heading',
		'|',
		'fontsize',
		'fontfamily',
		'|',
		'bold',
		'italic',
		'underline',
		'strikethrough',
		'removeFormat',
		'highlight',
		'|',
		'alignment',
		'|',
		'numberedList',
		'bulletedList',
		'pageBreak',
		'codeBlock',
		'|',
		'link',
		'blockquote',
		'imageUpload',
		'insertTable',
		'mediaEmbed',
		'|',
		'undo',
		'redo',
		'|',
		'comment',
		'trackChanges',

		'|',
		'simpleUpload',
		'specialCharacters',
		'emoji',
		'autosave'

	],
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative',
			'|',
			'comment'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		],
		tableToolbar: [ 'comment' ]
	},
	mediaEmbed: {
		toolbar: [ 'comment' ]
	},
	mention: {
		feeds: [
			{
				marker: '@',
				feed: [ '@Barney', '@Lily', '@Marshall', '@Robin', '@Ted' ],
				minimumCharacters: 1
			}
		]
	},
	cloudServices: {
		tokenUrl: ' https://71222.cke-cs.com/token/dev/4iZ8xGV4ZzgwQOQjAx9xDwz3xzq3fKc3IIOabHOHFMMnD20LJSiImBaeK5eL',
		uploadUrl: 'https://71222.cke-cs.com/easyimage/upload/',
		webSocketUrl: '71222.cke-cs.com/ws'
	  }
};
