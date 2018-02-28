import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
	selector: 'assignment-4-tag-list',
	templateUrl: './tag-list.component.html',
	styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

	@Input() items: Array<string>;
	@Input() selectedItemSubject: Subject<string>;

	constructor() {
	}

	ngOnInit() {
	}

	public handleItemClick(item: string) {
	}

}