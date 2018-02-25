import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-common-shared-description-block',
	templateUrl: './common-shared-description-block.component.html',
	styleUrls: ['./common-shared-description-block.component.scss']
})
export class CommonSharedDescriptionBlockComponent implements OnInit {

	public size: 'full' | 'partial-right' = 'partial-right';

	constructor() {
	}

	ngOnInit() {
	}

	public handleDesciptionClick() {
		this.size = this.size === 'partial-right' ? 'full' : 'partial-right';
	}

}
