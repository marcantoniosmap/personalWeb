// import journal from './weeklyJournal.js'
var journal=
{
    "objects":[
        {
            "index":1,
            "title":"First Journal, 17 February",
            "content":"On the first week of this course, we focused mainly on the introduction of AI, what is it and what are the attributes that create them. We also touch a bit of history of the AI itself, and finished by the task environment discussion. There was no progress on the final project yet i have confirmed my group, which is with Figo Aranta."
        },
        {
            "index":2,
            "title":"Second Journal, 24 February",
            "content":"This session we dig deeper into the BFS and DFS algorithm, what are the nodes and which actually is more efficient. Although my team and i had no significant progress on the project, we have discussed alot about models and machine learning library that we could use in our final."
        },
        {
            "index":3,
            "title":"Third Journal, 2 March",
            "content":"Just like last week we were still discussing about algorithm, specifically in local search algorithm. We were taught on how to calculate simulated annealing to measure acceptance. After, we dig deeper into genetic algorithm and the examples of it. One of the examples is the queen on the chessboard. We came into conclusion about our final project, which had something to do with the mental illness issues, and how can the AI help them"
        },
        {
            "index":4,
            "title":"Fourth Journal, 9 March",
            "content":"On the fourth week, we are learning the different approaches and techniques in Ai,and minimax algorithm came into discussion. We take example of using minimax algoritm in deciding moves in board games like chess and tic-tac-toe, also calculating it's heuristic and approximations."
        },
        {
            "index":5,
            "title":"Fifth Journal, 16 March",
            "content":"We have started our online class, and this time we are discussing about the difference in supervised and unsupervised learning, all the advantages, disadvantages and parameters. "
        }
    ]
}

// var journal = require('./weeklyJournal')
// class Journal{
//     constructor(week,title,content){
//       this.week =week;
//       this.title=title;
//       this.content=content;
//     }
//   }
  
//   post1= new Journal(1,"First Journal, 17 February","On the first week of this course, we focused mainly on the introduction of AI, what is it and what are the attributes that create them. We also touch a bit of history of the AI itself, and finished by the task environment discussion. There was no progress on the final project yet i have confirmed my group, which is with Figo Aranta.");
//   post2= new Journal(2,"Second Journal 24 February","This session we dig deeper into the BFS and DFS algorithm, what are the nodes and which actually is more efficient. Although my team and i had no significant progress on the project, we have discussed alot about models and machine learning library that we could use in our final.");
//   post3= new Journal(3,"Third Journal 2 March","Just like last week we were still discussing about algorithm, specifically in local search algorithm. We were taught on how to calculate simulated annealing to measure acceptance. After, we dig deeper into genetic algorithm and the examples of it. One of the examples is the queen on the chessboard. We came into conclusion about our final project, which had something to do with the mental illness issues, and how can the AI help them");
//   post4= new Journal(4,"Fourth Journal 9 March","-");
  
  
//   var posts=[post1,post2,post3,post4]
  
  $(document).ready(function(){

    console.log(journal.objects)
  function changeContent(num){

    $("#journal-content").html("");
    if(num==1){
      for(var i=0; i <journal.objects.length;i++)
      {
        $("#journal-content").append(' <div class="card mb-4"><div class="card-header"><b> Week '+journal.objects[i].index+'</b></div><div class="card-body text-left"> <h5 class="font-paragraph card-title">'+journal.objects[i].title+'</h5>  <p class="card-text">'+journal.objects[i].content+'</p></div></div>');
      }
    }
    else{
      for(i=posts.length-1; i>=0;i--)
      {
        $("#journal-content").append(' <div class="card mb-4"><div class="card-header"><b> Week '+journal.objects[i].index+'</b></div><div class="card-body text-left"> <h5 class="font-paragraph card-title">'+journal.objects[i].title+'</h5>  <p class="card-text">'+journal.objects[i].content+'</p></div></div>');
      }
    }
  };
  changeContent(1);
})