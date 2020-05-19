import { AfterViewInit, OnDestroy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditorBuild from '../../../vendor/ckeditor5/build/classic-editor-with-real-time-collaboration.js';
import { CloudServicesConfig } from './common-interfaces';

@Component( {
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: [ './editor.component.css' ]
} )
export class EditorComponent implements AfterViewInit, OnDestroy {
	@Input() public configuration!: CloudServicesConfig;
	@Input() public channelId!: string;
	@Output() public ready = new EventEmitter<CKEditor5.Editor>();
	@ViewChild( 'sidebar', { static: true } ) private sidebarContainer?: ElementRef<HTMLDivElement>;
	@ViewChild( 'presenceList', { static: true } ) private presenceListContainer?: ElementRef<HTMLDivElement>;

	public Editor = ClassicEditorBuild;
	public editor?: CKEditor5.Editor;

	public data = this.getInitialData();

	public get editorConfig() {
		return {
			cloudServices: {
				...this.configuration
			},
			collaboration: {
				channelId: this.channelId
			},
			sidebar: {
				container: this.sidebar,
			},
			presenceList: {
				container: this.presenceList,
			}
		};
	}

	// Note that Angular refs can be used once the view is initialized so we need to create
	// these containers and use in the above editor configuration to workaround this problem.
	private sidebar = document.createElement( 'div' );
	private presenceList = document.createElement( 'div' );

	private boundRefreshDisplayMode = this.refreshDisplayMode.bind( this );
	private boundCheckPendingActions = this.checkPendingActions.bind( this );

	public ngAfterViewInit() {
		if ( !this.sidebarContainer || !this.presenceListContainer ) {
			throw new Error( 'Div containers for sidebar or presence list were not found' );
		}

		this.sidebarContainer.nativeElement.appendChild( this.sidebar );
		this.presenceListContainer.nativeElement.appendChild( this.presenceList );
	}

	public ngOnDestroy() {
		window.removeEventListener( 'resize', this.boundRefreshDisplayMode );
		window.removeEventListener( 'beforeunload', this.boundCheckPendingActions );
	}

	private onReady( editor: CKEditor5.Editor ) {
		this.editor = editor;
		this.ready.emit( editor );

		// Prevent closing the tab when any action is pending.
		window.addEventListener( 'beforeunload', this.boundCheckPendingActions );

		// Switch between inline and sidebar annotations according to the window size.
		window.addEventListener( 'resize', this.boundRefreshDisplayMode );
		this.refreshDisplayMode();
	}

	private checkPendingActions( domEvt ) {
		if ( this.editor.plugins.get( 'PendingActions' ).hasAny ) {
			domEvt.preventDefault();
			domEvt.returnValue = true;
		}
	}

	private refreshDisplayMode() {
		const annotations = this.editor.plugins.get( 'Annotations' );
		const sidebarElement = this.sidebarContainer.nativeElement;

		if ( window.innerWidth < 1070 ) {
			sidebarElement.classList.remove( 'narrow' );
			sidebarElement.classList.add( 'hidden' );
			annotations.switchTo( 'inline' );
		}
		else if ( window.innerWidth < 1300 ) {
			sidebarElement.classList.remove( 'hidden' );
			sidebarElement.classList.add( 'narrow' );
			annotations.switchTo( 'narrowSidebar' );
		}
		else {
			sidebarElement.classList.remove( 'hidden', 'narrow' );
			annotations.switchTo( 'wideSidebar' );
		}
	}

	private getInitialData() {
		return `` ;
	}
}
