import { Component, ViewChild } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { UserDataService } from '../services/menu/user-data.service';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

	faTwitter = faTwitter;
	faInstagram = faInstagram;
	faFacebook = faFacebook;
	userInfo: any = null;

	constructor(public readonly google: GoogleApiService, private user_data: UserDataService) {
		google.userProfileSubject.subscribe(info => {
			this.userInfo = info;
		})
	}

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
	carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

	getToken() {
		return this.google.getToken();
	}

	isLoggedIn(): boolean {
		return this.google.isLoggedIn();
	}


	logout() {
		this.google.signOut();
	}
}

