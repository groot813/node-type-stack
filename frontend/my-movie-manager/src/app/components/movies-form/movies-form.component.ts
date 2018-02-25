import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounceTime';
import { Movie } from '../../../../../../domain/models/Movie.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';



@Component({
    selector: 'app-imdb-movies-search',
    templateUrl: './movies-form.component.html',
    styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements OnInit, OnDestroy {

    public searchControl: FormControl = new FormControl("");
    public movies$: Observable<Array<Movie>> = this.moviesService.searchMovies$();
    private searchControlSubscription: Subscription = this.createSearchControlSubscription();

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.searchControlSubscription.unsubscribe();
    }

    public handleAddToBucketClick(movie: Movie) {
        this.moviesService.saveMovie$([movie])
			.subscribe();
    }

    private createSearchControlSubscription (): Subscription {
        return this.searchControl.valueChanges
        .debounceTime(500)
        .subscribe(search => {
            console.log(search);
            this.moviesService.searchMovies$(search)
                .subscribe()
        })
    }

}
