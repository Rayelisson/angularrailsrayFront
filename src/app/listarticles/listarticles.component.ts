import { Component } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.scss']
})
export class ListarticlesComponent {


  articles:any;

  constructor(private articlesService: ArticleService){

  }

  ngOnInit(){
   this.ArticleList();
  }


  ArticleList(){
     this.articles = this.articlesService.listArticle().subscribe(
       article => {
        this.articles = article;
        console.log(this.articles);
       }
      )
  }

  deleteArticle(id:any){
    this.articlesService.deleteArticle(id).subscribe((article)=> {
    console.log("");
    })
  }

}
