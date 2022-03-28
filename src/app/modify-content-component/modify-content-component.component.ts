import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '.././movie-service.service';
import { Movie } from '../../helper-files/movie';
import { ContentListComponent } from '../content-list/content-list.component';
import { DataService } from '../data.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent implements OnInit {
  url: any;
  nameRequired: any;
  movie_id : any;
  movies = {
    id: 0,
    Name: '',
    Genre: [],
    Price: '',
    imgURL: '',
    writer: '',
  };

  selectOptions = {
    multiple: true,
  };

  submitted = false;
  movieList: Movie[] = [];

  constructor(
    private movieServiceService: MovieServiceService,
    private contentListComponent: ContentListComponent,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.nameRequired = false;
    this.movieServiceService
      .getContentList()
      .subscribe((response) => (this.movieList = response));
  }
  selectedFile: ImageSnippet;
  onFileChanged(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  onSubmit() {
    this.validate(this.movies);
    this.movies.id = Number(this.movie_id);
    if (this.movies.id > 0) {
      this.movieServiceService
      .updateMovieList(this.movies)
      .subscribe((data) => {
          data.imgURL = this.url;
          data.Genre = data.Genre.toString().split(',');
          data.Price = '$' + data.Price;
          this.movieList[data.id-1] = data;
          this.resetForm();
          this.contentListComponent.updateList(this.movieList);
      });
    }else {
      this.movieServiceService.addNewMovies(this.movies).subscribe((data) => {
        data.imgURL = this.url;
        data.id = this.dataService.genId(this.movieList);
        data.Genre = data.Genre.toString().split(',');
        data.Price = '$' + data.Price;
        if (data.Name !== 'undefiend' && data.Name !== '') {
          this.movieList.push(data);
        }
      });
      this.resetForm();
      this.contentListComponent.updateList(this.movieList);
    }

  }
  resetForm() {
    this.movies.id = 0;
    this.movies.Name = '';
    this.movies.Genre = [];
    this.movies.Price = '';
    this.movies.imgURL = '';
    this.movies.writer = '';
    this.movie_id = '';
  }
  validate(movies: any)
  {
    if (movies.Name == 'undefiend' || movies.Name == '') {
      this.nameRequired = true;
    }
  }
}
