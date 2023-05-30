import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.scss']
})
export class CreatearticleComponent {

  article: any;

  articleForm = new FormGroup({
    title: new FormControl(""),
    body: new FormControl(""),
    author: new FormControl(""),

  });

  constructor(private articleService: ArticleService){

  }

  onSubmit(){
    this.articleService.addArticle(this.articleForm.value).subscribe(
      article => {
       this.article = article;
      }

      );
  }


}
